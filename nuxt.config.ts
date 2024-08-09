// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@nuxtjs/tailwindcss"],
  i18n: {
    vueI18n: './i18n.config.ts',
    langDir : 'locales',
    strategy: 'prefix',
    differentDomains: process.env.NODE_ENV === 'production',
    detectBrowserLanguage : {
      useCookie : true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true,
      cookieCrossOrigin: true
    },
    defaultLocale : 'tr',
    locales : [
      {
        code : "en",
        iso: "en-US",
        name : "English",
        file : "en.json"
      },
      {
        code : "tr",
        iso: "tr-TR",
        name : "Turkish",
        file : "tr.json"
      },
    ],
  }
})