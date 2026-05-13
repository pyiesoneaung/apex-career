# ApexCareer — Career Consulting Website

A premium, dark-themed career consulting landing page built with **Next.js 14 App Router**, **TypeScript**, and **Tailwind CSS**. Ready to deploy on Vercel in minutes.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | CSS keyframes + Tailwind |
| Icons | Lucide React |
| Email | Resend (recommended) / Nodemailer |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── contact/route.ts   ← Contact form backend
│   │   └── booking/route.ts   ← Booking backend
│   ├── layout.tsx
│   ├── page.tsx               ← Home page
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── MarqueeSection.tsx
│       ├── ServicesSection.tsx
│       ├── ProcessSection.tsx
│       ├── TestimonialsSection.tsx
│       └── ContactSection.tsx
├── lib/
│   ├── data.ts                ← All site content (edit here)
│   └── utils.ts
└── types/
    └── index.ts
```

---

## Getting Started

### 1. Clone and install

```bash
git clone https://github.com/YOUR_USERNAME/apex-career.git
cd apex-career
npm install
```

### 2. Configure environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your values (see Email Setup below).

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Email Setup

The contact form POSTs to `/api/contact`. You need to wire up an email provider.

### Option A — Resend (recommended for Vercel)

1. Sign up at [resend.com](https://resend.com) (free tier: 3,000 emails/month)
2. Get your API key
3. Add a verified domain (or use their sandbox for testing)
4. Set in `.env.local`:
   ```
   RESEND_API_KEY=re_your_key_here
   CONTACT_EMAIL=hello@yourdomain.com
   ```
5. Uncomment the Resend block in `src/app/api/contact/route.ts`

### Option B — Gmail / SMTP (Nodemailer)

1. Enable 2FA on your Google account
2. Create an App Password at [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Set in `.env.local`:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your@gmail.com
   SMTP_PASS=your-16-char-app-password
   ```
4. Uncomment the Nodemailer block in `src/app/api/contact/route.ts`

---

## Customise Content

All site content lives in **`src/lib/data.ts`** — edit it to change:

- Services (title, description, features)
- Testimonials
- Process steps
- Stats (placement rate, salary multiplier, etc.)
- Nav links and marquee items

---

## Deploy to Vercel

### One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual deploy

```bash
# Push to GitHub first
git add .
git commit -m "initial commit"
git push origin main

# Then in Vercel dashboard:
# 1. Import your GitHub repo
# 2. Add environment variables from .env.local
# 3. Deploy — Vercel auto-detects Next.js
```

### Environment variables on Vercel

Go to **Project → Settings → Environment Variables** and add:

```
RESEND_API_KEY        → your Resend API key
CONTACT_EMAIL         → where to receive inquiries
NEXT_PUBLIC_SITE_URL  → https://yourdomain.com
```

---

## Custom Domain

In Vercel → Project → Settings → Domains → Add your domain.
Vercel auto-provisions SSL.

---

## Extending the Site

| Feature | Where to add |
|---------|-------------|
| New page (e.g. /about) | `src/app/about/page.tsx` |
| New API endpoint | `src/app/api/your-route/route.ts` |
| New section | `src/components/sections/YourSection.tsx` |
| Booking calendar | Integrate Calendly or Cal.com in `booking/route.ts` |
| CMS (blog, etc.) | Add Contentful / Sanity SDK in `src/lib/` |
| Analytics | Add `next/third-parties` or Vercel Analytics |

---

## License

MIT — use freely for your business.
