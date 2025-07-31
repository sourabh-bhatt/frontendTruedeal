'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { useDestinations, useMediaAssets } from '@/hooks/useDestinations'

export default function MediaManagement() {
    const [selectedDestination, setSelectedDestination] = useState<number | null>(null)
    const [uploadProgress, setUploadProgress] = useState<number>(0)
    const [uploading, setUploading] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const { destinations } = useDestinations()
    const { mediaAssets, loading, refetch } = useMediaAssets({
        destinationId: selectedDestination || undefined
    })

    const handleFileUpload = async (files: FileList | null) => {
        if (!files || !selectedDestination) return

        setUploading(true)
        setUploadProgress(0)

        try {
            for (let i = 0; i < files.length; i++) {
                const file = files[i]

                // Upload to S3 (you'll need to implement S3 upload logic)
                const s3Url = await uploadToS3(file)

                // Save to database
                await fetch('/api/media', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        destination_id: selectedDestination,
                        asset_type: 'gallery', // Default, can be changed later
                        file_type: file.type.startsWith('video/') ? 'video' : 'image',
                        file_format: file.name.split('.').pop(),
                        s3_url: s3Url,
                        alt_text: `${destinations.find(d => d.id === selectedDestination)?.name} ${file.name}`,
                        display_order: 0,
                        is_primary: false
                    })
                })

                setUploadProgress(((i + 1) / files.length) * 100)
            }

            // Refresh media list
            refetch()

            // Reset file input
            if (fileInputRef.current) {
                fileInputRef.current.value = ''
            }
        } catch (error) {
            console.error('Upload failed:', error)
            alert('Upload failed. Please try again.')
        } finally {
            setUploading(false)
            setUploadProgress(0)
        }
    }

    const uploadToS3 = async (file: File): Promise<string> => {
        // This is a placeholder - implement your S3 upload logic
        // You can use AWS SDK or a presigned URL approach

        const formData = new FormData()
        formData.append('file', file)
        formData.append('destination_id', selectedDestination?.toString() || '')

        const response = await fetch('/api/upload-s3', {
            method: 'POST',
            body: formData
        })

        const data = await response.json()
        return data.s3_url
    }

    const updateMediaAsset = async (assetId: number, updates: any) => {
        try {
            await fetch('/api/media', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: assetId,
                    ...updates
                })
            })
            refetch()
        } catch (error) {
            console.error('Update failed:', error)
        }
    }

    const deleteMediaAsset = async (assetId: number) => {
        if (!confirm('Are you sure you want to delete this media asset?')) return

        try {
            await fetch(`/api/media?id=${assetId}`, {
                method: 'DELETE'
            })
            refetch()
        } catch (error) {
            console.error('Delete failed:', error)
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Media Management</h1>

            {/* Destination Selector */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Destination
                </label>
                <select
                    value={selectedDestination || ''}
                    onChange={(e) => setSelectedDestination(e.target.value ? parseInt(e.target.value) : null)}
                    className="w-full md:w-80 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Choose a destination...</option>
                    {destinations.map((dest) => (
                        <option key={dest.id} value={dest.id}>
                            {dest.name} ({dest.country})
                        </option>
                    ))}
                </select>
            </div>

            {selectedDestination && (
                <>
                    {/* File Upload */}
                    <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Upload Media</h2>

                        <div className="flex items-center space-x-4">
                            <input
                                ref={fileInputRef}
                                type="file"
                                multiple
                                accept="image/*,video/*"
                                onChange={(e) => handleFileUpload(e.target.files)}
                                disabled={uploading}
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />

                            {uploading && (
                                <div className="flex items-center space-x-2">
                                    <div className="w-32 bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                            style={{ width: `${uploadProgress}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-sm text-gray-600">{Math.round(uploadProgress)}%</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Media Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {loading ? (
                            <div className="col-span-full text-center py-8">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                            </div>
                        ) : (
                            mediaAssets.map((asset) => (
                                <div key={asset.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    {/* Media Preview */}
                                    <div className="relative h-48 bg-gray-100">
                                        {asset.file_type === 'video' ? (
                                            <video
                                                src={asset.s3_url}
                                                className="w-full h-full object-cover"
                                                controls
                                            />
                                        ) : (
                                            <Image
                                                src={asset.s3_url}
                                                alt={asset.alt_text || 'Media asset'}
                                                fill
                                                className="object-cover"
                                            />
                                        )}

                                        {asset.is_primary && (
                                            <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                                                Primary
                                            </div>
                                        )}
                                    </div>

                                    {/* Media Controls */}
                                    <div className="p-4">
                                        <div className="mb-3">
                                            <label className="block text-xs font-medium text-gray-700 mb-1">
                                                Asset Type
                                            </label>
                                            <select
                                                value={asset.asset_type}
                                                onChange={(e) => updateMediaAsset(asset.id, { asset_type: e.target.value })}
                                                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                            >
                                                <option value="banner">Banner</option>
                                                <option value="gallery">Gallery</option>
                                                <option value="background">Background</option>
                                                <option value="thumbnail">Thumbnail</option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label className="block text-xs font-medium text-gray-700 mb-1">
                                                Alt Text
                                            </label>
                                            <input
                                                type="text"
                                                value={asset.alt_text || ''}
                                                onChange={(e) => updateMediaAsset(asset.id, { alt_text: e.target.value })}
                                                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                                placeholder="Description for accessibility"
                                            />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={asset.is_primary}
                                                    onChange={(e) => updateMediaAsset(asset.id, { is_primary: e.target.checked })}
                                                    className="mr-2"
                                                />
                                                <span className="text-xs text-gray-700">Primary</span>
                                            </label>

                                            <button
                                                onClick={() => deleteMediaAsset(asset.id)}
                                                className="text-red-600 hover:text-red-800 text-sm font-medium"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </>
            )}
        </div>
    )
}