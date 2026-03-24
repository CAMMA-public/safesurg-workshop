# SafeSurg — Workshop on AI for Safe Surgery

Website for the SafeSurg satellite workshop at MICCAI 2026.

## Requirements

- [Node.js](https://nodejs.org/) (v18+) and npm

## Development

```sh
# Install dependencies
npm install

# Start local dev server (http://localhost:8080)
npm run dev
```

## Build

```sh
# Build for production (output in dist/)
npm run build

# Preview the production build locally
npm run preview
```

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Content

All website text, dates, team members, and links are managed in a single file:

```
src/config/content.ts
```
