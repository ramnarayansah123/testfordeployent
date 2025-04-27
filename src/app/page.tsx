import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Page(): React.ReactElement {
  return (
    <>
      <Head>
        <title>Gaming Top-Up Hub | Free Fire & Mobile Legends Diamond Top-Up</title>
        <meta name="description" content="Get instant Free Fire and Mobile Legends diamonds at the best prices in Nepal. Fast, secure and reliable top-up service with 24/7 support. Best rates guaranteed!" />
        <meta name="keywords" content="Free Fire topup Nepal, FF diamond topup, Mobile Legends topup, MLBB diamonds, gaming topup service, Garena Free Fire recharge, cheap FF diamonds, secure game topup" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Gaming Top-Up Hub | Free Fire & Mobile Legends Diamond Top-Up" />
        <meta property="og:description" content="Your trusted source for Free Fire and Mobile Legends diamond top-ups. Best prices in Nepal with instant delivery and secure payments." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}`} />
      </Head>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to Gaming Top-Up Hub</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-4">Free Fire</h2>
            <p className="mb-4">
              Get instant diamonds for Garena Free Fire at the best prices. Safe and secure top-up service with 24/7 support.
            </p>
            <Link 
              href="/freefire"
              className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Top Up Free Fire
            </Link>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-4">Mobile Legends</h2>
            <p className="mb-4">
              Purchase diamonds for Mobile Legends: Bang Bang quickly and securely. Best rates guaranteed for MLBB top-ups.
            </p>
            <Link 
              href="/pubg"
              className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Top Up MLBB
            </Link>
          </div>
        </div>

        <div className="mt-12 prose">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 mb-8">
            <li>Instant delivery on all top-ups</li>
            <li>Competitive prices and regular discounts</li>
            <li>Secure payment processing</li>
            <li>24/7 customer support</li>
            <li>Support for multiple games and regions</li>
          </ul>

          <p className="mb-4">
            We are your trusted partner for gaming top-ups. Whether you need diamonds for Free Fire or Mobile Legends,
            we've got you covered with the best rates and instant delivery.
          </p>
        </div>
      </div>
    </>
  );
}