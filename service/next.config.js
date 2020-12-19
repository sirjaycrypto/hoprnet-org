const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const { locales, defaultLocale } = require('./i18n.json');
module.exports = withCSS(withSass({ i18n: { locales, defaultLocale } , trailingSlash : false}));
