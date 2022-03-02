<template>
  <section id="valeur">
    <ul>
      <li v-for="valeur in valeurs" :key="valeur.id">
        <h2>{{ valeur.titre }}</h2>
        <p>{{ valeur.titre }}</p>
      </li>
    </ul>
    <p>{{ texte }}</p>
  </section>
</template>

<script>
  import json from '../../../server/db.json';

  export default {
    name: 'ValeurSection',
    data: () => {
      return {
        valeurs: json.valeurs
      }
    }
  }
</script>