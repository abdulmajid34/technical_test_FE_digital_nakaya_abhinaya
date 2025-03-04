<script setup lang="ts">
import { useFetchStore } from '../stores/fetchStore.ts'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

const fetchStore = useFetchStore()
const { isLoading, listDataNews } = storeToRefs(fetchStore)

// function
const { fetchListNews } = useFetchStore()

onMounted(() => {
  fetchListNews()
})
</script>

<template>
  <h1>welcome to home</h1>
  <h2>List Data:</h2>
  <br />
  <div v-if="isLoading">Loading....</div>
  <div v-else>{{ listDataNews }}</div>
</template>
