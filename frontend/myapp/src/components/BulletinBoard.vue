<template>
  <div class="bulletinboard">
    <h1>{{messages}}</h1>
    <div class="inputField">
        <div class="textArea">
        <b-input type="textarea"
                 v-model="message"
                 placeholder="input messages..."
                 v-on:keydown.enter.native="setKeyDownCode"
                 v-on:keyup.enter.native="emitMessage"
                 :rows="rows"
                 expanded>
        </b-input>
        </div>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client"

export default {
  name: 'BulletinBoard',
  data () {
    return {
      message: '',
      sendMessage: {},
      messages: [],
      socket: '',
      isLoading: true,
      keyDownCode: 0,
      userNmae: "nanashi",
      chatRoom: "test",
    }
  },
  computed: {
    rows: function() {
      var num = this.message.split("\n").length;
      return (num > 1) ? num : 1;
    }
  },
  mounted() {
    this.socket = io("localhost:8080");
    this.socket.on("new message", (newMessage) => {
      this.messages.push(newMessage);
    }); 
  },
  methods: {
    
    setKeyDownCode: function() {
      if(event.shiftKey == false) event.preventDefault()
      console.log(event)
      this.keyDownCode = event.keyCode
    },
    
    makeUserProfile: function() {
      return {[userName]: this.userNmae, [shatRoom]: this.chatRoom}
    },
    
    emitMessage: function() {
      if((event.keyCode == "13" && this.keyDownCode == "13") && event.shiftKey == false) {
        this.socket.emit("new message", this.message)
        this.message = "";
      }
    }
  }
}
</script>

<style>
.inputField {
  padding: 10px 10px;
  position: fixed; bottom: 0px;
  width: 100%;
}
</style>
