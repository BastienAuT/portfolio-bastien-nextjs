const nextConfig = {
  // Keep development assets separate from production builds. Running
  // `next build` while a dev server is open can otherwise invalidate the
  // chunks referenced by the browser and cause intermittent 404 responses.
  distDir: process.env.NODE_ENV === "production" ? ".next-production" : ".next",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
  },
};

module.exports = nextConfig;
