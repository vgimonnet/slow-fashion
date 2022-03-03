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
