# Block Provisions - AI-Powered Vending Solutions Website

A modern, responsive Next.js (App Router) website showcasing **AI-powered smart vending machines** for unattended retail.  
Features include frictionless tap-grab-go checkout, two flexible business models (Machine Sale & Revenue-Share Placement), enterprise-grade hardware supporting 75+ SKUs, VMS analytics software, contact form, FAQ accordion, smooth Framer Motion animations, and professional design.

**Live URL:** https://blockprovisions.com  
(www.blockprovisions.com automatically redirects to the main domain)

This project was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ [](https://nodejs.org)
- Git [](https://git-scm.com)
- Code editor (VS Code recommended)

### Installation & Development
1. Clone the repository
   ```bash
   git clone <your-repository-url>

Install dependenciesBashnpm install
# or
yarn install
# or
pnpm install
# or
bun install
Run the development serverBashnpm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Open http://localhost:3000 in your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.
This project uses next/font to automatically optimize and load Geist – a new font family for Vercel.
📁 Project Structure
textvendai-website/
├── app/
│   ├── layout.tsx          # Root layout (header, footer, metadata, SEO)
│   ├── page.tsx            # Homepage – main entry point importing all sections
│   └── globals.css         # Global styles (Tailwind + custom resets)
├── components/
│   ├── Header.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section with headline & CTA
│   ├── ProductOverview.tsx # Two business models (Sale vs Placement)
│   ├── FrictionlessExperience.tsx # 3-step tap-grab-go process
│   ├── SmartHardware.tsx   # Hardware features & capabilities
│   ├── VMSAnalytics.tsx    # Vending Management Software dashboard
│   ├── CTAPricing.tsx      # Pricing models & quote CTAs
│   ├── ContactFAQ.tsx      # Contact form + FAQ accordion
│   ├── Footer.tsx          # Footer with contact & links
│   └── ui/                 # Reusable Shadcn UI components (buttons, cards, etc.)
├── public/
│   └── vending.jpg         # Hero/main image (add more images here)
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
🎨 How to Make Changes (Common Tasks)

Change Text Content
Open relevant component (e.g. components/Hero.tsx):tsx<h1 className="...">
  Next-Gen Unattended Retail.
  <span className="text-[#1F3D2B]">Powered by AI.</span>
</h1>
Change Colors
Brand palette:
Primary: #1F3D2B
Hover: #274F38
Accent: #3E6B53
tsxclassName="bg-[#1F3D2B] hover:bg-[#274F38] text-white"
Update / Add Images
Place file in public/ → use:tsx<Image src="/new-image.jpg" alt="Description" ... />
Edit FAQ
In components/ContactFAQ.tsx:tsxconst faqs = [
  { question: "...", answer: "..." },
  // Add/edit/remove
];
Update Navigation / Footer
components/Header.tsx → navItems
components/Footer.tsx → email/phone/social links

EmailJS Contact Form
Current config (update only if changing account):
Service ID: *********
Template ID: *********
Public Key: *********
Variables: {{user_email}}, {{company}}, {{message}}, {{reply_to}}

🔧 Development Commands
Bashnpm run dev       # Development server
npm run build     # Build for production
npm run start     # Run production build
npm run lint      # Lint check
🚀 Deploy & Update the Live Site (Vercel)
The site auto-deploys when you push to the main branch.

Make changes & test locally (npm run dev)
Commit:Bashgit add .
git commit -m "Updated hero section and pricing"
Push:Bashgit push origin main
Vercel auto-builds & deploys (~1–2 minutes)
→ Check: https://vercel.com/[your-account]/[project]/deployments

📦 Main Technologies

Next.js 14 (App Router)
TypeScript
Tailwind CSS
Framer Motion
Shadcn/ui
EmailJS
Sonner (toasts)

🐛 Troubleshooting

Changes not showing? → Hard refresh (Ctrl+F5), delete .next & restart
Build error? → rm -rf node_modules .next && npm install
Email not sending? → Check console + EmailJS dashboard

✅ Pre-Deployment Checklist

 Mobile/desktop responsive
 Contact form works
 All images/links functional
npm run build succeeds

📚 Learn More About Next.js
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
Next.js GitHub Repository - your feedback and contributions are welcome!

Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.
Check out our Next.js deployment documentation for more details.