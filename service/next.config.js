const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withVideos = require('next-videos');
const { locales, defaultLocale } = require('./i18n.json');
module.exports = withVideos(withCSS(withSass({ i18n: { locales, defaultLocale } , trailingSlash : false})));
