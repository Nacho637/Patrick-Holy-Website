// Vercel Express entry (preferred over any src/*.{ts,js} patterns).
// Plain JS so @vercel/node never runs TypeScript emit on this package.
export { default } from "./dist/create-app.mjs";
