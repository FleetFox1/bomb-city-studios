# Bomb City Studios Website

**BombCityStudios.com** — A bilingual (English/Spanish) marketing website for Bomb City Studios, a local web design studio in Amarillo, Texas.

## 🎯 Features

- **Bilingual Support** — Full EN/ES translation with manual language toggle
- **Responsive Design** — Mobile-first, works perfectly on all devices
- **Service Pages** — Clear pricing and service descriptions
- **Contact Form** — Email integration via Resend
- **Privacy Policy** — Simple, clear privacy page (EN/ES)
- **Click-to-Call/Email** — Direct contact links throughout
- **No Database Required** — Static generation, serverless API routes
- **Fast & Clean** — Minimal dependencies, optimized for performance

## 🛠️ Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Resend** (email delivery)
- **Vercel** (deployment ready)

## 📂 Project Structure

```
bomb-city-studios/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with language provider
│   │   ├── page.tsx          # Home page
│   │   ├── services/         # Services page
│   │   ├── about/            # About page
│   │   ├── contact/          # Contact/Quote form
│   │   ├── privacy/          # Privacy policy page
│   │   └── api/
│   │       └── contact/      # Contact form API route
│   ├── components/
│   │   ├── Navbar.tsx        # Navigation with language toggle
│   │   └── Footer.tsx        # Site footer with contact info
│   └── lib/
│       └── language-context.tsx  # Bilingual content & language state
└── public/                   # Static assets
```

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root:

```bash
RESEND_API_KEY=re_your_api_key_here
```

Get your Resend API key from [resend.com/api-keys](https://resend.com/api-keys)

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🌍 Language System

The language context (`lib/language-context.tsx`) contains all English and Spanish translations. To add or edit content:

1. Open `lib/language-context.tsx`
2. Find the relevant key under `translations.en` or `translations.es`
3. Update the text
4. Save and refresh

## 📄 Pages

### Home (`/`)
- Hero section with CTAs
- Services preview
- Trust/benefits section

### Services (`/services`)
- Detailed service offerings
- Pricing (starting at)
- Feature lists

### About (`/about`)
- Studio story
- Mission statement
- Local focus

### Contact (`/contact`)
- Quote request form (sends via Resend)
- Language preference selection
- Direct contact info (phone, email)
- Business hours

### Privacy (`/privacy`)
- Data collection policy
- How information is used
- Third-party services
- Bilingual (EN/ES)

## 📧 Contact Form

The contact form at `/contact` sends emails via **Resend** to:
- **bryan.blankenburg@gmail.com**

Form includes:
- Name (required)
- Business name (optional)
- Contact info (required)
- Project details (required)
- Language preference

**Note**: Update the `from` address in `src/app/api/contact/route.ts` once you verify your domain with Resend.

## 📞 Contact Information

- **Phone**: 806-922-5411 (prefer message/text first)
- **Email**: bryan.blankenburg@gmail.com
- **Hours**: By appointment, messages preferred

## 🎨 Design System

### Colors
- **Background**: Neutral 950 (dark)
- **Cards**: Neutral 900
- **Accent**: Orange 600
- **Text**: White / Neutral 300

### Typography
- Font: Inter (Google Fonts)
- Mobile-first sizing
- Clear hierarchy

## 📦 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variable:
   - `RESEND_API_KEY` = your Resend API key
4. Deploy

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

**Important**: After deployment, update the `from` email in `src/app/api/contact/route.ts` to use your verified domain instead of `onboarding@resend.dev`.

## 🔧 Environment Variables

### Required

- `RESEND_API_KEY` — Get from [resend.com/api-keys](https://resend.com/api-keys)

### Optional (Future)

- `NEXT_PUBLIC_GA_ID` — Google Analytics tracking ID
- `NEXT_PUBLIC_FB_PIXEL_ID` — Facebook Pixel ID

See `.env.example` for template.

## ✅ Success Criteria

- ✓ Local business owner understands service in under 10 seconds
- ✓ Easy quote request flow with email delivery
- ✓ Spanish-speaking users feel welcomed
- ✓ Contact info clear and accessible
- ✓ Privacy policy available
- ✓ Mobile-friendly and fast
- ✓ Production-ready

## 📝 Production Checklist

Before going live:

1. ✅ Get Resend API key and add to `.env.local`
2. ⚠️ Verify your domain with Resend
3. ⚠️ Update `from` email in `/api/contact/route.ts`
4. ✅ Test contact form submission
5. ✅ Verify emails arrive at bryan.blankenburg@gmail.com
6. ⚠️ Add social media links when ready (currently placeholders)
7. ⚠️ Optional: Add Google Analytics ID

## 🔮 Future Enhancements

Ready to add when needed:

- Social media integration (Facebook, Instagram)
- Google Analytics tracking
- FAQ page
- Terms of Service page
- Blog/portfolio section
- Client testimonials

## 🤝 Contact

**Bomb City Studios**  
Amarillo, Texas

**Phone**: 806-922-5411 (prefer message/text first)  
**Email**: bryan.blankenburg@gmail.com  
**Hours**: By appointment • Messages preferred

---

Built with ❤️ in Amarillobash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
