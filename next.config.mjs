import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Replace with your image domain
    formats: ['image/avif', 'image/webp']
},
  experimental: {
    optimizeCss: true,
    images: {
      layoutRaw: true
}
},
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
});
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
},
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
},
          {
            key: 'Referrer-Policy',
            value: 'no-referrer'
},
        ]
},
    ];
  }
};

export default nextConfig;