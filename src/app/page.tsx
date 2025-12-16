'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

export default function Home() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div className="bg-neutral-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 py-20 px-4 overflow-visible">
        {/* Background Logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <img 
            src="/bomb-logo.png" 
            alt="" 
            className="w-[600px] h-[600px] object-contain"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 mb-8">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
            >
              {t('home.hero.primaryCTA')}
            </Link>
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition border border-neutral-700"
            >
              {t('home.hero.secondaryCTA')}
            </button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            {t('home.services.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <Link href="/services" className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 hover:border-orange-600 transition block">
              <h3 className="text-2xl font-bold text-white mb-2">
                {t('home.services.starter.name')}
              </h3>
              <p className="text-orange-500 text-xl font-semibold mb-6">
                {t('home.services.starter.price')}
              </p>
              <ul className="space-y-3">
                {(t('home.services.starter.features') as unknown as string[]).map((feature, i) => (
                  <li key={i} className="text-neutral-300 flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Link>

            {/* Business */}
            <Link href="/services" className="bg-neutral-900 border-2 border-orange-600 rounded-lg p-8 relative block">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {t('home.services.business.name')}
              </h3>
              <p className="text-orange-500 text-xl font-semibold mb-6">
                {t('home.services.business.price')}
              </p>
              <ul className="space-y-3">
                {(t('home.services.business.features') as unknown as string[]).map((feature, i) => (
                  <li key={i} className="text-neutral-300 flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Link>

            {/* Support */}
            <Link href="/services" className="bg-neutral-900 border border-neutral-800 rounded-lg p-8 hover:border-orange-600 transition block">
              <h3 className="text-2xl font-bold text-white mb-2">
                {t('home.services.support.name')}
              </h3>
              <p className="text-orange-500 text-xl font-semibold mb-6">
                {t('home.services.support.price')}
              </p>
              <ul className="space-y-3">
                {(t('home.services.support.features') as unknown as string[]).map((feature, i) => (
                  <li key={i} className="text-neutral-300 flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Link>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="text-orange-500 hover:text-orange-400 font-semibold text-lg"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-neutral-900 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            {t('home.trust.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t('home.trust.local.title')}
              </h3>
              <p className="text-neutral-400">
                {t('home.trust.local.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t('home.trust.noContracts.title')}
              </h3>
              <p className="text-neutral-400">
                {t('home.trust.noContracts.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t('home.trust.support.title')}
              </h3>
              <p className="text-neutral-400">
                {t('home.trust.support.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

