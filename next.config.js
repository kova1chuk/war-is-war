const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [process.env.STRAPI_IMAGE_DOMAIN],
  },
  i18n: {
    locales: ['en', 'ru', 'uk'],
    defaultLocale: 'en',
  },
  env: {
    STRAPI_ADMIN_URL: process.env.STRAPI_ADMIN_URL,
    STRAPI_ADMIN_API_URI: process.env.STRAPI_ADMIN_API_URI,
    STRAPI_ADMIN_READ_TOKEN: process.env.STRAPI_ADMIN_READ_TOKEN,
  },
};

module.exports = nextConfig;
