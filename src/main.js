import Vue from 'vue'
import firebase from 'firebase'

import MyApp from './components/MyApp.vue'

//import store from './store/store.js'


const app = new Vue({
  
    components: {
        MyApp
    },
    firebase,
    //store,
    render: h => h(MyApp),
}).$mount('#app');

var config = {
    apiKey: "AIzaSyDnbrcpmpergeZENH2u3k-fUtT5Kf4qjjo",
    authDomain: "askew-server.firebaseapp.com",
    databaseURL: "https://askew-server.firebaseio.com",
    projectId: "askew-server",
    storageBucket: "askew-server.appspot.com",
    messagingSenderId: "856345091020"
};

firebase.initializeApp(config);
