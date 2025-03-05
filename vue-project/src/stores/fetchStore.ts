import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

// code typescript
interface NewsSource {
  name: string
}

interface NewsData {
  title: string
  description: string
  newsUrl: string
  imageNews: string
  content: string
  published: string
  sources: NewsSource
}

// interface BookmarkData {
//   title: string
//   imageUrl: string
//   linkUrl: string
// }

export const useFetchStore = defineStore('fetch', () => {
  // state
  const baseURL = ref<string>(import.meta.env.VITE_API_BASE_URL)
  const apiKey = ref<string>(import.meta.env.VITE_API_KEY)
  const listDataNews = ref<NewsData[]>([])
  const isLoading = ref<boolean>(true)
  const filterCategory = ref<string>('')
  const filterCountry = ref<string>('us')

  // fetch api news
  const fetchListNews = async () => {
    try {
      isLoading.value = true
      const response = await axios.get(
        `${baseURL.value}?apiKey=${apiKey.value}&country=${filterCountry.value}&category=${filterCategory.value}`,
      )
      listDataNews.value = response.data.articles
      console.log(response.data.articles, 'resp')
    } catch (error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    filterCountry,
    filterCategory,
    listDataNews,
    fetchListNews,
  }
})
