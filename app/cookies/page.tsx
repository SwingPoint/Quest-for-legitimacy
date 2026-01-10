import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie policy for The Quest for Legitimacy',
};

export default function CookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
      <div className="prose prose-lg">
        <p className="text-gray-700">
          This cookie policy explains how The Quest for Legitimacy uses cookies and similar technologies 
          to recognize you when you visit our website.
        </p>
        <p className="text-gray-600 mt-8">
          For more information, please contact us at [email protected]
        </p>
      </div>
    </div>
  );
}

