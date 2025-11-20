import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: ['en'],
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to Namakwala!",
        "Auth.form.welcome.subtitle": "Log in to your Namakwala account"
      }
    }
  },
  bootstrap(app: StrapiApp) {}
};
