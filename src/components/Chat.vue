<template>
    <div class="row pt-4">
        <div class="col-6 mx-auto">
            <div class="card-header">
                <div class="d-grid gap-2">
                    <button @click="logout" class="btn btn-warning float-right">Logout</button>
                </div> 
            </div>
            <div class="card-body">

            </div>
            <div class="card-footer">
                <form @submit="sendMessage" class="row align-items-center">
                    <input v-model="message" class="form-control" type="text" placeholder="Ingresa tu mensaje">
                    <button type="submit" class="btn btn-primary float-right">Enviar</button>
                </form>
            </div>
        </div>
        
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data(){
        return{
            user: firebase.auth().currentUser,
            db: firebase.firestore(),
            message: "",
            messages: []
        }
    },

    methods: {
        logout(){
            firebase.auth().signOut()
        },

        async sendMessage(event){
            event.preventDefault()
            
            const messageInfo = {
                'userUID': this.user.uid,
                'displayName': this.user.displayName,
                'photoURL': this.user.photoURL,
                'text': this.message,
                'createAt': Date.now(),
            }
            await this.db.collection('message').add(messageInfo)

            this.message = ''
        }
    }
}
</script>