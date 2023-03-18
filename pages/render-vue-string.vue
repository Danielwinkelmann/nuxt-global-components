<script lang="ts" setup>
const template = ref('<div><MyCustomComponent test="Test String" :num-one="3" :num-two="5" ></MyCustomComponent>This is some vue HTML <button @click="$emit(\'runFunction\')">Run Function</button></div>')
const testFunction = () => {
  // eslint-disable-next-line no-console
  console.log('clicked')
}
</script>

<template>
  <div class="container m-auto auto-rows-auto grid grid-cols-2 gap-4">
    <div class="border-solid border-gray-500 rounded border p-2 h-screen">
      ...Editor der die Variable template befuellt
      <textarea id="" v-model="template" name="" cols="30" rows="10" />
    </div>
    <div class="border-solid border-gray-500 rounded border p-2">
      <RenderVueString :html="template" @run-function="testFunction()" />
    </div>
  </div>
</template>
