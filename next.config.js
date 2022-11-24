const withPWA = require("next-pwa")

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
