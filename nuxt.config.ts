// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-monaco-editor', 'nuxt-runtime-compiler', './modules/drag-drop-module/module'],

  vite: {
    /*     resolve: {
      alias: {
        vue: 'vue/dist/vue.esm-bundler.js',
      },
    }, */
  },
})
