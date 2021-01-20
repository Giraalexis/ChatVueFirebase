<template>
    <div>
        <button @click="logout" class="btn btn-warning float-right">Logout</button>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    methods: {
        logout(){
            firebase.auth().signOut()
        }
    }
}
</script>