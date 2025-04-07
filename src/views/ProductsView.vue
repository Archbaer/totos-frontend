<script setup>
import ProductCard from '@/components/ProductCard.vue'
</script>

<template>
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 px-5 lg:px-30 py-10 bg-blue-900">
    <div class="flex justify-center items-center rounded bg-gray-300">
      <ProductCard />
    </div>
    <div class="flex justify-center items-center rounded bg-gray-300">
      <ProductCard />
    </div>
    <div class="flex justify-center items-center rounded bg-gray-300">
      <ProductCard />
    </div>
    <div class="flex justify-center items-center rounded bg-gray-300">
      <ProductCard />
    </div>
    <div class="flex justify-center items-center rounded bg-gray-300">
      <ProductCard />
    </div>
    <div class="flex justify-center items-center rounded bg-gray-300">
      <ProductCard />
    </div>
  </div>
</template>
