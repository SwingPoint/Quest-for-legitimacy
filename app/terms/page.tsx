import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for The Quest for Legitimacy',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
      <div className="prose prose-lg">
        <p className="text-gray-700">
          These terms and conditions outline the rules and regulations for the use of The Quest for 
          Legitimacy&apos;s website and services.
        </p>
        <p className="text-gray-600 mt-8">
          For more information, please contact us at [email protected]
        </p>
      </div>
    </div>
  );
}

