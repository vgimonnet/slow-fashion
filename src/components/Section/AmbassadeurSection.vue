<template>
  <section id="ambassadeur">
    <div id="carousel" direction="right">
      <!-- <marquee behavior="scroll" > -->
        <img src="../../assets/images/woman1.svg" alt="Ambassadrice 1">
        <img src="../../assets/images/woman2.svg" alt="Ambassadrice 2">
        <img src="../../assets/images/woman3.svg" alt="Ambassadrice 3">
        <img src="../../assets/images/woman1.svg" alt="Ambassadrice 1">
        <img src="../../assets/images/woman2.svg" alt="Ambassadrice 2">
        <img src="../../assets/images/woman3.svg" alt="Ambassadrice 3">
      <!-- </marquee> -->
    </div>
    <div id="ambassadeur-content">
      <h2>
        Nous vous invitons à <i>nous <span class="color-blue">rejoindre</span></i> et à <i>changer le secteur</i> de la mode.
      </h2>
      <p class="color-grey">
        Le Mouvement Slow Fashion est dirigé par des bénévoles. L’objectif premier est de répendre le mouvement en communicant sur les réseaux tel qu’Instagram. Vous avez un talent particulier dans le domaine du slow fashion ? Partagez le nous !
      </p>
      <!-- <button class="marquee" id="marquee-ambassadeur">
        <marquee behavior="sliding" direction="left">
          Devenir Ambassadeur - Devenir Ambassadeur - Devenir Ambassadeur
        </marquee>
      </button> -->
      <button class="marquee" id="marquee-ambassadeur">
        Devenir Ambassadeur
      </button>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'AmbassadeurSection',
    // mounted() {
      // const button = document.getElementById('marquee-ambassadeur');
      // const marquee = button.childNodes[0];
      // marquee.stop();
      // button.addEventListener('mouseover', () => marquee.start());
      // button.addEventListener('mouseout', () => marquee.stop());
    // }
  }
</script>

<style lang="scss">
  @import '../../assets/styles/components/sections/ambassadeur.section.scss';
</style>