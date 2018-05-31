<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <Footer/>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Footer from "./laytout/Footer.vue";

  export default Vue.extend({
    components: {
      Footer,
    },
  });
</script>





<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
