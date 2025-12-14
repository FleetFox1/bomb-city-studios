'use client';

import { useLanguage } from '@/lib/language-context';

export default function PrivacyPage() {
  const { t, language } = useLanguage();

  return (
    <div className="bg-neutral-950 min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          {t('privacy.title')}
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <div className="bg-neutral-900 rounded-lg p-8 mb-6">
            <p className="text-neutral-300 mb-4">
              {t('privacy.lastUpdated')}: December 14, 2025
            </p>
            <p className="text-neutral-300 leading-relaxed">
              {t('privacy.intro')}
            </p>
          </div>

          <div className="bg-neutral-900 rounded-lg p-8 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('privacy.sections.dataCollected.title')}
            </h2>
            <p className="text-neutral-300 mb-4">
              {t('privacy.sections.dataCollected.intro')}
            </p>
            <ul className="space-y-2 text-neutral-300">
              {(t('privacy.sections.dataCollected.items') as unknown as string[]).map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-neutral-900 rounded-lg p-8 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('privacy.sections.howWeUse.title')}
            </h2>
            <ul className="space-y-2 text-neutral-300">
              {(t('privacy.sections.howWeUse.items') as unknown as string[]).map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-neutral-900 rounded-lg p-8 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('privacy.sections.dataSharing.title')}
            </h2>
            <p className="text-neutral-300">
              {t('privacy.sections.dataSharing.content')}
            </p>
          </div>

          <div className="bg-neutral-900 rounded-lg p-8 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('privacy.sections.thirdParty.title')}
            </h2>
            <ul className="space-y-2 text-neutral-300">
              {(t('privacy.sections.thirdParty.services') as unknown as string[]).map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-neutral-900 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('privacy.sections.contact.title')}
            </h2>
            <p className="text-neutral-300 mb-4">
              {t('privacy.sections.contact.content')}
            </p>
            <a 
              href="mailto:bryan.blankenburg@gmail.com" 
              className="text-orange-500 hover:text-orange-400 font-medium"
            >
              bryan.blankenburg@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
