import JsonLd from '@/components/JsonLd';
import NewsletterSignup from '@/components/NewsletterSignup';
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

      {/* Hero Section with group silhouette image */}
      <section className="relative bg-cover bg-center py-32 lg:py-40" style={{backgroundImage: "url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2000')"}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-white" style={{fontFamily: 'Georgia, serif', fontStyle: 'italic'}}>
            Meet The Team
          </h1>
        </div>
      </section>

      {/* Team Members - First Member with Crown */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-full overflow-hidden shadow-xl">
                  <img 
                    src={teamData[0].image} 
                    alt={teamData[0].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Crown decoration */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-6xl">
                  👑
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-[#E37E33] uppercase tracking-wide mb-2">
                {teamData[0].role}
              </h5>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{teamData[0].name}</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Jamie is the founder of The Quest for Legitimacy. He is also the Author of the book of the same title, published by Wiley Publishing in summer 2022.
                </p>
                <p>
                  Jamie is passionate about making a difference and is inspired to do more around this as a result of the successful launch of RISE in Oxford in July 2023.
                </p>
              </div>
            </div>
          </div>

          {/* Second Member - Russ */}
          <div className="bg-gray-50 py-16 px-4 lg:px-12 mb-16">
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Russ is Director at The Quest for Legitimacy and has played a key role in the organisation since its beginning, working alongside Jamie during the research.
              </p>
              <p>
                Russ is motivated by the impact that the application of the research can have in the lives of those that embrace the experience of RISE.
              </p>
            </div>
          </div>

          {/* Third Member - Kim */}
          <div className="max-w-4xl mx-auto space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Kim is a an essential member of The Quest for Legitimacy team and draws on her experience as a second generation family business consultant.
            </p>
            <p>
              Kim is a strong advocate for experiential learning and loves working with cohorts of enthusiastic and energised people.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </>
  );
}
