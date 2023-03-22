<script setup lang="ts">
import 'highlight.js/lib/common'
import 'highlight.js/styles/stackoverflow-light.css'

const code = `
const fetchPaypalDetails = async (ref: string) => {
    data.value = await useAuthFetch<PaypalSubscriptionResponce>('/paypal/' + ref)
    loading.value = false
}
`
</script>

<template>
  <div>
    <h1>highlightjs</h1>
    <highlightjs language="typescript" :code="code" />
  </div>
</template>
