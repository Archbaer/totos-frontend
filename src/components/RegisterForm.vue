<script setup>
import { ref } from 'vue'
import axios from 'axios'
import router from '@/router'

const form = ref({
  username: '',
  password: '',
})

const handleSubmit = async () => {
  const newUser = {
    username: form.value.username,
    password: form.value.password,
  }

  try {
    const response = await axios.post('/api/auth/register', newUser)
    router.push('/login')
  } catch (error) {
    console.log('Error registering user', error)
  }
}
</script>

<template>
  <div class="container m-auto max-w-2xl py- 24 border">
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
        Register
      </button>
    </form>
  </div>
</template>
