# Craft Corner

An **Art & Craft** listing and gallery app. Signed-in users can add crafts, update them, and open full details.

The image below is a **placeholder** banner. To use a real screenshot, add `docs/screenshot.png` to the repo and replace the line with `![Preview](./docs/screenshot.png)`.

[![Craft Corner — open live site](https://placehold.co/1200x400/1a1033/ff47d0/png?text=Craft+Corner+%7C+Click+to+open+live+site)](https://update-art.netlify.app/)

---

## Overview

Craft Corner is a **React (Vite)** single-page-style web app. **Firebase Authentication** supports email/password plus **Google** and **GitHub** sign-in; **React Router** handles routing; **Tailwind CSS** and **DaisyUI** provide layout and light/dark themes. The home page uses a **Swiper** hero, **Lottie** animations, and **react-simple-typewriter** for the headline effect. Craft data is loaded from an external **REST API** hosted at `new-art.vercel.app`.

---

## Core stack

| Area | Technology |
|------|------------|
| UI | React 18, Vite 5 |
| Styling | Tailwind CSS 3, DaisyUI 4 |
| Routing | React Router 6 |
| Forms | React Hook Form |
| Auth | Firebase Auth |
| Motion / carousel | Lottie React, Swiper, AOS (installed) |
| Feedback | React Toastify, SweetAlert2 |

---

## Key features

- **Home**: Hero slider (fade, autoplay, keyboard/a11y), achievements, latest crafts grid, categories, team section.
- **All art**: Table of all crafts with links to details.
- **Categories**: Category cards from the API; per-category listing page.
- **Authentication**: Registration and login (email/password); social login component (Google / GitHub).
- **Protected routes**: Details, add craft, my crafts, and update — require login (`PrivetRout`).
- **Theme**: Navbar toggle for **light / dark** (`data-theme` + localStorage).
- **Brand color**: Primary `#ff47d0` via `--color-primary-brand` across the UI.

> **Note:** **Blog** and **Contact** routes mentioned in older docs are **not** wired in `main.jsx` today. Add them and update this README when they exist.

---

## Dependencies (from package.json)

**Dependencies**

`react`, `react-dom`, `react-router-dom`, `firebase`, `react-hook-form`, `react-toastify`, `sweetalert2`, `swiper`, `lottie-react`, `react-simple-typewriter`, `react-icons`, `prop-types`, `localforage`, `match-sorter`, `sort-by`, `aos`

**DevDependencies**

`vite`, `@vitejs/plugin-react`, `tailwindcss`, `postcss`, `autoprefixer`, `daisyui`, `eslint`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `@types/react`, `@types/react-dom`

---

## Run locally

You need **Node.js** (LTS recommended) and **pnpm** (this repo pins `packageManager` to pnpm). **npm** or **yarn** can work if you prefer.

1. Clone the repo and `cd` into the project folder.
2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create **`.env.local`** at the project root with your Firebase web app values (Vite uses the `VITE_` prefix):

   ```env
   VITE_API_KEY=
   VITE_AUTH_DOMAIN=
   VITE_PROJECT_ID=
   VITE_STORAGE_BUCKET=
   VITE_MESSAGING_SENDER_ID=
   VITE_APP_ID=
   ```

   Copy values from Firebase Console → Project settings → Your apps.

4. Start the dev server:

   ```bash
   pnpm run dev
   ```

5. Production build and preview:

   ```bash
   pnpm run build
   pnpm run preview
   ```

6. Lint:

   ```bash
   pnpm run lint
   ```

---

## Links

| Description | URL |
|-------------|-----|
| **Live site (Netlify)** | [https://update-art.netlify.app/](https://update-art.netlify.app/) |
| **Crafts API (example)** | [https://new-art.vercel.app/craft](https://new-art.vercel.app/craft) |
| **Categories API** | [https://new-art.vercel.app/categoryCollection](https://new-art.vercel.app/categoryCollection) |

---

## License

Private project (`"private": true` in `package.json`) — share according to your team’s policy.
