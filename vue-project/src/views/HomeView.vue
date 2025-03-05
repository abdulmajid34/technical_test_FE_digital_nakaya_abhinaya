<script setup lang="ts">
import { useFetchStore } from '../stores/fetchStore.ts'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import NavbarCategory from '../components/NavbarCategory.vue'
import SkeletonLoader from '@/components/SkeletonLoader.vue'

const fetchStore = useFetchStore()
const { filterCategory, isLoading, listDataNews } = storeToRefs(fetchStore)
const { fetchListNews } = useFetchStore()

// function
// const openNews = (item) => {
//   console.log(item, 'item')
// }

onMounted(() => {
  fetchListNews()
})
</script>

<template>
  <NavbarCategory />
  <div class="container mt-4">
    <h1 class="my-3">News Headlines</h1>
    <div v-if="isLoading">
      <!-- GRID 1 -->
      <div class="row g-3 mb-2">
        <div class="col-md-5" style="height: 315px">
          <SkeletonLoader height="315px" />
        </div>
        <div class="col-md">
          <div class="mb-3" style="height: 150px">
            <SkeletonLoader height="150px" />
          </div>
          <div class="" style="height: 150px">
            <SkeletonLoader height="150px" />
          </div>
        </div>
        <div class="col-md" style="">
          <div class="mb-3" style="height: 150px">
            <SkeletonLoader height="150px" />
          </div>
          <div class="" style="height: 150px">
            <SkeletonLoader height="150px" />
          </div>
        </div>
      </div>
      <!-- GRID 2 -->
      <div class="row g-3">
        <div class="col-md">
          <div class="mb-3" style="height: 150px">
            <SkeletonLoader height="150px" />
          </div>
          <div class="" style="height: 150px">
            <SkeletonLoader height="150px" />
          </div>
        </div>
        <div class="col-md">
          <div class="mb-3" style="height: 150px">
            <SkeletonLoader height="150px" />
          </div>
          <div class="" style="height: 150px">
            <SkeletonLoader height="150px" />
          </div>
        </div>
        <div class="col-md-5" style="height: 315px">
          <SkeletonLoader height="315px" />
        </div>
      </div>
    </div>
    <div v-else>
      <div class="d-flex justify-content-between">
        <h4 class="my-auto">{{ filterCategory ? filterCategory : 'All' }}</h4>
        <form>
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
      </div>

      <!-- GRID 1 -->
      <div class="row g-3 mb-2">
        <div class="col-md-5 border p-3 position-relative" style="height: 315px">
          <div
            class="news-image"
            :style="{ backgroundImage: `url(${listDataNews[0]?.urlToImage || ''})` }"
          >
            <div class="news-content">
              <h5 class="text-light">{{ listDataNews[0]?.title || 'Title Not Found' }}</h5>
              <p class="text-light">{{ listDataNews[0]?.description || 'No Description' }}</p>
            </div>
          </div>
        </div>
        <div class="col-md" v-for="(list, idx) in listDataNews.slice(1, 3)" :key="idx">
          <div class="border p-3 mb-3 position-relative" style="height: 150px">
            <div class="news-image" :style="{ backgroundImage: `url(${list.urlToImage || ''})` }">
              <div class="news-content">
                <h6 class="text-light">{{ list.title }}</h6>
              </div>
            </div>
          </div>
          <div class="border p-3 position-relative" style="height: 150px">
            <div class="news-image" :style="{ backgroundImage: `url(${list.urlToImage || ''})` }">
              <div class="news-content">
                <p class="text-light">{{ list.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- GRID 2 -->
      <div class="row g-3">
        <div class="col-md" v-for="(item, index) in listDataNews.slice(3, 5)" :key="index">
          <div class="border p-3 mb-3 position-relative" style="height: 150px">
            <div class="news-image" :style="{ backgroundImage: `url(${item.urlToImage || ''})` }">
              <div class="news-content">
                <h6 class="text-light">{{ item.title }}</h6>
              </div>
            </div>
          </div>
          <div class="border p-3 position-relative" style="height: 150px">
            <div class="news-image" :style="{ backgroundImage: `url(${item.urlToImage || ''})` }">
              <div class="news-content">
                <p class="text-light">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5 border p-3 position-relative" style="height: 315px">
          <div
            class="news-image"
            :style="{ backgroundImage: `url(${listDataNews[5]?.urlToImage || ''})` }"
          >
            <div class="news-content">
              <h5 class="text-light">{{ listDataNews[5]?.title || 'Title Not Found' }}</h5>
              <p class="text-light">{{ listDataNews[5]?.description || 'No Description' }}</p>
            </div>
          </div>
        </div>
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

<style scoped>
.news-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.news-content {
  position: relative;
  height: 100%;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.text-light {
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
}

h5,
h6,
p {
  margin: 0;
}
</style>
