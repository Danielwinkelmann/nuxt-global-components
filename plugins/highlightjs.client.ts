import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
import hljsVuePlugin from '@highlightjs/vue-plugin'

export default defineNuxtPlugin((nuxtApp) => {
  hljs.registerLanguage('typescript', typescript)
  nuxtApp.vueApp.use(hljsVuePlugin)
})
