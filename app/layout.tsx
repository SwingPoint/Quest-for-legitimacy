import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.questforlegitimacy.com'),
  title: {
    default: 'The Quest for Legitimacy | Personal Development for Prominent Families',
    template: '%s | The Quest for Legitimacy',
  },
  description:
    'A personal development program helping the Rising Generation of prominent families discover their unique place in the world. Founded by Dr. Jamie Weiner and Russ Haworth.',
  keywords: [
    'personal development',
    'prominent families',
    'rising generation',
    'family business',
    'legacy',
    'legitimacy',
    'RISE experience',
    'executive coaching',
    'next generation leaders',
  ],
  authors: [{ name: 'Dr. Jamie Weiner' }, { name: 'Russ Haworth' }],
  creator: 'The Quest for Legitimacy',
  publisher: 'The Quest for Legitimacy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.questforlegitimacy.com',
    siteName: 'The Quest for Legitimacy',
    title: 'The Quest for Legitimacy | Personal Development for Prominent Families',
    description:
      'A personal development program helping the Rising Generation discover their unique place in the world.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Quest for Legitimacy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Quest for Legitimacy',
    description: 'Guiding the Rising Generation of Prominent Families',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

