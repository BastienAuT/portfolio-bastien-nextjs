const scriptPolicy = `script-src 'self' 'unsafe-inline'${
  process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : ""
}`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "connect-src 'self' ws: wss:",
      "font-src 'self' data:",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "img-src 'self' data: blob:",
      "media-src 'self'",
      "object-src 'none'",
      scriptPolicy,
      "style-src 'self' 'unsafe-inline'",
    ].join("; "),
  },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), geolocation=(), microphone=()",
  },
];

const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      ...[
        "/projects/:path*",
        "/videos/:path*",
        "/CV_Bastien_Autem_2026.pdf",
        "/CV_Bastien_Autem_2026.png",
        "/bastien1.jpg",
      ].map((source) => ({
        source,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      })),
    ];
  },
};

module.exports = nextConfig;
