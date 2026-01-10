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
      <section className="relative hero-gradient-blue py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-xl text-white mb-8 leading-tight">
              Take Ownership of<br />Your Life
            </h1>
            <p className="text-xl lg:text-2xl text-indigo-100 mb-4 max-w-3xl mx-auto font-light">
              Growing up in the shadow of a giant can leave you wondering
            </p>
            <p className="text-3xl lg:text-4xl font-bold text-white mb-8 italic">
              &quot;How will I measure up?&quot;
            </p>
            <p className="text-lg lg:text-xl text-indigo-50 mb-12 max-w-4xl mx-auto leading-relaxed">
              The Quest for Legitimacy provides you with a framework, guidance, and the support of a community 
              of like-minded people to help you understand the impact you can have on the world and the agency 
              for you to take action!
            </p>
            <Link
              href="/rise-experience"
              className="btn-outline inline-block"
            >
              The RISE Experience
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-gray-900 mb-6">
              Guiding the Rising Generation of Prominent Families
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              The Quest for Legitimacy is <strong className="text-indigo-600">a personal development program</strong> that will help you 
              to navigate the unique struggle of growing up in a prominent family.
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6 leading-relaxed">
            <p>
              This prominence may be in the form of a significant family member, a business, wealth, or reputation, 
              but can create a unique pressure to live up to the accomplishments of your predecessors.
            </p>
            <p>
              You might feel isolated, but you are not alone. Join others just like you and become a part of a 
              global community of next generation leaders eager to discover their own legitimacy: <strong className="text-indigo-600">The Rising Generation</strong>.
            </p>
            <div className="text-center pt-8">
              <Link
                href="/rise-experience"
                className="btn-primary"
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
      <section className="section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-gray-900 mb-16 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {teamData.map((member) => (
              <article key={member.name} className="text-center group">
                <div className="mb-6">
                  <div className="w-56 h-56 mx-auto relative overflow-hidden rounded-full shadow-xl">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                <h5 className="text-sm font-semibold text-indigo-600 uppercase mb-2 tracking-wide">{member.role}</h5>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">{member.name}</h3>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              href="/about/team"
              className="btn-primary"
            >
              Learn More About Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="section-dark hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="heading-lg mb-6">The Quest for Legitimacy</h2>
              <h3 className="text-2xl lg:text-3xl mb-6 text-indigo-100 font-light">
                How Children of Prominent Families Discover Their Unique Place in the World
              </h3>
              <p className="text-lg mb-6 text-indigo-50 leading-relaxed">
                Jamie brilliantly shares the findings from his research through the use of storytelling in his book, 
                published by Wiley Publishing.
              </p>
              <p className="text-lg mb-10 text-indigo-50 leading-relaxed">
                The book offers readers the opportunity to understand the lived experience of those growing up in 
                prominent families and creates a language that is easy to grasp, allowing more meaningful conversations 
                to be held within families.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about/book"
                  className="btn-outline"
                >
                  Order the Book
                </Link>
                <Link
                  href="/about/book"
                  className="px-8 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-72 h-[432px] rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 overflow-hidden">
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

      {/* RISE Experience CTA */}
      <section className="section-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-lg text-gray-900 mb-6">The RISE Experience</h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            The team offers an in depth personal development program that will help you navigate your personal Quest.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We will guide you through the action steps needed to uncover your true path and understand the impact 
            you can have in the world.
          </p>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            We are also available to deliver workshops, &apos;Meet the Author&apos; dinners, keynotes and adviser training.
          </p>
          <Link
            href="/rise-experience"
            className="btn-primary"
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
