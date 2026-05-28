// On GitHub Pages project sites the app is served from a sub-path
// (e.g. /esme), so the deploy workflow sets PAGES_BASE_PATH. Local dev and a
// custom root domain leave it unset and serve from "/".
const basePath = process.env.PAGES_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static site (out/) so it can be hosted on GitHub Pages.
  // Safe here because the app is entirely client-side (no server actions,
  // route handlers, or server rendering).
  output: "export",
  // Pages serves cleanest with directory-style URLs (out/build/base/index.html).
  trailingSlash: true,
  // No server image optimisation in a static export (we don't use next/image,
  // but this keeps export robust if one is added later).
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
