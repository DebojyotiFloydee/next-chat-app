/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     experimental: {
//       appDir: true,
//     },
//     pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
//     webpack: (config, { isServer }) => {
//       // Allow importing modules from src directory
//       config.resolve.modules.push(__dirname + '/src');
//       return config;
//     },
//   };
  
//   module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     pageExtensions: ['js'],
//     webpack: (config, { isServer }) => {
//       config.resolve.modules.push(__dirname + '/src');
//       return config;
//     },
//   };
  
// //   module.exports = nextConfig;
// export default nextConfig;

// /** @type {import('next').NextConfig} */

// const withPWA = require('next-pwa')({
//     dest: 'public',
//     register: true,
//     skipWaiting: true,
// });

// const wpwa = withPWA({
//     reactStrictMode: true,
// });
// export default wpwa;

// import {  } from "next-pwa";

// const nextPWA = withPWA;

// const withPWA = require('next-pwa')({
//     dest: 'public',
//     register: true,
//     skipWaiting: true,
//   });
  
//   export default withPWA({
//     reactStrictMode: true,
//   });