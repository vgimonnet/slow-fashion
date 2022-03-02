<template>
  <header-app></header-app>
  <router-view></router-view>
  <footer-app></footer-app>
</template>

<script>
  import HeaderApp from './components/Global/HeaderApp.vue';
  import FooterApp from './components/Global/FooterApp.vue';
  
  export default {
    name: 'App',
    components: {
      'header-app': HeaderApp,
      'footer-app': FooterApp
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

section {
  min-height: 50vh;
}

html {
  scroll-behavior: smooth;
}
</style>
