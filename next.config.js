/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withPreact = require('next-plugin-preact');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withPlugins([
  [withBundleAnalyzer, withPreact],
],
  {
    webpack5: true,
    reactStrictMode: true,
    esmExternals: true,
    swcLoader: true,
    swcMinify: true,
    experimental: {
      modern: true,
    },
  });
