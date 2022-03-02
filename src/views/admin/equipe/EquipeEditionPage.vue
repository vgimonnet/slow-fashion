<template>
  <form @submit.prevent="formSubmit()">
    <label for="nom">Nom</label>
    <input type="text" name="nom" v-model="nom">

    <button type="submit">{{ $route.params.id ? 'Modifier' : 'Ajouter' }}</button>
  </form>
</template>

<script>
  export default {
    name: 'EquipeEditionPage',
    data: () => {
      return  {
        nom: null
      }
    },
    created() {
      this.unsubscribe = this.$store.subscribe(({ type, payload }) => {
        if (type === 'EQUIPE') {
          this.nom = payload.nom;
        } else if (type === 'EQUIPEMSGSUCCESS') {
          this.$router.push('/admin/equipe');
          window.alert(payload);
        } else if (type === 'EQUIPEMSGERROR') {
          window.alert(payload);
        }
      });
    },
    mounted() {
      if (!!this.$route.params.id) {
        this.$store.dispatch('getEquipe', this.$route.params.id);
      }
    },
    destroyed() {
      this.unsubscribe();
    },
    methods: {
      formSubmit() {
        const data = {
          nom: this.nom,
        };

        if (this.$route.params.id) {
          this.$store.dispatch('updateEquipe', { id: this.$route.params.id, data });
        } else {
          this.$store.dispatch('createEquipe', data);
        }
      }
    }
  };
</script>