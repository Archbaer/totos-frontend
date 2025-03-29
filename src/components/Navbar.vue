<script setup>
import logo from '@/assets/img/catg.jpg'
import { RouterLink, useRoute } from 'vue-router'
import { userStore } from '@/stores/user'
import { ref } from 'vue'

const userStoreInstance = userStore()
const mobileMenuOpen = ref(false)

const isActiveLink = (routePath) => {
  const route = useRoute()
  return route.path === routePath
}
</script>

<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo and Site Name -->
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center">
            <img class="h-8 w-auto" :src="logo" alt="Logo" />
            <h1 class="ml-3 text-xl font-bold text-blue-900">Your Site Name</h1>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-4">
          <RouterLink
            to="/"
            class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            :class="isActiveLink('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/features"
            class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            :class="
              isActiveLink('/features') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'
            "
          >
            Features
          </RouterLink>
          <RouterLink
            to="/pricing"
            class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            :class="
              isActiveLink('/pricing') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'
            "
          >
            Pricing
          </RouterLink>
          <RouterLink
            to="/about"
            class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            :class="isActiveLink('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'"
          >
            About
          </RouterLink>

          <!-- Authentication Links -->
          <div v-if="!userStoreInstance.isAuthenticated" class="flex items-center space-x-3 ml-4">
            <RouterLink
              to="/login"
              class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors duration-200"
              :class="isActiveLink('/login') ? 'text-blue-600' : ''"
            >
              Login
            </RouterLink>
            <RouterLink
              to="/register"
              class="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-200"
            >
              Register
            </RouterLink>
          </div>

          <!-- User Menu when logged in -->
          <div v-else class="ml-4 relative">
            <div class="flex items-center space-x-3">
              <span class="text-sm font-medium text-gray-700"
                >Welcome, {{ userStoreInstance.user?.name || 'User' }}</span
              >
              <RouterLink
                to="/dashboard"
                class="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-200"
              >
                Dashboard
              </RouterLink>
              <button
                @click="userStoreInstance.logout"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-red-500 transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center md:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-500 hover:bg-gray-100 transition-colors duration-200"
            @click="mobileMenuOpen = !mobileMenuOpen"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Heroicon name: menu -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state -->
    <div class="md:hidden" v-if="mobileMenuOpen">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <RouterLink
          to="/"
          class="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          :class="
            isActiveLink('/')
              ? 'text-blue-600 bg-gray-50'
              : 'text-gray-700 hover:text-blue-500 hover:bg-gray-50'
          "
          @click="mobileMenuOpen = false"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/features"
          class="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          :class="
            isActiveLink('/features')
              ? 'text-blue-600 bg-gray-50'
              : 'text-gray-700 hover:text-blue-500 hover:bg-gray-50'
          "
          @click="mobileMenuOpen = false"
        >
          Features
        </RouterLink>
        <RouterLink
          to="/pricing"
          class="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          :class="
            isActiveLink('/pricing')
              ? 'text-blue-600 bg-gray-50'
              : 'text-gray-700 hover:text-blue-500 hover:bg-gray-50'
          "
          @click="mobileMenuOpen = false"
        >
          Pricing
        </RouterLink>
        <RouterLink
          to="/about"
          class="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          :class="
            isActiveLink('/about')
              ? 'text-blue-600 bg-gray-50'
              : 'text-gray-700 hover:text-blue-500 hover:bg-gray-50'
          "
          @click="mobileMenuOpen = false"
        >
          About
        </RouterLink>

        <!-- Mobile Authentication Links -->
        <div v-if="!userStoreInstance.isAuthenticated" class="pt-2">
          <RouterLink
            to="/login"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50 transition-colors duration-200"
            :class="isActiveLink('/login') ? 'text-blue-600 bg-gray-50' : ''"
            @click="mobileMenuOpen = false"
          >
            Login
          </RouterLink>
          <RouterLink
            to="/register"
            class="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-200 mt-2"
            @click="mobileMenuOpen = false"
          >
            Register
          </RouterLink>
        </div>

        <!-- Mobile User Menu when logged in -->
        <div v-else class="pt-2">
          <div class="px-3 py-2 text-base font-medium text-gray-700">
            Welcome, {{ userStoreInstance.user?.name || 'User' }}
          </div>
          <RouterLink
            to="/dashboard"
            class="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-200 mt-2"
            @click="mobileMenuOpen = false"
          >
            Dashboard
          </RouterLink>
          <button
            @click="
              () => {
                userStoreInstance.logout()
                mobileMenuOpen = false
              }
            "
            class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-colors duration-200 mt-2"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
