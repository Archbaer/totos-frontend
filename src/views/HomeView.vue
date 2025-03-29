<script setup>
import Hero from '@/components/Hero.vue'
import Footer from '@/components/Footer.vue'
import HomeCards from '@/components/HomeCards.vue'
</script>

<template>
  <div class="w-full md:w-auto">
    <div class="flex flex-col justify-center items-center gap-4">
      <Hero />
      <HomeCards />
    </div>
  </div>
  <Footer />
</template>
