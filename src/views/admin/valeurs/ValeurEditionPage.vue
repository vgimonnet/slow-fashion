<template>
  <form @submit.prevent="formSubmit()">
    <label for="titre">Titre</label>
    <input type="text" name="titre" v-model="titre">

    <label for="description">Description</label>
    <textarea name="description" id="description" cols="30" rows="10" v-model="description"></textarea>

    <button type="submit">{{ $route.params.id ? 'Modifier' : 'Ajouter' }}</button>
  </form>
</template>

<script>
  export default {
    name: 'ValeurEditionPage',
    data: () => {
      return  {
        titre: null,
        description: null
      }
    },
    created() {
      this.unsubscribe = this.$store.subscribe(({ type, payload }) => {
        if (type === 'VALEUR') {
          this.titre = payload.titre;
          this.description = payload.description;
        } else if (type === 'VALEURMSGSUCCESS') {
          this.$router.push('/admin/valeurs');
          window.alert(payload);
        } else if (type === 'VALEURMSGERROR') {
          window.alert(payload);
        }
      });
    },
    mounted() {
      if (!!this.$route.params.id) {
        this.$store.dispatch('getValeur', this.$route.params.id);
      }
    },
    destroyed() {
      this.unsubscribe();
    },
    methods: {
      formSubmit() {
        const data = {
          titre: this.titre,
          description: this.description,
        };

        if (this.$route.params.id) {
          this.$store.dispatch('updateValeur', { id: this.$route.params.id, data });
        } else {
          this.$store.dispatch('createValeur', data);
        }
      }
    }
  };
</script>