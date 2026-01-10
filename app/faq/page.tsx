import JsonLd from '@/components/JsonLd';
import faqData from '@/data/faqs.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | The Quest for Legitimacy',
  description: 'Frequently asked questions about The Quest for Legitimacy, the RISE Experience, and our programs for the Rising Generation.',
  openGraph: {
    title: 'FAQ | The Quest for Legitimacy',
    description: 'Frequently asked questions about our programs.',
    type: 'website',
  },
};

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Everything you need to know about The Quest for Legitimacy and the RISE Experience
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqData.map((faq, index) => (
              <article key={index} className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{faq.question}</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{faq.answer}</p>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-blue-50 p-12 rounded-lg border border-blue-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-xl text-gray-700 mb-8">
              We&apos;re here to help you understand if the Quest for Legitimacy is right for you
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

