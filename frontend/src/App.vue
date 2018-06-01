<template>
  <div id="app">
    <Header/>
    <SideBar/>
    <PageContent/>
    <!-- <Footer/> -->
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Footer from "./laytout/Footer.vue";
  import Header from "./laytout/Header.vue";
  import PageContent from "./laytout/PageContent.vue";
  import SideBar from "./laytout/SideBar.vue";

  export default Vue.extend({
    components: {
      Footer,
      Header,
      PageContent,
      SideBar,
    },
  });
</script>

<style>
  #stripe {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    color: #2c3e50;
  }
</style>
