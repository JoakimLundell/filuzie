import Vue from 'vue'

import MyApp from './components/MyApp.vue'

import store from './store/store.js'


const app = new Vue({
  
    components: {
        MyApp
    },
    store,
    render: h => h(MyApp),
}).$mount('#app');