<template>
  <main>
    <h1>
      Equipe
    </h1>
    <router-link :to="{ name: 'EquipeAjouter' }">Ajouter</router-link>
    <ul>
      <li v-for="equipe in equipes" :key="equipe.id">
        {{ equipe.nom }}
        <router-link :to="{ name: 'EquipeModifier', params: { id: equipe.id } }">Modifier</router-link>
        <button @click="deleteEquipe(equipe.id)">Supprimer</button>
      </li>
    </ul>
  </main>
</template>

<script>
  export default {
    name: 'EquipeAdminPage',
    data: () => {
      return {
        equipes: []
      };
    },
    created() {
      this.unsubscribe = this.$store.subscribe(({ type, payload}) => {
        if (type === 'EQUIPES') this.equipes = payload;
         else if (type === 'EQUIPEMSGSUCCESS') {
          this.getEquipes();
          window.alert(payload);
        } else if (type === 'EQUIPEMSGERROR') {
          window.alert(payload);
        }
      });
    },
    mounted() { this.getEquipes(); },
    destroyed() { this.unsubscribe(); },
    methods: {
      deleteEquipe(id) { this.$store.dispatch('deleteEquipe', id); },
      getEquipes() { this.$store.dispatch('getEquipes'); }
    }
  }
</script>