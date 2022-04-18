const withPlugins = require("next-compose-plugins")
const optimizedImages = require("next-optimized-images")

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPlugins([[optimizedImages, {}]], {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    })
    return config
  },
  images: {
    disableStaticImages: true
  },
  pwa: {
    dest: "/.next",
    buildExcludes: [/middleware-manifest.json$/]
  }
})
