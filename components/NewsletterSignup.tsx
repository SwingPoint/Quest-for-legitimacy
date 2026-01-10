'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate newsletter signup (replace with actual API call)
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="bg-[#E37E33] py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Sign up for updates about our events and experiences
        </h2>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="px-6 py-3 rounded-md border-0 focus:ring-2 focus:ring-white focus:outline-none flex-1 max-w-md text-gray-900"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-8 py-3 bg-white text-[#E37E33] rounded-md font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Joining...' : 'Join'}
          </button>
        </form>
        {status === 'success' && (
          <p className="mt-4 text-white font-medium">Thank you for subscribing!</p>
        )}
        <p className="mt-4 text-sm text-white/90">
          We won&apos;t send you spam. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}

