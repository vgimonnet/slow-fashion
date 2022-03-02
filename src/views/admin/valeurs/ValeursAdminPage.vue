<template>
  <main>
    <h1>
      Valeurs
    </h1>
    <router-link :to="{ name: 'ValeurAjouter' }">Ajouter</router-link>
    <ul>
      <li v-for="valeur in valeurs" :key="valeur.id">
        {{ valeur.titre }}
        <router-link :to="{ name: 'ValeurModifier', params: { id: valeur.id } }">Modifier</router-link>
        <button @click="deleteValeur(valeur.id)">Supprimer</button>
      </li>
    </ul>
  </main>
</template>

<script>
  export default {
    name: 'ValeursAdminPage',
    data: () => {
      return {
        valeurs: []
      };
    },
    created() {
      this.unsubscribe = this.$store.subscribe(({ type, payload}) => {
        if (type === 'VALEURS') this.valeurs = payload;
         else if (type === 'VALEURMSGSUCCESS') {
          this.getValeurs();
          window.alert(payload);
        } else if (type === 'VALEURMSGERROR') {
          window.alert(payload);
        }
      });
    },
    mounted() { this.getValeurs(); },
    destroyed() { this.unsubscribe(); },
    methods: {
      deleteValeur(id) { this.$store.dispatch('deleteValeur', id); },
      getValeurs() { this.$store.dispatch('getValeurs'); }
    }
  }
</script>