<template>
  <div id="loader">
    <span class="loader">
      <span class="loader-inner"></span>
    </span>
  </div>
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

      setTimeout(() => {
        document.querySelector("div#loader").classList.add('d-none');
        document.getElementsByTagName('html')[0].style.overflow = 'auto';

      }, 2000);
    }
  }
</script>
