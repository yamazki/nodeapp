<template>
  <div class="hello">
    <div v-for="Content in Contents">
      <router-link :to="Content.Link">
        <article class="tile is-child box">
          <p class="title">{{Content.Title}}</p>
          <p class="subtitle">{{Content.SubTitle}}</p>
          <p class="detail">{{Content.Detail}}</p>
        </article>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  name: 'HelloWorld',
  data() {
    return {
      Contents: [
        { 
          Title: 'Real Time Sync Bulletin Board',
          SubTitle: 'Using Socket.io Bulletin Board',
          Detail: 'If you use this bulletin board, you can communicate with many people in real time',
          Link: './BulletinBoard'
        },
      ]
    }
  },
  methods: {
    test: () => {
      alert("test");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
