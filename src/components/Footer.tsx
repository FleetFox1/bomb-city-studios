'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.contact.title')}</h3>
            <div className="space-y-2 text-neutral-400">
              <p>
                <a href="tel:8069225411" className="hover:text-orange-500 transition">
                  806-922-5411
                </a>
              </p>
              <p className="text-sm text-neutral-500">{t('footer.contact.phoneNote')}</p>
              <p>
                <a href="mailto:bryan.blankenburg@gmail.com" className="hover:text-orange-500 transition">
                  bryan.blankenburg@gmail.com
                </a>
              </p>
              <p className="text-sm">{t('footer.contact.hours')}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.links.title')}</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-neutral-400 hover:text-orange-500 transition">
                {t('nav.home')}
              </Link>
              <Link href="/services" className="block text-neutral-400 hover:text-orange-500 transition">
                {t('nav.services')}
              </Link>
              <Link href="/about" className="block text-neutral-400 hover:text-orange-500 transition">
                {t('nav.about')}
              </Link>
              <Link href="/contact" className="block text-neutral-400 hover:text-orange-500 transition">
                {t('nav.contact')}
              </Link>
              <Link href="/privacy" className="block text-neutral-400 hover:text-orange-500 transition">
                {t('footer.links.privacy')}
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.social.title')}</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61585279348119" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-orange-500 transition"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center">
          <p className="text-neutral-400 mb-2">{t('footer.tagline')}</p>
          <p className="text-neutral-500 text-sm mb-2">{t('footer.locationTag')}</p>
          <p className="text-neutral-500 text-sm">{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
