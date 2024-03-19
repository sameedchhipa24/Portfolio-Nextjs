// /** @type {import('next').NextConfig} */
// const nextConfig = { images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: '"assets.aceternity.com"',
//         port: '',
//         pathname: '/demos/**',
//       },
//     ],
//   },};

// export default nextConfig;
// module.exports = {
   
//   }

// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'previews.123rf.com',
//           port: '',
//           pathname: '/http://localhost:3000/**',
//         },
//       ],
//     },
//   }
// next.config.js
// next.config.mjs

const config = {
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default config;
