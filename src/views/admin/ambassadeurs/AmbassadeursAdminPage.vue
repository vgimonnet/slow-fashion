<template>
  <main>
    <h1>
      Ambassadeurs
    </h1>
    <router-link :to="{ name: 'AmbassadeurAjouter' }">Ajouter</router-link>
    <ul>
      <li v-for="ambassadeur in ambassadeurs" :key="ambassadeur.id">
        {{ ambassadeur.nom }}
        <router-link :to="{ name: 'AmbassadeurModifier', params: { id: ambassadeur.id } }">Modifier</router-link>
        <button @click="deleteAmbassadeur(ambassadeur.id)">Supprimer</button>
      </li>
    </ul>
  </main>
</template>

<script>
  export default {
    name: 'AmbassadeursAdminPage',
    data: () => {
      return {
        ambassadeurs: []
      };
    },
    created() {
      this.unsubscribe = this.$store.subscribe(({ type, payload}) => {
        if (type === 'AMBASSADEURS') this.ambassadeurs = payload;
         else if (type === 'AMBASSADEURMSGSUCCESS') {
          this.getAmbassadeurs();
          window.alert(payload);
        } else if (type === 'AMBASSADEURMSGERROR') {
          window.alert(payload);
        }
      });
    },
    mounted() { this.getAmbassadeurs(); },
    destroyed() { this.unsubscribe(); },
    methods: {
      deleteAmbassadeur(id) { this.$store.dispatch('deleteAmbassadeur', id); },
      getAmbassadeurs() { this.$store.dispatch('getAmbassadeurs'); }
    }
  }
</script>