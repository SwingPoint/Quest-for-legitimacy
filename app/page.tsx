import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import NewsletterSignup from '@/components/NewsletterSignup';
import siteData from '@/data/site.json';
import teamData from '@/data/team.json';

export default function HomePage() {
  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: siteData.name,
    description: siteData.description,
    url: siteData.url,
    email: siteData.email,
    foundingDate: siteData.foundedYear,
    sameAs: [siteData.social.instagram, siteData.social.linkedin],
    founder: {
      '@type': 'Person',
      name: 'Dr. Jamie Weiner',
      jobTitle: 'Clinical Psychologist',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Global',
    },
  };

  return (
    <>
      <JsonLd data={organizationSchema} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Take Ownership of<br />Your Life
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto">
              Growing up in the shadow of a giant can leave you wondering
            </p>
            <p className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-8">
              &quot;How will I measure up?&quot;
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
              The Quest for Legitimacy provides you with a framework, guidance, and the support of a community 
              of like-minded people to help you understand the impact you can have on the world and the agency 
              for you to take action!
            </p>
            <Link
              href="/rise-experience"
              className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition-colors"
            >
              The RISE Experience
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Guiding the Rising Generation of Prominent Families
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              The Quest for Legitimacy is <strong>a personal development program</strong> that will help you 
              to navigate the unique struggle of growing up in a prominent family.
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
            <p>
              This prominence may be in the form of a significant family member, a business, wealth, or reputation, 
              but can create a unique pressure to live up to the accomplishments of your predecessors.
            </p>
            <p>
              You might feel isolated, but you are not alone. Join others just like you and become a part of a 
              global community of next generation leaders eager to discover their own legitimacy: <strong>The Rising Generation</strong>.
            </p>
            <div className="text-center pt-8">
              <Link
                href="/rise-experience"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-800 transition-colors"
              >
                Are you ready to start your Quest?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Growing Up in the Shadow of a Giant Brings Unique Challenges
          </h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
            <p>
              <strong>The Quest for Legitimacy</strong> is the result of global research led by clinical psychologist, 
              <em> Dr. Jamie Weiner</em>, and family business adviser, <em>Russ Haworth</em>.
            </p>
            <p>
              Their research sought to understand the lived experience of those growing up in the Land of Giants.
            </p>
            <p>
              The conversations that resulted uncovered shared experiences, obstacles, and aspirations.
            </p>
            <p>
              The Quest for Legitimacy gives you a path to follow throughout your life <strong>to pursue your purpose</strong> and 
              meaningfully contribute to your family and the world around you.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamData.map((member) => (
              <article key={member.name} className="text-center">
                <div className="mb-6">
                  <div className="w-48 h-48 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Photo</span>
                  </div>
                </div>
                <h5 className="text-sm font-semibold text-gray-500 uppercase mb-2">{member.role}</h5>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{member.name}</h3>
                <p className="text-gray-700 leading-relaxed">{member.bio}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/about/team"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
            >
              Learn More About Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-indigo-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">The Quest for Legitimacy</h2>
              <h3 className="text-2xl mb-6 text-blue-200">
                How Children of Prominent Families Discover Their Unique Place in the World
              </h3>
              <p className="text-lg mb-6 text-blue-100 leading-relaxed">
                Jamie brilliantly shares the findings from his research through the use of storytelling in his book, 
                published by Wiley Publishing.
              </p>
              <p className="text-lg mb-8 text-blue-100 leading-relaxed">
                The book offers readers the opportunity to understand the lived experience of those growing up in 
                prominent families and creates a language that is easy to grasp, allowing more meaningful conversations 
                to be held within families.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about/book"
                  className="inline-block px-8 py-3 bg-white text-blue-900 font-semibold rounded-md hover:bg-gray-100 transition-colors"
                >
                  Order the Book
                </Link>
                <Link
                  href="/about/book"
                  className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-blue-900 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-96 bg-blue-800 rounded-lg flex items-center justify-center shadow-2xl">
                <span className="text-blue-300">Book Cover</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RISE Experience CTA */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">The RISE Experience</h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            The team offers an in depth personal development program that will help you navigate your personal Quest.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            We will guide you through the action steps needed to uncover your true path and understand the impact 
            you can have in the world.
          </p>
          <p className="text-lg text-gray-700 mb-12">
            We are also available to deliver workshops, &apos;Meet the Author&apos; dinners, keynotes and adviser training.
          </p>
          <Link
            href="/rise-experience"
            className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition-colors"
          >
            Learn More About RISE
          </Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </>
  );
}
