/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;
  style-src 'self' 'unsafe-inline' https:;
  img-src 'self' data: blob: https:;
  font-src 'self' https: data:;
  connect-src 'self' https:;
  frame-ancestors 'self';
  base-uri 'self';
`;

const nextConfig = {
  images: {
    domains: ['images.unsplash.com']
  },
  redirects: async () => ([]),
  headers: async () => ([
    {
      source: "/(.*)",
      headers: [
        { key: "Content-Security-Policy", value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim() },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ],
    },
  ]),
};

module.exports = nextConfig;
