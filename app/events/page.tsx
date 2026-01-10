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

      {/* Hero Section with dark background */}
      <section className="relative bg-cover bg-center py-32 lg:py-40" style={{backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000')"}}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-7xl font-bold text-white" style={{fontFamily: 'Georgia, serif', fontStyle: 'italic'}}>
            Host an Event
          </h1>
        </div>
      </section>

      {/* What is Quest for Legitimacy Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{color: '#E37E33'}}>
                WHAT IS <span className="font-bold">THE QUEST FOR LEGITIMACY?</span>
              </h2>
              
              <div className="space-y-4 text-base text-gray-700 leading-relaxed mb-8">
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

              <a
                href="#events"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3C5F5E] text-white font-semibold rounded-md hover:bg-[#2d4746] transition-all duration-200"
              >
                <span>Our events</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Right side - Illustration */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Placeholder for illustration - you can replace with actual image */}
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🎯</div>
                    <p className="text-2xl font-bold text-gray-700">Are You<br/>Ready?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Sections - Large Image/Video Areas */}
      <section id="events" className="bg-gray-50">
        {/* Event Type 1 - Full width with hover effect */}
        <div className="relative group overflow-hidden">
          <div className="relative h-[500px] bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
               style={{backgroundImage: "url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000')"}}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <div className="max-w-7xl mx-auto">
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">Workshops & Seminars</h3>
                <p className="text-xl text-white/90 max-w-2xl">
                  Interactive sessions designed to address specific challenges faced by prominent families.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Event Type 2 */}
        <div className="relative group overflow-hidden">
          <div className="relative h-[500px] bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
               style={{backgroundImage: "url('https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2000')"}}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <div className="max-w-7xl mx-auto">
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">Meet the Author Dinners</h3>
                <p className="text-xl text-white/90 max-w-2xl">
                  Intimate gatherings with Dr. Jamie Weiner for meaningful conversation and connection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Event Type 3 */}
        <div className="relative group overflow-hidden">
          <div className="relative h-[500px] bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
               style={{backgroundImage: "url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000')"}}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <div className="max-w-7xl mx-auto">
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">The RISE Experience</h3>
                <p className="text-xl text-white/90 max-w-2xl">
                  Our flagship personal development program for the Rising Generation.
                </p>
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
