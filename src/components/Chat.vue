<template>
    <div class="row pt-4">
        <div class="col-6 mx-auto">
            <div class="card-header">
                <div class="d-grid gap-2">
                    <button @click="logout" class="btn btn-warning ">Logout</button>
                </div> 
            </div>
            <div class="card-body">
                <main>
                    <div v-for="(msg, index) in messages" v-bind:key="'index-'+index"
                        :class="['message', sentOrReceived(msg.userUID)]">

                        <img :src="msg.photoURL" :alt="msg.displayName">
                        <p>{{msg.text}}</p>
                    </div>
                    <div ref="scrollable"></div>
                </main>
            </div>
            <div class="card-footer">
                <form v-on:submit.prevent="sendMessage" class="row align-items-center">
                    <input v-model="message" class="form-control col" type="text" placeholder="Ingresa tu mensaje">
                    <button :disabled="!message" type="submit" class="btn btn-primary col-4">Enviar</button>
                </form>
            </div>
        </div>
        
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
  mounted() {
    this.db.collection('messages').orderBy('createdAt')
        .onSnapshot(querySnap => {
          this.messages = querySnap.docs.map(doc => doc.data())
        })
  },
  data() {
    return {
      user: firebase.auth().currentUser,
      db: firebase.firestore(),
      message: '',
      messages: [],
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut()
    },
    sentOrReceived(userUID) {
      return userUID === this.user.uid ? 'sent' : 'received'
    },
    async sendMessage() {
      const messageInfo = {
        'userUID': this.user.uid,
        'displayName': this.user.displayName,
        'photoURL': this.user.photoURL,
        'text': this.message,
        'createdAt': Date.now(),
      }
      await this.db.collection('messages').add(messageInfo)
      this.message = ''
      this.$refs['scrollable'].scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>