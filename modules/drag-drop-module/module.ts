import {
  addTemplate,
  createResolver,
  defineNuxtModule,
  updateTemplates,
  useNuxt,
} from '@nuxt/kit'
export default defineNuxtModule({
  meta: {
    name: 'DragDropModule',
  },
  setup() {
    const nuxt = useNuxt()
    const { resolve } = createResolver(import.meta.url)
    const folderStartsWith = 'drag-drop'
    const dragDropComponents: string[] = []

    nuxt.options.alias['#lenne-tech'] = resolve(nuxt.options.buildDir, 'lenne-tech')
    addTemplate({
      filename: 'lenne-tech/index.d.ts',
      getContents: () =>
`declare module "#lenne-tech" {
    type DragDropComponents = ${dragDropComponents.map(v => `"${v}"`).join(' | ')}
}`,
    })
    nuxt.hook('components:extend', async (com) => {
      com.filter(v => v.global).filter(x => x.kebabName.startsWith(folderStartsWith)).map(m => m.pascalName).forEach(x => dragDropComponents.push(x))
      await updateTemplates()
    })
  },
})
