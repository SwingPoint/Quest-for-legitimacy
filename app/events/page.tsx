import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import NewsletterSignup from '@/components/NewsletterSignup';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events | The Quest for Legitimacy',
  description: 'Join us for RISE Experience programs, workshops, keynotes, and Meet the Author events around the world.',
  openGraph: {
    title: 'Events | The Quest for Legitimacy',
    description: 'Join us for RISE Experience programs and events.',
    type: 'website',
  },
};

export default function EventsPage() {
  const eventsSchema = {
    '@context': 'https://schema.org',
    '@type': 'EventSeries',
    name: 'The Quest for Legitimacy Events',
    description: 'RISE Experience programs, workshops, and events for the Rising Generation',
    organizer: {
      '@type': 'EducationalOrganization',
      name: 'The Quest for Legitimacy',
      url: 'https://www.questforlegitimacy.com',
    },
  };

  return (
    <>
      <JsonLd data={eventsSchema} />

      {/* Hero Section */}
      <section className="relative bg-gray-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold" style={{fontFamily: 'Georgia, serif', fontStyle: 'italic'}}>
            Host an Event
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What is The Quest for Legitimacy?
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>The Quest for Legitimacy is the result of a global research project led by clinical psychologist, Dr. Jamie Weiner, and family business adviser, Russ Haworth.</strong>
              </p>
              <p>
                Their research focused on understanding the lived experience of those that have grown up in a prominent family.
              </p>
              <p>
                Their conversations with people from around the World uncovered shared experiences, obstacles, and aspirations. From this, Jamie and Russ have identified a path that the rising generation family members can follow throughout their lives to pursue purpose and meaningfully contributing to their family and the world: The Quest for Legitimacy.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mb-16">
            <Link
              href="/contact"
              className="btn-orange inline-flex items-center gap-2"
            >
              <span>Our events</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Event Types - Visual sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-100 p-8 rounded-lg min-h-[300px] flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-700">Workshops & Keynotes</h3>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg min-h-[300px] flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-700">Meet the Author Dinners</h3>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg min-h-[300px] flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-700">The RISE Experience</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </>
  );
}
