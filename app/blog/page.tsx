import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Estate Blog | Palm Desert & Coachella Valley Insights | Brenda Devlin',
  description: 'Expert real estate insights for Palm Desert, La Quinta, Indian Wells, and the Coachella Valley. Home buying tips, market trends, and neighborhood guides from Brenda Devlin.',
  keywords: 'Palm Desert real estate blog, Coachella Valley homes, desert living tips, Brenda Devlin realtor',
  openGraph: {
    title: 'Real Estate Blog | Palm Desert & Coachella Valley',
    description: 'Expert real estate insights for the Coachella Valley from Brenda Devlin',
    type: 'website',
  },
};

const blogPosts = [
  {
    slug: 'why-palm-desert-is-perfect-for-golf-lovers',
    title: 'Why Palm Desert is Perfect for Golf Lovers: A Complete Guide to Golf Course Living',
    excerpt: 'Discover why Palm Desert has become the ultimate destination for golf enthusiasts. From world-class courses to stunning golf course homes, explore everything this desert paradise has to offer.',
    date: 'January 3, 2026',
    readTime: '8 min read',
    category: 'Golf Living',
    image: '⛳',
  },
  {
    slug: 'buying-your-dream-home-in-coachella-valley',
    title: 'Buying Your Dream Home in the Coachella Valley: 2026 Complete Guide',
    excerpt: 'Everything you need to know about purchasing a home in the Coachella Valley. From Palm Desert to La Quinta, discover the best neighborhoods, market trends, and insider tips.',
    date: 'January 2, 2026',
    readTime: '10 min read',
    category: 'Buyer\'s Guide',
    image: '🏡',
  },
  {
    slug: 'top-5-neighborhoods-in-palm-desert',
    title: 'Top 5 Neighborhoods in Palm Desert: Where Luxury Meets Desert Beauty',
    excerpt: 'Explore the most sought-after neighborhoods in Palm Desert. From gated communities to golf course estates, find the perfect place to call home in the California desert.',
    date: 'January 1, 2026',
    readTime: '7 min read',
    category: 'Neighborhoods',
    image: '🌴',
  },
  {
    slug: 'investing-in-desert-real-estate',
    title: 'Investing in Desert Real Estate: Why the Coachella Valley is a Smart Choice',
    excerpt: 'Learn why savvy investors are flocking to the Coachella Valley. Discover appreciation trends, rental income potential, and what makes this market unique for real estate investment.',
    date: 'December 30, 2025',
    readTime: '9 min read',
    category: 'Investment',
    image: '📈',
  },
  {
    slug: 'moving-to-palm-desert-what-to-expect',
    title: 'Moving to Palm Desert: What to Expect When Relocating to the Desert',
    excerpt: 'Thinking about relocating to Palm Desert? From climate considerations to lifestyle changes, here\'s your complete guide to making the desert your new home.',
    date: 'December 28, 2025',
    readTime: '8 min read',
    category: 'Relocation',
    image: '🚚',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Desert Living Insights
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl">
            Expert real estate advice for Palm Desert, La Quinta, Indian Wells, and the entire Coachella Valley
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <span className="text-7xl group-hover:scale-110 transition-transform">
                  {post.image}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-amber-600 mb-2">
                  <span className="bg-amber-100 px-2 py-1 rounded">{post.category}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{post.date}</span>
                  <span className="text-amber-600 font-semibold text-sm group-hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Desert Dream Home?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Let Brenda Devlin help you discover the perfect property in the Coachella Valley
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17605551234"
              className="bg-white text-amber-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition shadow-lg"
            >
              📞 Call Brenda Today
            </a>
            <a
              href="mailto:brenda@windermere.com"
              className="bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition shadow-lg"
            >
              ✉️ Email Brenda
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

