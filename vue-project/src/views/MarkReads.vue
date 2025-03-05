<script setup lang="ts">
import { useFetchStore } from '../stores/fetchStore.ts'
import { storeToRefs } from 'pinia'
import NavbarCategory from '../components/NavbarCategory.vue'
import imageNotFound from '../assets/image_not_found.png'

const fetchStore = useFetchStore()
const { listMarkReads } = storeToRefs(fetchStore)
</script>

<template>
  <NavbarCategory />
  <div class="container mt-4">
    <h1>My News Reading List</h1>
    <div v-if="listMarkReads.length !== 0" class="row g-3">
      <div class="col-md-4" v-for="read in listMarkReads" :key="read.url">
        <div class="card">
          <img
            :src="read.urlToImage ? read.urlToImage : imageNotFound"
            class="card-img-top"
            alt="News Image"
          />
          <div class="card-body">
            <h5 class="card-title">{{ read.title }}</h5>
            <a :href="read.url" target="_blank" class="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h4 class="text-center">have no saved news</h4>
    </div>
  </div>
</template>
