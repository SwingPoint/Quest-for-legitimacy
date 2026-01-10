import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Thoughts | The Quest for Legitimacy',
  description: 'Insights and reflections on guiding the Rising Generation of prominent families.',
  openGraph: {
    title: 'Our Thoughts | The Quest for Legitimacy',
    description: 'Insights and reflections from The Quest for Legitimacy team.',
    type: 'website',
  },
};

export default function ThoughtsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl text-white mb-6">Our Thoughts</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Insights and reflections on guiding the Rising Generation
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              This is where we share our thoughts, insights, and reflections on working with 
              the Rising Generation and helping individuals discover their unique place in the world.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Check back soon for articles, case studies, and thought leadership from our team 
              at The Quest for Legitimacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
