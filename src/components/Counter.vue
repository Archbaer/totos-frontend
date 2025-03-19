<script setup>
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<template>
  <div class="flex flex-row justify-center items-center gap-4">
    <button class="text-5xl text-red-400 px-4 gap-5" @click="store.decrement">-</button>
    <h1 class="text-blue-500 text-7xl p-10">{{ store.count }}</h1>
    <button class="text-5xl text-green-400 px-4" @click="store.increment">+</button>
    <button class="text-5xl text-pink-400 px-4" @click="store.setZero">Set to zero</button>
  </div>
</template>
