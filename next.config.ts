import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // Umami (stats sans cookie, auto-hébergé) servi depuis notre domaine :
  // passe la CSP 'self' et les bloqueurs de pub. Remplace Vercel Web Analytics.
  async rewrites() {
    return [
      { source: '/stats/script.js', destination: 'https://umami.srv1147872.hstgr.cloud/script.js' },
      { source: '/stats/api/send', destination: 'https://umami.srv1147872.hstgr.cloud/api/send' },
    ];
  },
};

export default nextConfig;
