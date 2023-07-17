/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
// }

// module.exports = nextConfig

const removeImports = require("next-remove-imports");

module.exports = removeImports()({
  // ✅  options...
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  }
});
