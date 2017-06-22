import App from './App.vue'
import router from './router/router'
import store from './store/index'
import Vue from 'vue'
// import 'normalize.css'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
