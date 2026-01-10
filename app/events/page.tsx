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
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Events</h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            Join the Rising Generation at our global programs and experiences
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Experience the Journey
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We offer a range of transformative experiences designed to help you navigate your Quest for Legitimacy. 
              From our flagship RISE Experience to intimate dinners and powerful keynotes, each event is crafted to 
              support your personal development journey.
            </p>
          </div>

          {/* Event Types */}
          <div className="space-y-12">
            {/* RISE Experience */}
            <article className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">The RISE Experience</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our flagship personal development program that guides you through the action steps needed to 
                uncover your true path. The RISE Experience brings together cohorts of the Rising Generation 
                for an immersive journey of self-discovery and purpose.
              </p>
              <p className="text-gray-600 mb-6">
                <strong>Success Story:</strong> The successful launch of RISE in Oxford in July 2023 demonstrated 
                the powerful impact of bringing together like-minded individuals on their Quest for Legitimacy.
              </p>
              <Link
                href="/rise-experience"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
              >
                Learn More About RISE
              </Link>
            </article>

            {/* Workshops */}
            <article className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Workshops</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Interactive sessions designed to address specific challenges faced by prominent families. Our 
                workshops create safe spaces for exploration, learning, and connection with others on similar journeys.
              </p>
            </article>

            {/* Meet the Author Dinners */}
            <article className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">&apos;Meet the Author&apos; Dinners</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Intimate gatherings with Dr. Jamie Weiner, author of <em>The Quest for Legitimacy</em>. These 
                exclusive dinners offer the opportunity for meaningful conversation, personal insights, and 
                connection with fellow Rising Generation members.
              </p>
            </article>

            {/* Keynotes */}
            <article className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Keynote Presentations</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Inspiring presentations that share the research, insights, and framework from The Quest for 
                Legitimacy. Perfect for family offices, educational institutions, and organizations serving 
                prominent families.
              </p>
            </article>

            {/* Adviser Training */}
            <article className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Adviser Training</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Professional development for family business advisers, wealth managers, and consultants working 
                with prominent families. Learn to apply the Quest for Legitimacy framework in your advisory practice.
              </p>
            </article>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-indigo-600 to-blue-700 text-white p-12 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">Interested in Attending?</h3>
            <p className="text-xl text-blue-100 mb-8">
              Get in touch to learn about upcoming events and programs
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-700 font-semibold rounded-md hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </>
  );
}

