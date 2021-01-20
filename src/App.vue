<template>
  
  <div id="app">
    <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" >
   </head>
    <Chat v-if="user"></Chat>

    <Login v-else></Login>

    
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>

<script>
import Chat from './components/Chat'
import Login from './components/Login'
import firebase from 'firebase'
export default {
  
  data(){
    return{
      user: firebase.auth().currentUser
    }
  },

  name: 'App',

  components: {
    Chat,
    Login,
    //firebase
  }
}
</script>
