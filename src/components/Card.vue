<script setup>
import { ref, defineProps } from 'vue'
import axios from 'axios'

defineProps({
  title: {
    type: String,
    default: 'Website Review Check',
  },
  description: {
    type: String,
    default:
      'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.',
  },
  imageNum: {
    type: Number,
    default: 324,
  },
})
</script>

<template>
  <div
    class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-82"
  >
    <div
      class="relative h-56 m-2.5 overflow-hidden text-white rounded-md flex items-center justify-center border"
    >
      <img
        class="w-auto h-full rounded-2xl"
        :src="`https://picsum.photos/id/${imageNum}/200/300`"
        alt="card-image"
      />
    </div>
    <div class="p-4">
      <h6 class="flex justify-center mb-2 text-slate-800 text-xl font-semibold">{{ title }}</h6>
      <p class="text-slate-600 leading-normal font-light">{{ description }}</p>
    </div>
    <div class="flex justify-center px-4 pb-4 pt-0 mt-2">
      <button
        class="rounded-xl bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Read more
      </button>
    </div>
  </div>
</template>
