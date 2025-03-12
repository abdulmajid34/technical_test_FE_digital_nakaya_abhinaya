<script setup lang="ts">
import { useFetchStore } from '../stores/fetchStore.ts'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()
const fetchStore = useFetchStore()
const { filterCategory } = storeToRefs(fetchStore)
const { fetchListNews } = useFetchStore()

const filteredCategory = (val: string) => {
  if (router.currentRoute.value.path !== '/saved/news') {
    filterCategory.value = val
    fetchListNews()
  }
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
              class="nav-link text-light fw-bold"
              :class="{
                'active-category':
                  filterCategory === '' && router.currentRoute.value.path !== '/saved/news',
              }"
              aria-current="page"
              @click="filteredCategory('')"
              >All</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-light fw-bold"
              :class="{ 'active-category': filterCategory === 'business' }"
              @click="filteredCategory('business')"
              >Business</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-light fw-bold"
              :class="{ 'active-category': filterCategory === 'entertainment' }"
              @click="filteredCategory('entertainment')"
              >Entertainment</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-light fw-bold"
              :class="{ 'active-category': filterCategory === 'general' }"
              @click="filteredCategory('general')"
              >General</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-light fw-bold"
              :class="{ 'active-category': filterCategory === 'health' }"
              @click="filteredCategory('health')"
              >Health</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-light fw-bold"
              :class="{ 'active-category': filterCategory === 'science' }"
              @click="filteredCategory('science')"
              >Science</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-light fw-bold"
              :class="{ 'active-category': filterCategory === 'sports' }"
              @click="filteredCategory('sports')"
              >Sports</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-light fw-bold"
              :class="{ 'active-category': filterCategory === 'technology' }"
              @click="filteredCategory('technology')"
              >Technology</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-light fw-bold"
              :class="{ 'active-category': router.currentRoute.value.path === '/saved/news' }"
              href="/saved/news"
            >
              <i class="bi bi-bookmark-fill"></i>
              Saves News
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.active-category {
  position: relative;
  color: #fff !important;
}

.active-category::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #fff;
  border-radius: 2px;
}

.nav-link {
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-link:hover {
  opacity: 0.8;
}
</style>
