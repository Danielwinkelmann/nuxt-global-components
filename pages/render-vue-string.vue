<script lang="ts" setup>
const count = ref(1)

const template = ref(`
<div class="flex flex-col justify-start items-start">
    <MyCustomComponent 
        test="Test String" 
        :num-one="2" 
        :num-two="5"
    >
    </MyCustomComponent>
    This is some vue HTML
    <button @click="$emit(\'runFunction\')">
        Run Function
    </button>
    <button class="p-2 bg-blue-200 rounded-sm" @click="$emit(\'addCount\')">
        Add Count
    </button>
</div>
`)
const testFunction = () => {
  // eslint-disable-next-line no-console
  console.log('clicked')
}
</script>

<template>
  <div class="container m-auto auto-rows-auto grid grid-cols-2 gap-4">
    <div class="border-solid border-gray-500 rounded border p-2 h-screen ">
      ...Editor der die Variable template befuellt: {{ count }}
      <MonacoEditor v-model="template" class="!h-1/2 !w-full" :options="{ theme: 'vs-dark' }" lang="html" />
    </div>
    <div class="border-solid border-gray-500 rounded border p-2">
      <RenderVueString :html="template" @add-count="++count" @run-function="testFunction()" />
    </div>
  </div>
</template>
