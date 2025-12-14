'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-neutral-950 min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('about.title')}
          </h1>
          <p className="text-xl text-orange-500 font-semibold">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="bg-neutral-900 rounded-lg p-8 md:p-12 mb-12">
          <p className="text-lg text-neutral-300 leading-relaxed mb-6">
            {t('about.story')}
          </p>
          <p className="text-lg text-neutral-300 leading-relaxed">
            {t('about.mission')}
          </p>
        </div>

        <div className="text-center">
          <p className="text-xl text-white mb-6">{t('about.cta')}</p>
          <Link
            href="/contact"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition"
          >
            {t('home.hero.primaryCTA')}
          </Link>
        </div>
      </div>
    </div>
  );
}
