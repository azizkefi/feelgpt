import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './app/i18n/locales.js';

export default createMiddleware({
  locales,
  defaultLocale
});

export const config = {
  matcher: [
    '/((?!api|_next|favicon.ico|models|animations|gpt.png).*)'
  ]
};
