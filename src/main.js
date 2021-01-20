import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = false


//Configuracionesde Firebase
const firebaseConfig = {
  apiKey: "AIzaSyApYP6L12p6sE8XIk7JNrvuIblf0d38qzE",
  authDomain: "vue-firebase-chat-9f3fa.firebaseapp.com",
  projectId: "vue-firebase-chat-9f3fa",
  storageBucket: "vue-firebase-chat-9f3fa.appspot.com",
  messagingSenderId: "489366824811",
  appId: "1:489366824811:web:3e174dd913749247c54e2e"
};

//Iiniciar Firebase
firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(()=> new Vue({
  render: h => h(App),
}).$mount('#app'))


