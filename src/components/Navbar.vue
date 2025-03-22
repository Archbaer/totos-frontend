<script setup>
import logo from '@/assets/img/catg.jpg'
import { RouterLink, useRoute } from 'vue-router'

const isActiveLink = (routePath) => {
  const route = useRoute()
  return route.path === routePath
}
</script>

<template>
  <nav class="bg-orange-700 border-b border-red-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-18 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4 rounded-2xl" to="/">
            <img class="rounded-full h-13 w-auto" :src="logo" alt="Cat girl" />
          </RouterLink>
          <RouterLink
            :class="[
              isActiveLink('/') ? 'bg-red-900' : 'hover:bg-amber-800 hover:text-white',
              'text-white',
              'px-4',
              'text-2xl',
              'py-2',
              'rounded-md',
            ]"
            to="/"
          >
            Home
          </RouterLink>
          <RouterLink
            :class="[
              isActiveLink('/about') ? 'bg-red-900' : 'hover:bg-amber-800 hover:text-white',
              'text-white',
              'px-3',
              'text-2xl',
              'py-2',
              'rounded-md',
            ]"
            to="/about"
          >
            About
          </RouterLink>
        </div>
        <a href="http://google.com">User placeholder</a>
      </div>
    </div>
  </nav>
</template>
