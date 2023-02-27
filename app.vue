<script setup lang="ts">
import type { DragDropComponents } from '#lenne-tech'
const dragDropComponents: DragDropComponents[] = ['DragDropGrid', 'DragDropImage', 'DragDropRichText']
const selectedComponent = ref<DragDropComponents>('DragDropGrid')
</script>

<template>
  <div class="min-h-screen w-full flex justify-center items-center flex-col space-y-20 max-w-3xl mx-auto">
    <ul class="flex gap-4">
      <li v-for="component of dragDropComponents" :key="component">
        <button class="px-2 py-1.5 bg-slate-400 active:bg-slate-600 hover:bg-slate-500 rounded-lg text-slate-100" @click="selectedComponent = component">
          {{ component }}
        </button>
      </li>
    </ul>
    <div class="w-full rounded-3xl border-2 flex justify-center items-center overflow-hidden">
      <component :is="selectedComponent" />
    </div>
  </div>
</template>
