import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  if (!locale) {
    locale = 'fr';
  }
  console.log('Loading locale:', locale);
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
}); 