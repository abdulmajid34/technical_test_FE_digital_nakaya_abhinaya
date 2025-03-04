<script setup lang="ts">
import { useFetchStore } from '../stores/fetchStore.ts'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import Navbar from '../components/Navbar.vue'

const fetchStore = useFetchStore()
const { isLoading, listDataNews } = storeToRefs(fetchStore)
const { fetchListNews } = useFetchStore()

// function
const openNews = (item) => {
  console.log(item, 'item')
}

onMounted(() => {
  fetchListNews()
})
</script>

<template>
  <Navbar />
  <div class="container mt-4">
    <h1 class="my-3">News Headlines</h1>
    <form class="d-flex justify-content-end">
      <div class="mb-3">
        <label for="filterCountry" class="form-label">Country</label>
        <select class="form-select" id="filterCountry" aria-label="Default select example">
          <option selected value="us">us</option>
          <option value="id">Indonesia</option>
          <option value="jp">Japan</option>
          <option value="fr">France</option>
          <option value="au">Australia</option>
          <option value="sa">Saudi Arabia</option>
          <option value="gb">Inggris</option>
          <option value="ru">Russia</option>
        </select>
      </div>
    </form>
    <div class="row">
      <div class="col-md-6 border p-3">
        <p class="text-placeholder">Large Block</p>
      </div>
      <div class="col-md-3">
        <div class="border p-3 mb-2"><p class="text-placeholder">Box</p></div>
        <div class="border p-3"><p class="text-placeholder">Box</p></div>
      </div>
      <div class="col-md-3">
        <div class="border p-3 mb-2"><p class="text-placeholder">Box</p></div>
        <div class="border p-3"><p class="text-placeholder">Box</p></div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-md-3">
        <div class="border p-3 mb-2"><p class="text-placeholder">Box</p></div>
        <div class="border p-3"><p class="text-placeholder">Box</p></div>
      </div>
      <div class="col-md-3">
        <div class="border p-3 mb-2"><p class="text-placeholder">Box</p></div>
        <div class="border p-3"><p class="text-placeholder">Box</p></div>
      </div>
      <div class="col-md-6 border p-3">
        <p class="text-placeholder">Large Block</p>
      </div>
    </div>
  </div>
  <!--
  <div>
    <input v-model="searchQuery" placeholder="Search news..." />
    <div v-if="isLoading" class="skeleton-loader">Loading...</div>
    <div v-else>
      <div v-for="item in listDataNews" :key="item.url" class="news-item" @click="openNews(item)">
        <img :src="item.urlToImage" alt="News Image" class="news-image" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.publishedAt }}</p>
      </div>
    </div>
  </div>
  -->
</template>

<style scoped></style>
