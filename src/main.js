import { createApp } from 'vue'
import App from './App.vue'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import './assets/scss/style.scss'
import {router} from './router'
createApp(App).use(router).mount('#app')