<template>
  <section id="accueil">
    <h1>{{ accueil.titre }}</h1>
    <p>{{ accueil.contenu }}</p>
    <img src="" alt="">
  </section>
</template>

<script>
  import json from '../../../server/db.json';

  export default {
    name: 'AccueilSection',
    data: () => {
      return {
        accueil: json.accueil
      }
    }
  }
</script>