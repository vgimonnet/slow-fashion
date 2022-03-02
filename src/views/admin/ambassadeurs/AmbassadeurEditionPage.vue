<template>
  <form @submit.prevent="formSubmit()">
    <label for="image">Image</label>
    <input type="url" name="image" id="image" v-model="image">

    <label for="nom">Nom</label>
    <input type="text" name="nom" v-model="nom">

    <label for="description">Description</label>
    <textarea name="description" id="description" cols="30" rows="10" v-model="description"></textarea>

    <button type="submit">{{ $route.params.id ? 'Modifier' : 'Ajouter' }}</button>
  </form>
</template>

<script>
  export default {
    name: 'AmbassadeurEditionPage',
    data: () => {
      return  {
        image: null,
        description: null,
        nom: null
      }
    },
    created() {
      this.unsubscribe = this.$store.subscribe(({ type, payload }) => {
        if (type === 'AMBASSADEUR') {
          this.image = payload.image;
          this.description = payload.description;
          this.nom = payload.nom;
        } else if (type === 'AMBASSADEURMSGSUCCESS') {
          this.$router.push('/admin/ambassadeurs');
          window.alert(payload);
        } else if (type === 'AMBASSADEURMSGERROR') {
          window.alert(payload);
        }
      });
    },
    mounted() {
      if (!!this.$route.params.id) {
        this.$store.dispatch('getAmbassadeur', this.$route.params.id);
      }
    },
    destroyed() {
      this.unsubscribe();
    },
    methods: {
      formSubmit() {
        const data = {
          description: this.description,
          image: this.image,
          nom: this.nom,
        };

        if (this.$route.params.id) {
          this.$store.dispatch('updateAmbassadeur', { id: this.$route.params.id, data });
        } else {
          this.$store.dispatch('createAmbassadeur', data);
        }
      }
    }
  };
</script>