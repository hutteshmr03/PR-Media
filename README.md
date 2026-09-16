# Global Aadhar — PR & Strategic Communications

A world-class, multi-page website for **Global Aadhar**, a premier Goa-based Public Relations and Strategic Communications agency. Inspired by the editorial layout, clean typography, and bold imagery of **Burson Global** (`bursonglobal.com`).

---

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/) (Multi-Page Architecture)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **3D Graphics**: [Three.js](https://threejs.org/) + Interactive Node Network
- **Animations**: [Framer Motion](https://www.framer.com/motion/) + [GSAP](https://greensock.com/)
- **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🎨 Brand Identity & System

- **Primary Teal**: `#2D5A54`
- **Dark Teal**: `#23413C`
- **Deep Slate Teal**: `#0D2B28`
- **Warm Beige Background**: `#E5E3DE`
- **Light Accent Glow**: `#4ECDC4`
- **Pure White**: `#FFFFFF`
- **Body Text**: `#2B2B2B`

---

## 🗺️ Multi-Page Routing Architecture

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Minimal 7-section landing page with interactive 3D network node animation, marquee ticker, stats, services switcher links, and featured work teasers. |
| `/who-we-are` | **Who We Are** | 55vh hero, 3 strategic pillar cards, dual media showcase, 2-column advantage layout, and contact CTA strip. |
| `/what-we-do` | **What We Do** | 55vh hero, 6-tab interactive service switcher supporting URL query pre-selection (`?tab=01` to `?tab=06`), verbatim deliverable lists, and methodology tags. |
| `/our-work` | **Our Work** | 55vh hero, category filter pills (`All`, `Government PR`, `Media Production`, `Events`, `CSR`, `Digital`), animated 3-column card grid, and dark teal stats bar. |
| `/why-us` | **Why Us** | 55vh hero, 3 core advantage cards, split commercial engagement table, 4-stage client process pipeline, and 3-sector target cards. |
| `/contact` | **Contact** | 50vh hero, direct Panjim HQ details, 2-hour response SLA badge, NDA assurance, and 5-field inquiry form with confirmation state. |

---

## 📦 Getting Started

### 1. Installation
```bash
# Clone or navigate to project directory
cd prmediaproject

# Install dependencies
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open your browser at `http://localhost:5173` (or the port displayed in your terminal).

### 3. Build for Production
```bash
npm run build
```

---

## ☁️ Deployment (Vercel)

1. Push your repository to **GitHub** or **GitLab**.
2. Connect the repository in the **Vercel Dashboard**.
3. Select the **Vite** preset (Build command: `npm run build`, Output directory: `dist`).
4. For single-page app (SPA) routing on Vercel, ensure `vercel.json` contains:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```
5. Click **Deploy**.

---

## 📄 License & Ownership
Copyright © 2026 Global Aadhar. All rights reserved.
