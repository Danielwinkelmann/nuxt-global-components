<script setup lang="ts">
const props = defineProps<{
  test: string
  numOne: number
  numTwo: number
}>()
const test = ref('test')
const add = computed(() => +props.numOne + +props.numTwo)
</script>

<template>
  <div class="bg-red-200 rounded-lg p-4">
    <h2>Test Component:</h2>
    <p>{{ test }}</p>
    <p>Props: {{ props.test }}</p>
    <p :class="add > 10 ? 'text-blue-400' : 'text-green-500'">
      ADD: {{ add }}
    </p>
  </div>
</template>
