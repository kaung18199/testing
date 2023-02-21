import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://test.neptunestaging.xyz/api/'

createApp(App).use(store).use(router).mount('#app')
