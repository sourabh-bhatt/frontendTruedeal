import Image from 'next/image'
import { notFound } from 'next/navigation'

interface BlogPost {
    title: string;
    content: string;
    image: string;
    date: string;
    author: string;
    category: string;
    readTime: string;
    tags: string[];
}

const blogPosts: Record<string, BlogPost> = {
    'petra-by-night': {
        title: 'Travel to Jordan on Budget with this 6-Days Itinerary',
        content: `
            <p class="lead">Jordan is a fascinating country with rich history and incredible landscapes. This 6-day itinerary will help you explore the best of Jordan without breaking the bank.</p>

            <h2>Day 1-2: Petra</h2>
            <p>The ancient city of Petra is Jordan's crown jewel. Start your journey early to avoid crowds and heat. The Treasury is breathtaking at sunrise, and the Monastery trek offers spectacular views.</p>

            <h2>Day 3: Wadi Rum</h2>
            <p>Experience the magical desert landscape of Wadi Rum. Stay in a Bedouin camp, enjoy traditional food, and watch the sunset paint the red sands in golden hues.</p>

            <h2>Budget Tips:</h2>
            <ul>
                <li>Purchase the Jordan Pass before arrival</li>
                <li>Use public transportation between cities</li>
                <li>Stay in local guesthouses</li>
                <li>Eat at local restaurants</li>
            </ul>
        `,
        image: '/UGCImages/folder3/france/horizontal/1.webp',
        date: 'March 15, 2024',
        author: 'Sarah Thompson',
        category: 'Travel Guide',
        readTime: '8 min read',
        tags: ['Jordan', 'Budget Travel', 'Middle East', 'Cultural Travel']
    },
    'singapore-gardens': {
        title: 'Gardens by the Bay: Singapore\'s Futuristic Nature Park',
        content: `
            <p class="lead">Experience the magical blend of nature and technology at Singapore's most iconic garden.</p>

            <h2>Supertree Grove</h2>
            <p>Marvel at the iconic vertical gardens that come alive at night with a spectacular light show. These 25-50 meter tall structures are architectural wonders that also serve as environmental engines for the gardens.</p>

            <h2>Flower Dome & Cloud Forest</h2>
            <p>Step into the world's largest glass greenhouse and experience diverse flora from Mediterranean and tropical regions. The Cloud Forest features a 35-meter tall indoor waterfall and mountain of plant life.</p>

            <h2>Visitor Tips:</h2>
            <ul>
                <li>Visit during weekday evenings for smaller crowds</li>
                <li>Don't miss the Garden Rhapsody light show at 7:45pm and 8:45pm</li>
                <li>Buy combo tickets for both domes to save money</li>
                <li>Download the Gardens by the Bay mobile app for easy navigation</li>
            </ul>
        `,
        image: '/GoogleReviews/3/shubham (1).png',
        date: 'March 12, 2024',
        author: 'Michael Chen',
        category: 'Attractions',
        readTime: '10 min read',
        tags: ['Singapore', 'Nature', 'Family Activities', 'Photography Spots']
    },
    'marina-bay-sands': {
        title: 'Ultimate Guide to Marina Bay Sands Singapore',
        content: `
            <p class="lead">Everything you need to know about staying and playing at Singapore's most luxurious hotel.</p>

            <h2>The Iconic Pool</h2>
            <p>The world-famous infinity pool sits 57 stories high, offering unparalleled views of Singapore's skyline. Access is exclusive to hotel guests, making it one of the most sought-after experiences in the city.</p>

            <h2>Luxury Shopping & Dining</h2>
            <p>The Shoppes at Marina Bay Sands houses the world's leading luxury brands and celebrity chef restaurants. From Gordon Ramsay to Wolfgang Puck, experience culinary excellence at its finest.</p>

            <h2>Insider Tips:</h2>
            <ul>
                <li>Book your stay in advance for better rates</li>
                <li>Visit the pool during sunrise for the best photos</li>
                <li>Make restaurant reservations at least a month ahead</li>
                <li>Don't miss the Spectra light and water show</li>
            </ul>
        `,
        image: "/GoogleReviews/2/IMG-20250103-WA0046.jpg",
        date: 'March 10, 2024',
        author: 'Jessica Wong',
        category: 'Luxury Travel',
        readTime: '12 min read',
        tags: ['Singapore', 'Luxury', 'Hotels', 'Fine Dining']
    },
    'dubai-desert-safari': {
        title: 'Dubai Desert Safari: Ultimate Adventure Guide',
        content: `
            <p class="lead">From dune bashing to desert camping, experience the best of Dubai's desert adventures.</p>

            <h2>Morning Safari vs Evening Safari</h2>
            <p>Choose between the tranquility of a morning safari with desert wildlife spotting, or the magical evening experience with traditional performances and BBQ dinner under the stars.</p>

            <h2>Activities to Experience</h2>
            <ul>
                <li>Dune bashing in 4x4 vehicles</li>
                <li>Camel riding at sunset</li>
                <li>Sandboarding on golden dunes</li>
                <li>Traditional Arabic entertainment</li>
                <li>Henna painting and Arabic coffee</li>
            </ul>

            <h2>Pro Tips:</h2>
            <p>Book during winter months (October-March) for the most comfortable weather. Wear comfortable clothing and bring a light jacket for evening safaris.</p>
        `,
        image: "/GoogleReviews/4/Screenshot 2025-01-07 042033.png",
        date: 'March 5, 2024',
        author: 'Ahmed Hassan',
        category: 'Adventure',
        readTime: '15 min read',
        tags: ['Dubai', 'Desert Safari', 'Adventure', 'Cultural Experience']
    }
};

interface BlogPostPageProps {
    params: {
        slug: string
    }
    searchParams: { [key: string]: string | string[] | undefined }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const post = blogPosts[params.slug]

    if (!post) {
        notFound()
    }

    return (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="relative h-96 mb-8">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-lg"
                />
            </div>

            <div className="prose prose-lg max-w-none">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

                <div className="flex flex-wrap items-center gap-4 mb-8">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
                        {post.category}
                    </span>
                    <span className="text-gray-500">{post.date}</span>
                    <span className="text-gray-500">By {post.author}</span>
                    <span className="text-gray-500">{post.readTime}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                <div
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600"
                />
            </div>
        </article>
    )
} 