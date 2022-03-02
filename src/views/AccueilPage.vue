<template>
  <main>
    <section-accueil></section-accueil>
    <section-valeur></section-valeur>
    <section-ambassadeur></section-ambassadeur>
    <section-donation></section-donation>
    <section-equipe></section-equipe>
  </main>
</template>

<script>
  import AccueilSection from '../components/Section/AccueilSection.vue';
  import AmbassadeurSection from '../components/Section/AmbassadeurSection.vue';
  import DonationSection from '../components/Section/DonationSection.vue';
  import EquipeSection from '../components/Section/EquipeSection.vue';
  import ValeurSection from '../components/Section/ValeurSection.vue';

  export default {
    name: 'AccueilPage',
    components: {
      'section-accueil': AccueilSection,
      'section-ambassadeur': AmbassadeurSection,
      'section-donation': DonationSection,
      'section-equipe': EquipeSection,
      'section-valeur': ValeurSection
    }
  }
</script>
