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

      {/* Hero Section with desert/mountain background */}
      <section className="relative bg-cover bg-center py-32 lg:py-40" style={{backgroundImage: "url('https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2000')"}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight" style={{fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400}}>
              Are you ready<br />to RISE?
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-700 text-white p-8 lg:p-12 rounded-lg mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                JOIN THE RISE EXPERIENCE
              </h2>
              
              <div className="space-y-4 text-base lg:text-lg leading-relaxed mb-8">
                <p>
                  This impactful cohort based program delivers a transformational and immersive experience that helps those who have grown up in prominent families to take ownership of their own lives.
                </p>
                <p>
                  Our focus is to support you in deepening your understanding of the impact you want to have.
                </p>
                <p>
                  Guiding you through your own journey we'll explore the four phases of your Quest for Legitimacy and help you discover your unique place in the world.
                </p>
              </div>

              <a
                href="https://forms.monday.com/forms/c095e0a4ef29862a15177e1a5a008fec?r=use1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-gray-700 transition-all duration-200"
              >
                <span>Join the Waiting List</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Orange CTA Button */}
            <div className="text-center mb-16">
              <a
                href="https://forms.monday.com/forms/c095e0a4ef29862a15177e1a5a008fec?r=use1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orange inline-block"
              >
                Join the Waiting List!
              </a>
            </div>

            {/* Who is it for? */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Georgia, serif', fontStyle: 'italic'}}>
                Who is it for?
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Growing up in a prominent family can leave you feeling isolated and wondering how you'll measure up to the achievements of the giants in your life. <strong>You are not alone.</strong>
                </p>
                <p>
                  The RISE Experience is designed specifically to help you and others like you understand your identity and discover your unique place in the world.
                </p>
              </div>
            </div>

            {/* Teal CTA Section */}
            <div className="bg-[#3C5F5E] text-white p-8 lg:p-12 rounded-lg mb-16">
              <h2 className="text-3xl font-bold mb-6 uppercase">
                REGISTER YOUR INTEREST IN JOINING ONE OF OUR COHORTS
              </h2>
              <a
                href="https://forms.monday.com/forms/c095e0a4ef29862a15177e1a5a008fec?r=use1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-[#3C5F5E] transition-all duration-200"
              >
                <span>Join the Waiting List!</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* How do I find out more? */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Georgia, serif', fontStyle: 'italic'}}>
                How do I find out more?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you would like to find out more about the program and if it is right for you, we would love to hear from you. You can{' '}
                <Link href="/contact" className="text-[#E37E33] hover:underline font-semibold">
                  contact us
                </Link>{' '}
                directly and we'd be happy to answer any questions you may have.
              </p>
            </div>

            {/* Quest Readiness Quiz */}
            <div className="bg-orange-50 p-8 lg:p-12 rounded-lg text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Georgia, serif', fontStyle: 'italic', color: '#E37E33'}}>
                Are you ready to take Your Quest?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Follow this link to complete our readiness quiz!
              </p>
              <a
                href="https://questreadiness.scoreapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orange inline-block"
              >
                Click Here
              </a>
            </div>

            {/* Testimonials */}
            <div className="mt-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center" style={{fontFamily: 'Georgia, serif', fontStyle: 'italic'}}>
                What Others Have Said:
              </h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <blockquote className="text-lg text-gray-700 italic text-center leading-relaxed">
                  &quot;Here's a big thank you to the Quest for Legitimacy team for setting an environment for deep internal work I didn't know I needed. And for giving us tools to go on and be guides on the Quest for Legitimacy.&quot;
                </blockquote>
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

