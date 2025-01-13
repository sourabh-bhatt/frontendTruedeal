import Image from 'next/image'
import Link from 'next/link'

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    category: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 'petra-by-night',
        title: 'Travel to Jordan on Budget with this 6-Days Itinerary',
        excerpt: 'Discover how to explore Jordan\'s wonders without breaking the bank with our comprehensive 6-day itinerary covering Petra, Wadi Rum, and the Dead Sea.',
        image: '/UGCImages/folder3/france/horizontal/1.webp',
        date: 'March 15, 2024',
        category: 'Travel Guide'
    },
    {
        id: 'singapore-gardens',
        title: 'Gardens by the Bay: Singapore\'s Futuristic Nature Park',
        excerpt: 'Experience the magical blend of nature and technology at Singapore\'s most iconic garden.',
        image: '/GoogleReviews/3/shubham (1).png',
        date: 'March 12, 2024',
        category: 'Attractions'
    },
    {
        id: 'marina-bay-sands',
        title: 'Ultimate Guide to Marina Bay Sands Singapore',
        excerpt: 'Everything you need to know about staying and playing at Singapore\'s most luxurious hotel.',
        image: "/GoogleReviews/2/IMG-20250103-WA0046.jpg",

        date: 'March 10, 2024',
        category: 'Luxury Travel'
    },
    {
        id: 'sentosa-island',
        title: 'Sentosa Island: Singapore\'s Playground Paradise',
        excerpt: 'From beaches to theme parks, discover the best attractions on Sentosa Island.',
        image: "/GoogleReviews/1/Screenshot 2025-01-07 031446.png",

        date: 'March 8, 2024',
        category: 'Family Travel'
    },
    {
        id: 'dubai-desert-safari',
        title: 'Dubai Desert Safari: Ultimate Adventure Guide',
        excerpt: 'From dune bashing to desert camping, experience the best of Dubai\'s desert.',
        image: "/GoogleReviews/4/Screenshot 2025-01-07 042033.png",

        date: 'March 5, 2024',
        category: 'Adventure'
    },
    {
        id: 'burj-khalifa',
        title: 'Visiting Burj Khalifa: Tips and Tricks',
        excerpt: 'Make the most of your visit to the world\'s tallest building.',
        image: "/GoogleReviews/5/akb (1).png",

        date: 'March 3, 2024',
        category: 'Dubai Attractions'
    },
    {
        id: 'dubai-mall',
        title: 'Dubai Mall: Shopping and Entertainment Guide',
        excerpt: 'Navigate the world\'s largest mall like a pro.',
        image: "/GoogleReviews/6/a (1).png",

        date: 'February 28, 2024',
        category: 'Shopping'
    },
    {
        id: 'singapore-food',
        title: 'Singapore Hawker Centers: A Food Lover\'s Paradise',
        excerpt: 'Discover the best local dishes and where to find them.',
        image: "/GoogleReviews/7/surya (1).png",

        date: 'February 25, 2024',
        category: 'Food & Dining'
    },
    {
        id: 'singapore-night-safari',
        title: 'Night Safari: Singapore\'s Nocturnal Adventure',
        excerpt: 'Experience the world\'s first nocturnal wildlife park.',
        image: "/GoogleReviews/8/andaman (1).png",

        date: 'February 22, 2024',
        category: 'Nature & Wildlife'
    },
    {
        id: 'singapore-chinatown',
        title: 'Exploring Singapore\'s Historic Chinatown',
        excerpt: 'A walking guide through Singapore\'s cultural heart.',
        image: "/GoogleReviews/9/vc (1).png",

        date: 'February 20, 2024',
        category: 'Culture'
    },
    {
        id: 'dubai-palm',
        title: 'Palm Jumeirah: Dubai\'s Man-Made Wonder',
        excerpt: 'Discover the attractions and luxury resorts on the Palm.',
        image: "/GoogleReviews/10/chintan (1).png",

        date: 'February 18, 2024',
        category: 'Destinations'
    },
    {
        id: 'dubai-marina',
        title: 'Dubai Marina: Waterfront Lifestyle Guide',
        excerpt: 'Experience the best of Dubai\'s stunning marina district.',
        image: '/Assets/GoogleReviews/12.jpg',
        date: 'February 15, 2024',
        category: 'Lifestyle'
    },
    {
        id: 'singapore-river',
        title: 'Singapore River: Clarke Quay to Marina Bay',
        excerpt: 'A complete guide to Singapore\'s historic waterfront.',
        image: "/GoogleReviews/11/swetabh (1).png",

        date: 'February 12, 2024',
        category: 'City Guides'
    },
];

export default function BlogsPage() {
    const featuredPost = blogPosts[0]; // Jordan post as featured
    const remainingPosts = blogPosts.slice(1);

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Featured Post */}
            <Link href={`/blogs/${featuredPost.id}`}>
                <div className="relative w-full h-[500px] rounded-xl overflow-hidden mb-16">
                    <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h1 className="text-4xl font-bold mb-4">{featuredPost.title}</h1>
                        <div className="flex items-center text-sm">
                            <span className="bg-blue-500 px-3 py-1 rounded-full">
                                {featuredPost.category}
                            </span>
                            <span className="mx-2">•</span>
                            <span>{featuredPost.date}</span>
                        </div>
                    </div>
                </div>
            </Link>

            {/* The Blog Asia Stories */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">The Blog Asia Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {remainingPosts.slice(0, 4).map((post) => (
                        <Link href={`/blogs/${post.id}`} key={post.id}>
                            <div className="group">
                                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-gray-500">{post.date}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Best of Dubai */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Best of Dubai</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {remainingPosts.slice(4, 7).map((post) => (
                        <Link href={`/blogs/${post.id}`} key={post.id}>
                            <div className="group">
                                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-gray-500">{post.date}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Best of Singapore */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Best of Singapore</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {remainingPosts.slice(7, 10).map((post) => (
                        <Link href={`/blogs/${post.id}`} key={post.id}>
                            <div className="group">
                                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-gray-500">{post.date}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Latest News */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest News</h2>
                <div className="grid grid-cols-1 gap-6">
                    {remainingPosts.slice(0, 5).map((post) => (
                        <Link href={`/blogs/${post.id}`} key={post.id}>
                            <div className="flex items-center gap-6 group">
                                <div className="relative w-48 h-32 rounded-lg overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                                    <p className="text-sm text-gray-500 mt-2">{post.date}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}
