/** @type {import('next').NextConfig} */

module.exports = {
  output: 'export',
  basePath: '/gh-pages',
  webpack: (config, options) =>
  {
      config.module.rules.push({
          test: /\.pdf$/i,
          type: 'asset/source'
      })

      return config
  }
}
