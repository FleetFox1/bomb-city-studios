'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    contact: '',
    needs: '',
    language: 'English',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send');
      }

      setStatus('success');
      setFormData({
        name: '',
        businessName: '',
        contact: '',
        needs: '',
        language: 'English',
      });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-neutral-950 min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-neutral-400">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="bg-neutral-900 rounded-lg p-8 md:p-10 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-neutral-300 mb-2 font-medium">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-600 transition"
              />
            </div>

            <div>
              <label className="block text-neutral-300 mb-2 font-medium">
                {t('contact.form.businessName')}
              </label>
              <input
                type="text"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-600 transition"
              />
            </div>

            <div>
              <label className="block text-neutral-300 mb-2 font-medium">
                {t('contact.form.contact')}
              </label>
              <input
                type="text"
                required
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-600 transition"
              />
            </div>

            <div>
              <label className="block text-neutral-300 mb-2 font-medium">
                {t('contact.form.needs')}
              </label>
              <textarea
                required
                rows={4}
                value={formData.needs}
                onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-600 transition"
              />
            </div>

            <div>
              <label className="block text-neutral-300 mb-2 font-medium">
                {t('contact.form.language')}
              </label>
              <select
                value={formData.language}
                onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-orange-600 transition"
              >
                <option value="English">English</option>
                <option value="Spanish">Español</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-neutral-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
            >
              {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
            </button>

            {status === 'success' && (
              <div className="bg-green-900/30 border border-green-700 text-green-300 px-4 py-3 rounded-lg">
                {t('contact.success')}
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-900/30 border border-red-700 text-red-300 px-4 py-3 rounded-lg">
                {t('contact.error')}
              </div>
            )}
          </form>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 mb-6">
          <h3 className="text-white font-semibold mb-3">{t('contact.note.title')}</h3>
          <ul className="space-y-2 text-neutral-400">
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              {t('contact.note.line1')}
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              {t('contact.note.line2')}
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              {t('contact.note.line3')}
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
          <h3 className="text-white font-semibold mb-4">{t('footer.contact.title')}</h3>
          <div className="space-y-3">
            <div>
              <p className="text-neutral-400 text-sm mb-1">Phone</p>
              <a 
                href="tel:8069225411" 
                className="text-orange-500 hover:text-orange-400 font-medium text-lg"
              >
                806-922-5411
              </a>
              <p className="text-neutral-500 text-sm mt-1">{t('footer.contact.phoneNote')}</p>
            </div>
            <div>
              <p className="text-neutral-400 text-sm mb-1">Email</p>
              <a 
                href="mailto:bryan.blankenburg@gmail.com" 
                className="text-orange-500 hover:text-orange-400 font-medium"
              >
                bryan.blankenburg@gmail.com
              </a>
            </div>
            <div>
              <p className="text-neutral-400 text-sm mb-1">Hours</p>
              <p className="text-neutral-300">{t('footer.contact.hours')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
