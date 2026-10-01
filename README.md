# Vivaan Chhabra — Portfolio Website

Personal portfolio site built with React, Vite, and Tailwind CSS, showcasing education, skills, projects, and professional experience.

Originally generated with [Figma Make](https://www.figma.com/make) and customized since.

## Tech Stack

- React 18 + Vite 6
- Tailwind CSS 4
- Radix UI components
- Material UI icons (`@mui/icons-material`)
- Framer Motion (`motion`) for animations

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Project Structure

```
src/
  app/
    App.tsx              Root app component
    components/          Page sections (Hero, Home, Projects, WorkExperience, Navigation, Footer, etc.)
  styles/                 Global styles, theme, and Tailwind config
```

## Notes

`package.json` previously contained malformed duplicate dependency entries (e.g. `"@emotion/react@11.14.0": "npm:@emotion/react@11.14.0"`), a known artifact of some Figma Make exports, which broke `npm install` on Vercel with an `EINVALIDPACKAGENAME` error. These have been removed, keeping only the standard `"package": "version"` entries. `npm install` and `npm run build` both verified working as of this fix.
