import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vant from 'vant'
import persist from 'pinia-plugin-persistedstate'
import '@/style/main.css'
import '@/style/common.less'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vant)
app.use(createPinia().use(persist))
app.mount('#app')
