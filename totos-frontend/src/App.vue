<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h2>Routers</h2>
  <nav>
    <RouterLink to="/"> Home </RouterLink> |
    <RouterLink to="/about"> About </RouterLink>
  </nav>
  <RouterView />
</template>
