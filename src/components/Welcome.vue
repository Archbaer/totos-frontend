<script setup>
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<template>
  <div>
    <h1>Hello</h1>

    {{ store.count }}
    Double: {{ store.doubleCount }}
  </div>
</template>
