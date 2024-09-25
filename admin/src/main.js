import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Particles from "particles.vue3";
// import { loadFull } from "tsparticles"; 
// import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(Particles)
.use(ElementPlus)
.use(store)
.use(router)
.mount('#app')


