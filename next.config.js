/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});
const nextConfig = {
  webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /^(?!.*\.css$).*/,
        use: ['@svgr/webpack'],
      })
  
      return config
    },
}

module.exports = withPWA(nextConfig);
