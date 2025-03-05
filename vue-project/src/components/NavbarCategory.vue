<script setup lang="ts">
import { useFetchStore } from '../stores/fetchStore.ts'
import { storeToRefs } from 'pinia'

const fetchStore = useFetchStore()
const { filterCategory } = storeToRefs(fetchStore)
const { fetchListNews } = useFetchStore()

const filteredCategory = (val) => {
  console.log(val, 'val')
  filterCategory.value = val
  fetchListNews()
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand text-light fw-bold ps-4" href="/">News Media</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          class="navbar-nav mb-2 mb-lg-0 w-100 justify-content-start justify-content-lg-center"
          style="cursor: pointer"
        >
          <li class="nav-item">
            <a
              class="nav-link active text-light fw-bold"
              aria-current="page"
              @click="filteredCategory('')"
              >All</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fw-bold" @click="filteredCategory('business')"
              >Business</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fw-bold" @click="filteredCategory('entertainment')"
              >Entertainment</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fw-bold" @click="filteredCategory('general')">General</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fw-bold" @click="filteredCategory('health')">Health</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fw-bold" @click="filteredCategory('science')">Science</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fw-bold" @click="filteredCategory('sports')">Sports</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fw-bold" @click="filteredCategory('technology')"
              >Technology</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fw-bold" href="/saved/news">
              <i class="bi bi-bookmark-fill"></i>
              Saves News
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
