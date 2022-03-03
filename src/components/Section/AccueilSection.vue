<template>
  <section id="accueil" v-if="accueil">
    <img src="../../assets/images/home.svg" alt="Modèle">
    <div id="accueil-container">
      <h1 v-html="accueil.titre"></h1>
      <div v-html="accueil.contenu"></div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'AccueilSection',
    data () {
      return {
        accueil: null
      }
    },
    created() {
      this.unsubscribe = this.$store.subscribe(({ type, payload }) => {
        if (type === 'ACCUEIL') this.accueil = payload;
      });
    },
    mounted() { this.$store.dispatch('getAccueil'); },
    destroyed() { this.unsubscribe(); },
  }
</script>

<style lang="scss">
  @import '../../assets/styles/components/sections/accueil.section.scss';
</style>