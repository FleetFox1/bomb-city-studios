'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    home: {
      hero: {
        title: 'Affordable Web Design in Amarillo, TX',
        subtitle: 'Mobile-friendly websites for local service businesses',
        primaryCTA: 'Request a Quote',
        secondaryCTA: 'Hablamos Español',
      },
      services: {
        title: 'Our Services',
        starter: {
          name: 'Starter Website',
          price: 'Starting at $299',
          features: ['1–3 pages', 'Mobile-friendly', 'Contact form', 'Click-to-call'],
        },
        business: {
          name: 'Business Website',
          price: 'Starting at $499',
          features: ['4–6 pages', 'Services + gallery', 'Basic SEO', 'Social media links'],
        },
        support: {
          name: 'Optional Support',
          price: 'Starting at $25/month',
          features: ['Updates', 'Small content changes', 'Hosting help'],
        },
      },
      trust: {
        title: 'Why Choose Bomb City Studios?',
        local: {
          title: 'Local & Personal',
          description: 'Based right here in Amarillo. We understand local businesses.',
        },
        noContracts: {
          title: 'No Long Contracts',
          description: 'Simple pricing, no hidden fees, no pressure.',
        },
        support: {
          title: 'Real Human Support',
          description: 'Talk to real people, not automated systems.',
        },
      },
    },
    services: {
      title: 'Affordable Websites for Local Service Businesses',
      subtitle: 'Clean, mobile-friendly websites that help your customers call, message, or request a quote.',
      starter: {
        name: 'Starter Website',
        price: 'Starting at $299',
        description: 'Perfect for small businesses just getting started online.',
        idealFor: 'Ideal for cleaning, landscaping, handyman, and small local service businesses.',
        features: [
          '1–3 pages', 
          'Mobile-friendly design', 
          'Contact form', 
          'Click-to-call button', 
          'Social media links (Facebook, Instagram, Google Business, etc.)',
          'Fast setup'
        ],
      },
      business: {
        name: 'Business Website',
        price: 'Starting at $499',
        description: 'Full-featured site for established businesses.',
        idealFor: 'Connect your Facebook, Instagram, or Google Business profile so customers can find and trust you faster.',
        features: [
          '4–6 pages', 
          'Services page + photo gallery', 
          'Basic SEO optimization', 
          'Contact forms + call buttons', 
          'Social media links and optional embedded feed',
          'Help customers find you everywhere'
        ],
      },
      support: {
        name: 'Optional Support',
        price: 'Starting at $25/month',
        description: 'Keep your website fresh and running smoothly.',
        features: [
          'Content updates', 
          'Small design changes', 
          'Hosting assistance', 
          'Email support', 
          'No long-term contract'
        ],
      },
      process: {
        title: 'Our Simple Process',
        subtitle: 'We keep things simple and collaborative. You don\'t need to know tech — just tell us what you want.',
        steps: [
          {
            title: 'Contact & Discussion',
            description: 'We learn about your business, services, and goals.',
          },
          {
            title: 'Starter Design or Prototype',
            description: 'We create a first version using proven layouts — or your ideas.',
          },
          {
            title: 'Review & Adjust',
            description: 'You give feedback. We refine colors, wording, and layout. This includes connecting social media links, contact buttons, and any profiles you already use.',
          },
          {
            title: 'Go Live',
            description: 'Your website goes live and is ready to share with customers.',
          },
        ],
        note: 'You can start with one of our suggested designs, or bring your own ideas — we\'ll adjust it together.',
      },
      cta: 'Get Started Today',
    },
    about: {
      title: 'About Bomb City Studios',
      subtitle: 'Local web design, built for Amarillo',
      story: 'We\'re a small web studio based in Amarillo, Texas. We started Bomb City Studios because we saw too many local businesses struggling with expensive, complicated web services. We believe every business deserves a professional website without the complexity or high costs.',
      mission: 'Our mission is simple: create beautiful, functional websites that help local businesses succeed online. We speak English and Spanish, we answer our phones, and we\'re here to help.',
      cta: 'Ready to get started?',
    },
    contact: {
      title: 'Request a Quote',
      subtitle: 'Tell us about your project',
      form: {
        name: 'Name',
        businessName: 'Business Name',
        contact: 'Phone or Email',
        needs: 'What do you need?',
        language: 'Language Preference',
        submit: 'Send Request',
        sending: 'Sending...',
      },
      note: {
        title: 'How We Work',
        line1: 'English & Spanish available',
        line2: 'We prefer messages first',
        line3: 'Interpreter available for calls if needed',
      },
      success: 'Thank you! We\'ll be in touch soon.',
      error: 'Something went wrong. Please try again.',
    },
    footer: {
      tagline: 'Local web design for Amarillo businesses',
      rights: '© 2025 Bomb City Studios. All rights reserved.',
      locationTag: 'Serving Amarillo and nearby areas — websites that work with your phone number, social media, and Google listing.',
      contact: {
        title: 'Contact',
        phoneNote: 'Prefer message/text first',
        hours: 'By appointment • Messages preferred',
      },
      links: {
        title: 'Quick Links',
        privacy: 'Privacy Policy',
      },
      social: {
        title: 'Follow Us',
        comingSoon: 'Coming soon',
      },
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated',
      intro: 'At Bomb City Studios, we respect your privacy. This policy explains how we collect, use, and protect your information when you use our website or request a quote.',
      sections: {
        dataCollected: {
          title: 'What Information We Collect',
          intro: 'When you submit a quote request or contact us, we collect:',
          items: [
            'Your name',
            'Business name (if provided)',
            'Phone number or email address',
            'Message content and project details',
            'Language preference',
          ],
        },
        howWeUse: {
          title: 'How We Use Your Information',
          items: [
            'To respond to your inquiries and quote requests',
            'To communicate about your project',
            'To provide customer service and support',
            'To improve our services',
          ],
        },
        dataSharing: {
          title: 'Data Sharing',
          content: 'We do not sell, rent, or share your personal information with third parties for marketing purposes. Your information is only used to respond to your requests and provide our services.',
        },
        thirdParty: {
          title: 'Third-Party Services',
          services: [
            'Resend - for email delivery',
            'Vercel - for website hosting',
          ],
        },
        contact: {
          title: 'Questions About Privacy',
          content: 'If you have questions about this privacy policy or how we handle your data, please contact us:',
        },
      },
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Acerca de',
      contact: 'Contacto',
    },
    home: {
      hero: {
        title: 'Diseño Web Asequible en Amarillo, TX',
        subtitle: 'Sitios web compatibles con móviles para negocios de servicios locales',
        primaryCTA: 'Solicitar Cotización',
        secondaryCTA: 'We Speak English',
      },
      services: {
        title: 'Nuestros Servicios',
        starter: {
          name: 'Sitio Web Básico',
          price: 'Desde $299',
          features: ['1–3 páginas', 'Compatible con móviles', 'Formulario de contacto', 'Botón de llamada'],
        },
        business: {
          name: 'Sitio Web Empresarial',
          price: 'Desde $499',
          features: ['4–6 páginas', 'Servicios + galería', 'SEO básico', 'Enlaces de redes sociales'],
        },
        support: {
          name: 'Soporte Opcional',
          price: 'Desde $25/mes',
          features: ['Actualizaciones', 'Cambios de contenido', 'Ayuda con hosting'],
        },
      },
      trust: {
        title: '¿Por Qué Elegir Bomb City Studios?',
        local: {
          title: 'Local y Personal',
          description: 'Ubicados aquí en Amarillo. Entendemos los negocios locales.',
        },
        noContracts: {
          title: 'Sin Contratos Largos',
          description: 'Precios simples, sin cargos ocultos, sin presión.',
        },
        support: {
          title: 'Soporte Humano Real',
          description: 'Hable con personas reales, no sistemas automatizados.',
        },
      },
    },
    services: {
      title: 'Sitios Web Asequibles para Negocios de Servicios Locales',
      subtitle: 'Sitios web limpios y compatibles con móviles que ayudan a sus clientes a llamar, enviar mensajes o solicitar cotizaciones.',
      starter: {
        name: 'Sitio Web Básico',
        price: 'Desde $299',
        description: 'Perfecto para pequeñas empresas que empiezan en línea.',
        idealFor: 'Ideal para negocios de limpieza, jardinería, mantenimiento y pequeños servicios locales.',
        features: [
          '1–3 páginas',
          'Diseño compatible con móviles',
          'Formulario de contacto',
          'Botón de llamada directa',
          'Enlaces de redes sociales (Facebook, Instagram, Google Business, etc.)',
          'Configuración rápida'
        ],
      },
      business: {
        name: 'Sitio Web Empresarial',
        price: 'Desde $499',
        description: 'Sitio completo para negocios establecidos.',
        idealFor: 'Conecte su perfil de Facebook, Instagram o Google Business para que los clientes lo encuentren y confíen en usted más rápido.',
        features: [
          '4–6 páginas',
          'Página de servicios + galería de fotos',
          'Optimización SEO básica',
          'Formularios de contacto + botones de llamada',
          'Enlaces de redes sociales y feed incrustado opcional',
          'Ayude a los clientes a encontrarlo en todas partes'
        ],
      },
      support: {
        name: 'Soporte Opcional',
        price: 'Desde $25/mes',
        description: 'Mantenga su sitio web actualizado y funcionando bien.',
        features: [
          'Actualizaciones de contenido',
          'Pequeños cambios de diseño',
          'Asistencia con hosting',
          'Soporte por email',
          'Sin contrato a largo plazo'
        ],
      },
      process: {
        title: 'Nuestro Proceso Simple',
        subtitle: 'Mantenemos las cosas simples y colaborativas. No necesita saber de tecnología, solo díganos lo que quiere.',
        steps: [
          {
            title: 'Contacto y Discusión',
            description: 'Aprendemos sobre su negocio, servicios y objetivos.',
          },
          {
            title: 'Diseño Inicial o Prototipo',
            description: 'Creamos una primera versión usando diseños comprobados, o sus ideas.',
          },
          {
            title: 'Revisión y Ajustes',
            description: 'Usted da su opinión. Refinamos colores, redacción y diseño. Esto incluye conectar enlaces de redes sociales, botones de contacto y cualquier perfil que ya use.',
          },
          {
            title: 'Publicación',
            description: 'Su sitio web se publica y está listo para compartir con sus clientes.',
          },
        ],
        note: 'Puede comenzar con uno de nuestros diseños sugeridos, o traer sus propias ideas: lo ajustaremos juntos.',
      },
      cta: 'Comience Hoy',
    },
    about: {
      title: 'Acerca de Bomb City Studios',
      subtitle: 'Diseño web local, hecho para Amarillo',
      story: 'Somos un pequeño estudio web ubicado en Amarillo, Texas. Iniciamos Bomb City Studios porque vimos demasiados negocios locales luchando con servicios web costosos y complicados. Creemos que cada negocio merece un sitio web profesional sin la complejidad o los altos costos.',
      mission: 'Nuestra misión es simple: crear sitios web hermosos y funcionales que ayuden a los negocios locales a tener éxito en línea. Hablamos inglés y español, contestamos nuestros teléfonos, y estamos aquí para ayudar.',
      cta: '¿Listo para comenzar?',
    },
    contact: {
      title: 'Solicitar Cotización',
      subtitle: 'Cuéntenos sobre su proyecto',
      form: {
        name: 'Nombre',
        businessName: 'Nombre del Negocio',
        contact: 'Teléfono o Correo',
        needs: '¿Qué necesita?',
        language: 'Idioma Preferido',
        submit: 'Enviar Solicitud',
        sending: 'Enviando...',
      },
      note: {
        title: 'Cómo Trabajamos',
        line1: 'Inglés y español disponibles',
        line2: 'Preferimos mensajes primero',
        line3: 'Intérprete disponible para llamadas si es necesario',
      },
      success: '¡Gracias! Nos pondremos en contacto pronto.',
      error: 'Algo salió mal. Por favor, inténtelo de nuevo.',
    },
    footer: {
      tagline: 'Diseño web local para negocios de Amarillo',
      rights: '© 2025 Bomb City Studios. Todos los derechos reservados.',
      locationTag: 'Sirviendo a Amarillo y áreas cercanas: sitios web que funcionan con su número de teléfono, redes sociales y listado de Google.',
      contact: {
        title: 'Contacto',
        phoneNote: 'Preferimos mensaje/texto primero',
        hours: 'Con cita • Mensajes preferidos',
      },
      links: {
        title: 'Enlaces Rápidos',
        privacy: 'Política de Privacidad',
      },
      social: {
        title: 'Síguenos',
        comingSoon: 'Próximamente',
      },
    },
    privacy: {
      title: 'Política de Privacidad',
      lastUpdated: 'Última Actualización',
      intro: 'En Bomb City Studios, respetamos su privacidad. Esta política explica cómo recopilamos, usamos y protegemos su información cuando usa nuestro sitio web o solicita una cotización.',
      sections: {
        dataCollected: {
          title: 'Qué Información Recopilamos',
          intro: 'Cuando envía una solicitud de cotización o se comunica con nosotros, recopilamos:',
          items: [
            'Su nombre',
            'Nombre del negocio (si se proporciona)',
            'Número de teléfono o dirección de correo electrónico',
            'Contenido del mensaje y detalles del proyecto',
            'Preferencia de idioma',
          ],
        },
        howWeUse: {
          title: 'Cómo Usamos Su Información',
          items: [
            'Para responder a sus consultas y solicitudes de cotización',
            'Para comunicarnos sobre su proyecto',
            'Para proporcionar servicio y soporte al cliente',
            'Para mejorar nuestros servicios',
          ],
        },
        dataSharing: {
          title: 'Compartir Datos',
          content: 'No vendemos, alquilamos ni compartimos su información personal con terceros con fines de marketing. Su información solo se usa para responder a sus solicitudes y proporcionar nuestros servicios.',
        },
        thirdParty: {
          title: 'Servicios de Terceros',
          services: [
            'Resend - para entrega de correo electrónico',
            'Vercel - para alojamiento del sitio web',
          ],
        },
        contact: {
          title: 'Preguntas Sobre Privacidad',
          content: 'Si tiene preguntas sobre esta política de privacidad o cómo manejamos sus datos, contáctenos:',
        },
      },
    },
  },
};
