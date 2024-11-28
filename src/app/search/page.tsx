import { Suspense } from 'react'
import SearchResults from '../components/homepage/SearchResults'
import SearchFilters from '../components/homepage/SearchFilters'

export default function SearchPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Search Results</h1>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/4">
                    <SearchFilters />
                </div>
                <div className="w-full md:w-3/4">
                    <Suspense fallback={<div>Loading...</div>}>
                        <SearchResults searchParams={searchParams} />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

