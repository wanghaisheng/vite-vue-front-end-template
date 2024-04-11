import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import { router } from "@/router"
import "@/assets/styles/global.scss"

const app = createApp(App);
const pinia = createPinia();

app.use(router).use(pinia).mount('#app')
