import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; " +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' translate.google.com translate.googleapis.com client.crisp.chat *.crisp.chat; " +
              "style-src 'self' 'unsafe-inline' translate.googleapis.com; " +
              "img-src 'self' data: blob: *.media-amazon.com translate.google.com www.google.com goldeniptvpro.net *.crisp.chat; " +
              "font-src 'self' data: client.crisp.chat; " +
              "connect-src 'self' *.crisp.chat wss://*.crisp.chat translate.googleapis.com flujipay.com *.flujipay.com; " +
              "frame-src 'self' translate.google.com *.crisp.chat flujipay.com *.flujipay.com;",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "rapidiptvswiss.com" },
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "flagcdn.com" },
    ],
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
