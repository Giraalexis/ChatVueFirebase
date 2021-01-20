<template>
    <div class="row pt-4">
        <div class="col-6 mx-auto text-center">
            <div class="d-grid gap-2">
                <button @click="loginSubmit" class="btn btn-success">Login </button>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    methods:{
        loginSubmit(){
            const provider = new firebase.auth.GoogleAuthProvider()

            firebase.auth().signInWithRedirect(provider)
                .catch(console.log)
        }
    }
    
}
</script>