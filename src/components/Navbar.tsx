'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/bomb-logo.png" 
              alt="Bomb City Studios" 
              className="h-10 w-10 rounded-lg"
            />
            <span className="text-xl font-bold text-white">Bomb City Studios</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-neutral-300 hover:text-white transition">
              {t('nav.home')}
            </Link>
            <Link href="/services" className="text-neutral-300 hover:text-white transition">
              {t('nav.services')}
            </Link>
            <Link href="/about" className="text-neutral-300 hover:text-white transition">
              {t('nav.about')}
            </Link>
            <Link href="/contact" className="text-neutral-300 hover:text-white transition">
              {t('nav.contact')}
            </Link>
            
            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded transition ${
                  language === 'en'
                    ? 'bg-orange-600 text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded transition ${
                  language === 'es'
                    ? 'bg-orange-600 text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                ES
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 text-sm rounded transition ${
                language === 'en'
                  ? 'bg-orange-600 text-white'
                  : 'text-neutral-400'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('es')}
              className={`px-2 py-1 text-sm rounded transition ${
                language === 'es'
                  ? 'bg-orange-600 text-white'
                  : 'text-neutral-400'
              }`}
            >
              ES
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden pb-4 flex flex-col space-y-2">
          <Link href="/" className="text-neutral-300 hover:text-white transition py-2">
            {t('nav.home')}
          </Link>
          <Link href="/services" className="text-neutral-300 hover:text-white transition py-2">
            {t('nav.services')}
          </Link>
          <Link href="/about" className="text-neutral-300 hover:text-white transition py-2">
            {t('nav.about')}
          </Link>
          <Link href="/contact" className="text-neutral-300 hover:text-white transition py-2">
            {t('nav.contact')}
          </Link>
        </div>
      </div>
    </nav>
  );
}
