import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
                <p className="text-gray-600 mb-4">The blog post you are looking for doesn&apos;t exist.</p>
                <Link
                    href="/blogs"
                    className="text-blue-600 hover:text-blue-800 underline"
                >
                    Back to Blogs
                </Link>
            </div>
        </div>
    )
} 