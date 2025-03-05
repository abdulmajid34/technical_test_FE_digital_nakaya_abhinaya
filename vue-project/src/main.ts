import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { dateFormatter } from './plugins/global-mixin'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.mixin(dateFormatter)
app.use(createPinia())
app.use(router)

app.mount('#app')
