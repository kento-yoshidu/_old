// const withPlugins = require("next-compose-plugins")
// const optimizedImages = require("next-optimized-images")({})

const withPWA = require("next-pwa")
// const runtimeCaching = require("next-pwa/cache")

const nextConfig = withPWA({
  pwa: {
    dest: "public"
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    })
    return config
  },
  images: {
    disableStaticImages: true
  }
})

module.exports = nextConfig

/*
module.exports = withPlugins([
  [optimizedImages, {}],
  [withPWA({
    pwa: {
      dest: "public"
    }
  })], {
    webpack: function(config) {
      config.module.rules.push({
        test: /\.md$/,
        use: "raw-loader"
      })
      return config
    },
    images: {
      disableStaticImages: true
    }
  }
])
*/
