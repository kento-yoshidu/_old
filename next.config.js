const withPlugins = require("next-compose-plugins")
const optimizedImages = require("next-optimized-images")

module.exports = withPlugins([[optimizedImages, {}]], {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config
  },
  images: {
    disableStaticImages: true
  }
})

/*
/** @type {import('next').NextConfig}
module.exports = {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    })
    return config
  },
  reactStrictMode: true,
}
*/
