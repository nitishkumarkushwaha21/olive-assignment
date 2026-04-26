# Olive - The Safest Way to Shop for Groceries

Olive is a high-fidelity landing page for a food scanner app designed to help families eliminate harmful ingredients from their diets. Built with **Next.js**, **Tailwind CSS**, and **TypeScript**, this project focuses on premium aesthetics, responsive design, and smooth interactive elements.

## ✨ Special Feature: Dynamic 3D Product Carousel

The centerpiece of this landing page is a custom-engineered, high-performance product carousel housed within a mobile mockup. 

### Key Carousel Highlights:
- **Infinite Smooth Motion:** Optimized logic using a virtual 12-item buffer (cloned from 6 unique products) to ensure seamless wrap-around without any visible "pops" or rewinds.
- **Dynamic 3D Effect:** Items scale and fade as they move away from the center, creating a depth-of-field effect.
- **Smart Logic:** 
    - **Linear Progression:** Images glide smoothly from the right and exit to the left.
    - **Instant Snap:** Uses conditional CSS transitions (`transition-none`) to handle teleportation of items behind the scenes, maintaining the illusion of infinite flow.
- **Real-Time Data Sync:** The carousel is synchronized with a product info section that updates the health score, brand details, and "Oliver Says" expert insights instantly as each item reaches the center.

## 🚀 Technologies Used
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons/Avatars:** Custom SVG icons and DiceBear Avatars
- **Assets:** WebP optimized product imagery

## 🛠️ Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📱 Mobile-First Design
The application is fully responsive, featuring:
- A clean, branded navigation bar.
- A hero section with trust-building social proof.
- An interactive mobile app preview that spills outside its container for a modern, layered look.

---

Built with ❤️ for a healthier shopping experience.
