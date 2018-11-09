<template>
  <div class="bulletinboard">
    <h1>{{messages}}</h1>
    <div class="inputField">
      <b-field >
        <b-input v-model="message"
                 placeholder="input message..."
                 icon="chat"
                 v-on:keyup.enter.native="emitMessage"
                 expanded>
        </b-input>
        <a class="button is-dark" v-on:click="emitMessage">subbmit</a>
      </b-field>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client"

export default {
  name: 'BulletinBoard',
  data () {
    return {
      message:'',
      messages: [],
      socket: '',
      isLoading: true,
    }
  },
  mounted() {
    this.socket = io("localhost:3000");
    this.socket.on("new message", (newMessage) => {
      this.messages.push(newMessage);
    }); 
    
  },
  methods: {
    emitMessage: function() {
      this.socket.emit("new message", this.message)
      this.message = "";
    }
  }
}
</script>

<style>
.inputField {
  padding: 10px 10px;
  position: fixed;
  bottom: 0px;
  width: 100%;
}
</style>
