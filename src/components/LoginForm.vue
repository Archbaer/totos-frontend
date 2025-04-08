<script setup>
import { ref } from 'vue'
import axios from 'axios'
import router from '@/router'
import { userStore } from '@/stores/user'

const userStoreInstance = userStore()

const form = ref({
  username: '',
  password: '',
})

const handleSubmit = async () => {
  const credentials = {
    username: form.value.username,
    password: form.value.password,
  }

  try {
    const response = await axios.post('/api/auth/login', credentials)
    if (response.status == 200) {
      userStoreInstance.login(form.value.username, form.value.password)
      router.push('/')
    }
  } catch (error) {
    console.log('Error logging in user', error)
  }
}
</script>

<!-- <template>
  <div class="container m-auto max-w-2xl py-6 border">
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="username">Username </label>
        <input
          type="text"
          v-model="form.username"
          id="username"
          name="username"
          class="border rounded w-full py-2 px-3 mb-2"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="password">Password </label>
        <input
          type="password"
          v-model="form.password"
          id="password"
          name="password"
          class="border rounded w-full py-2 px-3 mb-2"
          required
        />
      </div>
      <button
        class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Login
      </button>
    </form>
  </div>
</template> -->

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Sign In</h2>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            v-model="form.username"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="your@email.com"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            v-model="form.password"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="••••••••"
            required
          />
        </div>

        <div class="flex items-center justify-between">
          <a href="#" class="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
        </div>

        <button
          class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors"
          type="submit"
        >
          Sign In
        </button>
      </form>

      <div class="mt-6 text-center text-sm text-gray-600">
        Don't have an account?
        <a href="#" class="text-indigo-600 hover:text-indigo-500 font-medium">Sign up</a>
      </div>
    </div>
  </div>
</template>
