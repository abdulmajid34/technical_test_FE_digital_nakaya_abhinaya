<script setup lang="ts">
import { useFetchStore } from '../stores/fetchStore.ts'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import NavbarCategory from '../components/NavbarCategory.vue'
import SkeletonLoader from '@/components/SkeletonLoader.vue'
import imageNotFound from '../assets/image_not_found.png'

const fetchStore = useFetchStore()
const { listMarkReads, filterCountry, filterCategory, isLoading, listDataNews } =
  storeToRefs(fetchStore)
const { fetchListNews } = useFetchStore()

// function
const openNews = (val: { urlToImage: string; title: string; url: string }) => {
  if (!listMarkReads.value.some((item) => item.linkUrl === val.url)) {
    listMarkReads.value.push({
      title: val.title,
      imageUrl: val.urlToImage,
      linkUrl: val.url,
    })
  }
  localStorage.setItem('readNews', JSON.stringify(listMarkReads.value))

  window.open(val.url, '_blank')
}

const filteredCountry = () => {
  fetchListNews()
}

const formatPublishedDate = (dateStr: string): string => {
  if (!dateStr) return 'Invalid Date'
  const date = new Date(dateStr)
  if (isNaN(date.getTime())) return 'Invalid Date'
  return new Intl.DateTimeFormat('id-ID', {
    weekday: 'short',
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

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
      <div v-if="listDataNews.length === 0">
        <h1 class="text-center text-secondary">Data Not Found</h1>
      </div>
      <div v-else>
        <div class="d-flex justify-content-between">
          <h4 class="my-auto">{{ filterCategory ? filterCategory : 'All' }}</h4>
          <form @change.prevent="filteredCountry">
            <div class="mb-3">
              <label class="form-label">Country</label>
              <select
                v-model="filterCountry"
                class="form-select"
                aria-label="Default select example"
              >
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
        <div class="row g-3 mb-2" style="cursor: pointer">
          <div
            class="content-card col-md-5 position-relative"
            @click="openNews(listDataNews[0])"
            style="height: 315px"
          >
            <div
              class="news-image"
              :style="{ backgroundImage: `url(${listDataNews[0]?.urlToImage || imageNotFound})` }"
            >
              <div class="news-content">
                <h5 class="text-light">{{ listDataNews[0]?.title || 'Title Not Found' }}</h5>
                <p class="text-light">{{ listDataNews[0]?.description || 'No Description' }}</p>
                <p class="text-light">
                  Source: {{ listDataNews[0]?.sources?.name || 'Source Not Found' }}
                </p>
                <p class="text-light">
                  Author: {{ listDataNews[0]?.author || 'Author Not Found' }}
                </p>
                <p class="text-light">
                  Published:
                  {{
                    formatPublishedDate(listDataNews[0]?.publishedAt) || 'Published Date Not Found'
                  }}
                </p>
              </div>
            </div>
          </div>
          <div class="col-md" v-for="(list, idx) in listDataNews.slice(1, 3)" :key="idx">
            <div
              @click="openNews(list)"
              class="content-card mb-3 position-relative"
              style="height: 150px"
            >
              <div
                class="news-image"
                :style="{ backgroundImage: `url(${list.urlToImage || imageNotFound})` }"
              >
                <div class="news-content">
                  <h6 class="text-light">{{ list.title }}</h6>
                  <p class="text-light">Source: {{ list.sources?.name || 'Source Not Found' }}</p>
                  <p class="text-light">Author: {{ list.author || 'Author Not Found' }}</p>
                  <p class="text-light">
                    Published:
                    {{ formatPublishedDate(list.publishedAt) || 'Published Date Not Found' }}
                  </p>
                </div>
              </div>
            </div>
            <div
              @click="openNews(list)"
              class="content-card position-relative"
              style="height: 150px"
            >
              <div
                class="news-image"
                :style="{ backgroundImage: `url(${list.url || imageNotFound})` }"
              >
                <div class="news-content">
                  <p class="text-light">{{ list.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- GRID 2 -->
        <div class="row g-3" style="cursor: pointer">
          <div class="col-md" v-for="(item, index) in listDataNews.slice(3, 5)" :key="index">
            <div
              @click="openNews(item)"
              class="content-card mb-3 position-relative"
              style="height: 150px"
            >
              <div class="news-image" :style="{ backgroundImage: `url(${item.urlToImage || ''})` }">
                <div class="news-content">
                  <h6 class="text-light">{{ item.title }}</h6>
                  <p class="text-light">Source: {{ item.sources?.name || 'Source Not Found' }}</p>
                  <p class="text-light">Author: {{ item.author || 'Author Not Found' }}</p>
                  <p class="text-light">
                    Published: {{ formatPublishedDate(item.publishedAt || 'Published Date Not Found') }}
                  </p>
                </div>
              </div>
            </div>
            <div
              @click="openNews(item)"
              class="content-card position-relative"
              style="height: 150px"
            >
              <div class="news-image" :style="{ backgroundImage: `url(${item.urlToImage || ''})` }">
                <div class="news-content">
                  <p class="text-light">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            @click="openNews(listDataNews[5])"
            class="col-md-5 content-card position-relative"
            style="height: 315px"
          >
            <div
              class="news-image"
              :style="{ backgroundImage: `url(${listDataNews[5]?.urlToImage || ''})` }"
            >
              <div class="news-content">
                <h5 class="text-light">{{ listDataNews[5]?.title || 'Title Not Found' }}</h5>
                <p class="text-light">{{ listDataNews[5]?.description || 'No Description' }}</p>
                <p class="text-light">
                  Source: {{ listDataNews[5]?.sources?.name || 'Source Not Found' }}
                </p>
                <p class="text-light">
                  Author: {{ listDataNews[5]?.author || 'Author Not Found' }}
                </p>
                <p class="text-light">
                  Published: {{ formatPublishedDate(listDataNews[5]?.publishedAt || 'Published Date Not Found') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-card:hover {
  box-shadow: 5px 5px grey;
}
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
