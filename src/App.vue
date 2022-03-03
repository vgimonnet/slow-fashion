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
    },
    mounted() {
      const marquees = document.querySelectorAll('.marquee');
      for (let i = 0; i < marquees.length; i++) {
        const button = marquees[i];
        const marquee = button.childNodes[0];
        marquee.stop();
        button.addEventListener('mouseover', () => marquee.start());
        button.addEventListener('mouseout', () => marquee.stop());
      }
    }
  }
</script>
