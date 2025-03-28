<script setup>
import { useCounterStore } from '@/stores/counter'
import Card from './Card.vue'
import Card1 from './Card1.vue'
import ProductCard from './ProductCard.vue'

const store = useCounterStore()

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
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
}
</script>

<template>
  <div>
    <button @click="fetchData" class="text-green-600 text-5xl">Fetch test</button>
    <br />
    <button @click="fetchingProduct">Fetch products</button>
  </div>
  <Card />
  <Card1 />
  <ProductCard />
</template>
