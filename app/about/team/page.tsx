import JsonLd from '@/components/JsonLd';
import teamData from '@/data/team.json';
import siteData from '@/data/site.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | The Quest for Legitimacy',
  description: 'Meet the founders and team behind The Quest for Legitimacy - Dr. Jamie Weiner, Russ Haworth, and Kim Schneider-Malek.',
  openGraph: {
    title: 'Our Team | The Quest for Legitimacy',
    description: 'Meet the founders and team behind The Quest for Legitimacy.',
    type: 'website',
  },
};

export default function TeamPage() {
  const teamSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'The Team',
    description: 'Meet the team behind The Quest for Legitimacy',
    mainEntity: {
      '@type': 'Organization',
      name: siteData.name,
      url: siteData.url,
      member: teamData.map((member) => ({
        '@type': 'Person',
        name: member.name,
        jobTitle: member.title,
        description: member.bio,
      })),
    },
  };

  return (
    <>
      <JsonLd data={teamSchema} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The experts guiding the Rising Generation toward discovering their unique place in the world
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {teamData.map((member, index) => (
              <article
                key={member.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-full max-w-md mx-auto aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">Photo of {member.name}</span>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h5 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                    {member.role}
                  </h5>
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">{member.name}</h2>
                  <h3 className="text-xl text-gray-600 mb-6">{member.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Research</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed mb-6">
              The Quest for Legitimacy is the result of comprehensive global research led by Dr. Jamie Weiner 
              and Russ Haworth, seeking to understand the lived experience of those growing up in the Land of Giants.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Through extensive conversations with individuals from prominent families around the world, our research 
              uncovered shared experiences, common obstacles, and universal aspirations. These insights form the 
              foundation of our approach and the RISE Experience program.
            </p>
            <p className="text-lg leading-relaxed">
              The research findings are beautifully captured in Dr. Weiner&apos;s book, <em>The Quest for Legitimacy: 
              How Children of Prominent Families Discover Their Unique Place in the World</em>, published by Wiley in 2022.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

