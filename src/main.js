import './assets/main.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const app = new Vue({
    router,
    render:(h)=>h(App)
}).$mount('#app')

