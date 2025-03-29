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
  <section class="bg-red-100 w-full">
    <div class="flex flex-row justify-center container-xl lg:container m-auto gap-5">
      <Card />
      <Card
        :title="'Bien Vindo'"
        :description="'This website was made with a Spring Backend; The backend was designed for Micro Services. The Website Front-end is entirely made in Vue.js. '"
        :imageNum="23"
      />
    </div>
  </section>
</template>
