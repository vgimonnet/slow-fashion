<template>
  <section id="donation">
    <img src="../../assets/images/help-us.svg" alt="Aidez nous">
    <div class="container">
      <h2>
        Vous pouvez
        <br>
        <i>nous aider</i> !
      </h2>

      <div>
        <p class="texte color-grey">
          Mais comment ? Vous pouvez contribuer à l’évolution du mouvement en faisant un don ou en nous soutenant sur les réseaux tel qu’Instagram.
        </p>
        <button class="marquee" id="marquee-donation">
          <marquee behavior="sliding" direction="left">
            Faire une donation - Faire une donation - Faire une donation - Faire une donation - Faire une donation - Faire une donation - Faire une donation - Faire une donation - Faire une donation - Faire une donation - Faire une donation - Faire une donation
          </marquee>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'DonationSection',
    mounted() {
      const button = document.getElementById('marquee-donation');
      const marquee = button.childNodes[0];
      marquee.stop();
      button.addEventListener('mouseover', () => marquee.start());
      button.addEventListener('mouseout', () => marquee.stop());
    }
  }
</script>

<style lang="scss">
  @import '../../assets/styles/components/sections/donation.section.scss';
</style>