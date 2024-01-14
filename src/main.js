

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { RouterLink, RouterView } from 'vue-router'
const app = createApp(App)
app.use(RouterLink)
app.use(RouterView)
app.use(router)

app.mount('#app')
