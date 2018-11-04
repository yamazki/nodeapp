<template>
  <div class="bulletinboard">
    test message
    <h2>{{message}}</h2>
  </div>
</template>

<script>
import io from "socket.io-client"
export default {
  name: 'BulletinBoard',
  data () {
    return {
      message: 'log',
      messages: [],
      socket: '',
      isLoading: true
    }
  },
  mounted() {
    this.socket = io("localhost:3000");
    this.socket.emit('mount', "test");
    console.log("test");
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
