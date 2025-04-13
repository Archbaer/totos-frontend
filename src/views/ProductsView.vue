<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { ref } from 'vue'

const produtos = ref([])

async function fetchData() {
  const bodyData = {
    username: 'admin',
    password: 'admin123',
  }

  try {
    const response = await fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    console.log('fetched token: ', data.token)
    return data.token // Return the token
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
}

async function fetchingProduct() {
  try {
    const token = await fetchData()
    console.log('token here: ', token)

    if (!token) {
      console.error('No token present.')
      return
    }

    const response = await fetch('http://localhost:8080/products', {
      method: 'GET',
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    console.log(data)
    produtos.value = data
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
}
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
    <div class="container flex flex-row justify-center items-center bg-amber-50">
      <button @click="fetchingProduct" class="bg-red-500" type="button">Click me</button>
      </br>
      {{ produtos }}
    </div>
    
  </div>
  
</template>
