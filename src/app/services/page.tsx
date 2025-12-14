'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

export default function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      name: t('services.starter.name'),
      price: t('services.starter.price'),
      description: t('services.starter.description'),
      features: t('services.starter.features') as unknown as string[],
    },
    {
      name: t('services.business.name'),
      price: t('services.business.price'),
      description: t('services.business.description'),
      features: t('services.business.features') as unknown as string[],
      popular: true,
    },
    {
      name: t('services.support.name'),
      price: t('services.support.price'),
      description: t('services.support.description'),
      features: t('services.support.features') as unknown as string[],
    },
  ];

  return (
    <div className="bg-neutral-950 min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('services.title')}
          </h1>
          <p className="text-xl text-neutral-400">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-neutral-900 rounded-lg p-8 ${
                service.popular
                  ? 'border-2 border-orange-600 relative'
                  : 'border border-neutral-800'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">
                {service.name}
              </h3>
              <p className="text-orange-500 text-2xl font-bold mb-4">
                {service.price}
              </p>
              <p className="text-neutral-400 mb-6">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-neutral-300 flex items-start">
                    <span className="text-orange-500 mr-2 mt-1">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition"
          >
            {t('services.cta')}
          </Link>
        </div>
      </div>
    </div>
  );
}
