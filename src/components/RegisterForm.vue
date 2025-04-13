<script setup>
import { computed, ref } from 'vue'
import axios from 'axios'
import router from '@/router'
import { RouterLink } from 'vue-router'

const form = ref({
  username: '',
  password: '',
  confirmpassword: '',
})

const passwordsMatch = computed(() => {
  if (form.value.password && form.value.confirmpassword) {
    return form.value.password === form.value.confirmpassword
  }

  return null
})

const handleSubmit = async () => {
  if (passwordsMatch.value === false) {
    return
  }

  const newUser = {
    username: form.value.username,
    password: form.value.confirmpassword,
  }

  try {
    const response = await axios.post('/api/auth/register', newUser)
    if (response.status == 200) {
      router.push('/login')
    }
  } catch (error) {
    console.log('Error registering user', error)
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Sign Up</h2>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input
            type="text"
            v-model="form.username"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="your username"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            v-model="form.password"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="••••••••"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <input
            type="password"
            v-model="form.confirmpassword"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            placeholder="••••••••"
            required
          />
          <p v-if="passwordsMatch === false" class="mt-1 text-sm text-red-600">
            Passwords do not match!
          </p>
        </div>

        <button
          class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors"
          type="submit"
        >
          Register
        </button>
      </form>

      <div class="mt-6 text-center text-sm text-gray-600">
        Already have an account?
        <RouterLink to="/login" class="text-indigo-600 hover:text-indigo-500 font-medium"
          >Sign In</RouterLink
        >
      </div>
    </div>
  </div>
</template>
