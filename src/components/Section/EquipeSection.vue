<template>
  <section id="equipe">
    <div class="half content">
      <h2>
        Notre équipe est avec vous pour faire
        <br>
        <i class="color-blue">évoluer</i> le <i>slow fashion français</i>
      </h2>
      <p class="color-grey texte">
        Le Mouvement Slow Fashion est dirigé par des bénévoles. L’objectif premier est de répendre le mouvement en communicant sur les réseaux tel qu’Instagram. Vous avez un talent particulier dans le domaine du slow fashion ? Partagez le nous !
      </p>
      <button class="marquee">
        <marquee behavior="sliding" direction="left">
          Nous rejoindre - Nous rejoindre - Nous rejoindre
        </marquee>
      </button>
    </div>
    <div class="half">
      <img src="../../assets/images/woman2.svg" alt="Membre de l'équipe n°2">
      <img src="../../assets/images/woman3.svg" alt="Membre de l'équipe n°3">
      <img src="../../assets/images/woman2.svg" alt="Membre de l'équipe n°2">
      <img src="../../assets/images/woman3.svg" alt="Membre de l'équipe n°3">
    </div>
  </section>
</template>

<script>
  export default {
    name: 'EquipeSection'
  }
</script>

<style lang="scss">
  @import '../../assets/styles/components/sections/equipe.section.scss';
</style>