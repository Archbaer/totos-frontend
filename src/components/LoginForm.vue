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

<template>
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
</template>
