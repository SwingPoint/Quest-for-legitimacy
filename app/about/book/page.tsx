import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Book | The Quest for Legitimacy',
  description: 'How Children of Prominent Families Discover Their Unique Place in the World - by Dr. Jamie Weiner. Published by Wiley, 2022.',
  openGraph: {
    title: 'The Quest for Legitimacy Book',
    description: 'How Children of Prominent Families Discover Their Unique Place in the World',
    type: 'website',
  },
};

export default function BookPage() {
  const bookSchema = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: 'The Quest for Legitimacy',
    subtitle: 'How Children of Prominent Families Discover Their Unique Place in the World',
    author: {
      '@type': 'Person',
      name: 'Dr. Jamie Weiner',
      jobTitle: 'Clinical Psychologist',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Wiley Publishing',
    },
    datePublished: '2022',
    description: 'A groundbreaking exploration of the lived experience of those growing up in prominent families, offering a framework for discovering one\'s unique place in the world.',
    bookFormat: 'Hardcover',
    inLanguage: 'en',
  };

  return (
    <>
      <JsonLd data={bookSchema} />

      {/* Hero Section */}
      <section className="relative bg-[#3C5F5E] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">The Quest for Legitimacy</h1>
              <h2 className="text-2xl lg:text-3xl text-white/90 mb-8">
                How Children of Prominent Families Discover Their Unique Place in the World
              </h2>
              <p className="text-xl text-white/90 mb-4">By Dr. Jamie Weiner</p>
              <p className="text-lg text-white/90 mb-8">Published by Wiley, 2022</p>
              <a
                href="https://www.amazon.co.uk/Quest-Legitimacy-Children-Prominen-Families/dp/1119868270"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orange inline-block"
              >
                Order the Book
              </a>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-[480px] rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/images/book-cover.svg" 
                  alt="The Quest for Legitimacy Book Cover"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Book */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About the Book</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-xl leading-relaxed">
              Jamie brilliantly shares the findings from his research through the use of storytelling in his book, 
              published by Wiley Publishing.
            </p>
            <p className="text-lg leading-relaxed">
              The book offers readers the opportunity to understand the lived experience of those growing up in 
              prominent families and creates a language that is easy to grasp, allowing more meaningful conversations 
              to be held within families.
            </p>
            <p className="text-lg leading-relaxed">
              Through compelling narratives and evidence-based insights, <em>The Quest for Legitimacy</em> provides 
              a framework for understanding and navigating the unique pressures faced by the Rising Generation.
            </p>
          </div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Themes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Land of Giants</h3>
              <p className="text-gray-700">
                Understanding what it means to grow up in the shadow of significant family members, businesses, 
                or legacies.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Finding Your Path</h3>
              <p className="text-gray-700">
                Discovering your unique purpose and contribution while honoring your family&apos;s accomplishments.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Rising Generation</h3>
              <p className="text-gray-700">
                Connecting with a global community facing similar challenges and building meaningful relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 lg:py-24 bg-[#E37E33] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Download a Free Chapter</h2>
          <p className="text-xl mb-8">
            Take the first steps on Your Quest
          </p>
          <p className="text-lg mb-8">
            Download a <strong>free</strong> chapter of The Quest for Legitimacy - How Children of Prominent 
            Families Discover Their Unique Place in the World!
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-[#E37E33] font-semibold rounded-md hover:bg-gray-100 transition-colors"
          >
            Download the Chapter
          </Link>
          <p className="mt-6 text-sm text-white/90">
            We won&apos;t send you spam. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </>
  );
}

