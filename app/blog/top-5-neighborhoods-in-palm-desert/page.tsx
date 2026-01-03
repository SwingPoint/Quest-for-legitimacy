import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top 5 Neighborhoods in Palm Desert | Best Places to Live | Brenda Devlin',
  description: 'Discover the top 5 neighborhoods in Palm Desert, California. From gated communities to golf course estates, find the perfect place to call home. Expert guide by Brenda Devlin.',
  keywords: 'Palm Desert neighborhoods, best places to live Palm Desert, Palm Desert communities, desert gated communities, Palm Desert real estate, Brenda Devlin',
  openGraph: {
    title: 'Top 5 Neighborhoods in Palm Desert: Where Luxury Meets Desert Beauty',
    description: 'Explore the most sought-after neighborhoods in Palm Desert',
    type: 'article',
  },
};

export default function BlogPost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top 5 Neighborhoods in Palm Desert: Where Luxury Meets Desert Beauty',
    author: { '@type': 'Person', name: 'Brenda Devlin' },
    datePublished: '2026-01-01',
    about: {
      '@type': 'Place',
      name: 'Palm Desert',
      address: { '@type': 'PostalAddress', addressLocality: 'Palm Desert', addressRegion: 'CA' },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <article className="min-h-screen bg-white">
        <header className="bg-gradient-to-r from-amber-600 to-orange-500 text-white py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center gap-2 text-amber-200 mb-4">
              <Link href="/blog" className="hover:text-white">Blog</Link>
              <span>→</span>
              <span>Neighborhoods</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Top 5 Neighborhoods in Palm Desert: Where Luxury Meets Desert Beauty
            </h1>
            <div className="flex items-center gap-4 text-amber-100">
              <span>January 1, 2026</span>
              <span>•</span>
              <span>7 min read</span>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="prose prose-lg max-w-none">
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              <strong>Palm Desert</strong> is a mosaic of distinct neighborhoods, each with its own character, amenities, and lifestyle. Whether you're seeking a vibrant golf community, a quiet retreat, or a family-friendly enclave, Palm Desert has a neighborhood that's perfect for you. Here are my top 5 picks for 2026.
            </p>

            {/* Neighborhood 1 */}
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-8 rounded-2xl my-10 border-l-4 border-emerald-500">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🏆</span>
                <h2 className="text-2xl font-bold text-gray-800 m-0">#1 Palm Valley Country Club</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Known as the "FUN Club," Palm Valley Country Club is a 55+ community that redefines active adult living. With two Ted Robinson-designed golf courses, 46 pools and spas, tennis courts, pickleball, and an incredible social calendar, this community is perfect for those who want to stay active and engaged.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <strong className="text-emerald-700">Price Range:</strong>
                  <p className="text-gray-600 m-0">$400,000 - $1,200,000</p>
                </div>
                <div>
                  <strong className="text-emerald-700">Best For:</strong>
                  <p className="text-gray-600 m-0">Active retirees, golf lovers, social butterflies</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">⛳ 36 Holes</span>
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">🏊 46 Pools</span>
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">🎾 Tennis</span>
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">🏓 Pickleball</span>
              </div>
            </div>

            {/* Neighborhood 2 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl my-10 border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🥈</span>
                <h2 className="text-2xl font-bold text-gray-800 m-0">#2 The Lakes Country Club</h2>
              </div>
              <p className="text-gray-700 mb-4">
                An exclusive gated community featuring a stunning 27-hole championship golf course with dramatic water features. The Lakes offers larger lots, custom homes, and a more private atmosphere while still providing world-class amenities.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <strong className="text-blue-700">Price Range:</strong>
                  <p className="text-gray-600 m-0">$600,000 - $2,500,000</p>
                </div>
                <div>
                  <strong className="text-blue-700">Best For:</strong>
                  <p className="text-gray-600 m-0">Privacy seekers, serious golfers, families</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">⛳ 27 Holes</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">🔒 Gated</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">🏠 Custom Homes</span>
              </div>
            </div>

            {/* Neighborhood 3 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl my-10 border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🥉</span>
                <h2 className="text-2xl font-bold text-gray-800 m-0">#3 Ironwood Country Club</h2>
              </div>
              <p className="text-gray-700 mb-4">
                One of Palm Desert's most prestigious addresses, Ironwood offers two immaculate golf courses in a luxurious setting at the base of the Santa Rosa Mountains. The community features beautiful custom homes, a full-service clubhouse, and an active social scene.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <strong className="text-purple-700">Price Range:</strong>
                  <p className="text-gray-600 m-0">$700,000 - $3,000,000</p>
                </div>
                <div>
                  <strong className="text-purple-700">Best For:</strong>
                  <p className="text-gray-600 m-0">Luxury buyers, mountain view lovers, golfers</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">⛳ 36 Holes</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">🏔️ Mountain Views</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">✨ Luxury</span>
              </div>
            </div>

            {/* Neighborhood 4 */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-2xl my-10 border-l-4 border-amber-500">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">4️⃣</span>
                <h2 className="text-2xl font-bold text-gray-800 m-0">#4 Desert Willow</h2>
              </div>
              <p className="text-gray-700 mb-4">
                A newer community built around two award-winning public golf courses. Desert Willow offers a mix of single-family homes and condos, making it accessible to a broader range of buyers. The contemporary architecture and mountain views create a stunning backdrop for desert living.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <strong className="text-amber-700">Price Range:</strong>
                  <p className="text-gray-600 m-0">$450,000 - $1,500,000</p>
                </div>
                <div>
                  <strong className="text-amber-700">Best For:</strong>
                  <p className="text-gray-600 m-0">Young professionals, families, modern architecture fans</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">⛳ Public Golf</span>
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">🏗️ Modern</span>
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">👨‍👩‍👧 All Ages</span>
              </div>
            </div>

            {/* Neighborhood 5 */}
            <div className="bg-gradient-to-r from-rose-50 to-red-50 p-8 rounded-2xl my-10 border-l-4 border-rose-500">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">5️⃣</span>
                <h2 className="text-2xl font-bold text-gray-800 m-0">#5 Portola Country Club</h2>
              </div>
              <p className="text-gray-700 mb-4">
                A hidden gem offering exceptional value, Portola features a challenging 18-hole golf course and well-maintained facilities. The community has a friendly, welcoming atmosphere and lower HOA fees than many comparable communities.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <strong className="text-rose-700">Price Range:</strong>
                  <p className="text-gray-600 m-0">$350,000 - $900,000</p>
                </div>
                <div>
                  <strong className="text-rose-700">Best For:</strong>
                  <p className="text-gray-600 m-0">Value seekers, first-time desert buyers, snowbirds</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm">💰 Great Value</span>
                <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm">⛳ 18 Holes</span>
                <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm">🤝 Friendly</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-600 to-orange-500 text-white p-8 rounded-2xl my-12">
              <h3 className="text-2xl font-bold mb-4">
                Not Sure Which Neighborhood is Right for You?
              </h3>
              <p className="text-amber-100 mb-6">
                Every buyer is unique, and the "best" neighborhood depends on your lifestyle, budget, and priorities. As a Palm Desert specialist, I know every community intimately and can help match you with your perfect neighborhood.
              </p>
              <p className="text-xl font-semibold mb-4">
                Let me give you a personalized neighborhood tour!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+17605551234" className="bg-white text-amber-600 px-6 py-3 rounded-lg font-bold hover:bg-amber-50 transition text-center">
                  📞 Call Brenda: (760) 555-1234
                </a>
                <a href="mailto:brenda@windermere.com" className="bg-amber-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-800 transition text-center">
                  ✉️ Email: brenda@windermere.com
                </a>
              </div>
            </div>

          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-600 to-orange-500 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Discover Your Perfect Palm Desert Neighborhood
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Schedule a private tour of these incredible communities with Brenda
            </p>
            <a href="tel:+17605551234" className="inline-block bg-white text-amber-600 px-10 py-4 rounded-lg font-bold text-xl hover:bg-amber-50 transition shadow-lg">
              🏘️ Schedule Your Neighborhood Tour
            </a>
          </div>
        </div>
      </article>
    </>
  );
}

