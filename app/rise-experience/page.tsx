import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import NewsletterSignup from '@/components/NewsletterSignup';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The RISE Experience | The Quest for Legitimacy',
  description: 'An in-depth personal development program designed for the Rising Generation to navigate their unique quest and discover their legitimate place in the world.',
  openGraph: {
    title: 'The RISE Experience | The Quest for Legitimacy',
    description: 'An in-depth personal development program designed for the Rising Generation.',
    type: 'website',
  },
};

export default function RiseExperiencePage() {
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'The RISE Experience',
    description: 'A personal development program for the Rising Generation of prominent families',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'The Quest for Legitimacy',
      url: 'https://www.questforlegitimacy.com',
    },
    coursePrerequisites: 'None',
    educationalLevel: 'Professional Development',
    audience: {
      '@type': 'Audience',
      name: 'Rising Generation of Prominent Families',
    },
  };

  return (
    <>
      <JsonLd data={courseSchema} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 to-blue-700 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            The RISE Experience
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            Take the first steps on Your Quest
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              A Personal Development Program for the Rising Generation
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              The RISE Experience is an in-depth personal development program that will help you navigate your 
              personal Quest. We guide you through the action steps needed to uncover your true path and understand 
              the impact you can have in the world.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Who is RISE designed for?
              </p>
              <p className="text-gray-700">
                The RISE Experience is designed for the Rising Generation - those growing up in the shadow of 
                significant family members, businesses, wealth, or reputation who want to discover their own 
                legitimacy and purpose.
              </p>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              What You&apos;ll Discover
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Your Unique Path</h4>
                <p className="text-gray-700">
                  Uncover your authentic journey separate from your family&apos;s legacy while honoring their 
                  accomplishments.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Your Impact</h4>
                <p className="text-gray-700">
                  Understand the meaningful contribution you can make to your family and the world around you.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Your Community</h4>
                <p className="text-gray-700">
                  Connect with like-minded individuals facing similar challenges in a supportive, understanding 
                  environment.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Your Agency</h4>
                <p className="text-gray-700">
                  Gain the tools and confidence to take ownership of your life and pursue your purpose with clarity.
                </p>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Program Offerings
            </h3>

            <p className="text-lg text-gray-700 mb-6">
              Beyond the core RISE Experience, we are available to deliver:
            </p>

            <ul className="space-y-4 text-lg text-gray-700 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Workshops</strong> - Interactive sessions on navigating the challenges of prominent families</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>&apos;Meet the Author&apos; Dinners</strong> - Intimate conversations with Dr. Jamie Weiner</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Keynotes</strong> - Inspiring presentations on the Quest for Legitimacy research</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Adviser Training</strong> - Professional development for family business advisers</span>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-lg my-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Begin Your Quest?</h3>
              <p className="text-xl text-blue-100 mb-6">
                Join a global community of next generation leaders discovering their own legitimacy
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/events"
                  className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-md hover:bg-gray-100 transition-colors"
                >
                  View Upcoming Events
                </Link>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-blue-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </>
  );
}

