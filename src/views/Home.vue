<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created() {
    console.log(process.env.VUE_APP_API);
    var WEBURL = process.env.VUE_APP_API+'/api/movie/list.php';
    console.log(WEBURL);
    this.$http.get(WEBURL)
    .then((response) => {
      console.log(response.data)
    })
    
    
  },
}
</script>

<style lang="scss">
  @import "~bootstrap/scss/bootstrap";
</style>
