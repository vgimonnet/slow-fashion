<template>
  <main>
    <h1>Texte section partenaire</h1>

    <form @submit.prevent="formSubmit()">
      <label for="image">Image</label>
      <input type="url" name="image" id="image" v-model="image">

      <label for="titre">Titre</label>
      <input type="text" name="titre" v-model="titre">

      <label for="contenu">Contenu</label>
      <textarea name="contenu" id="contenu" cols="30" rows="10" v-model="contenu"></textarea>

      <button type="submit">Modifier</button>
    </form>
  </main>
</template>

<script>
  export default {
    name: 'PartenaireEditionPage',
    data: () => {
      return  {
        image: null,
        contenu: null,
        titre: null
      }
    },
    created() {
      this.unsubscribe = this.$store.subscribe(({ type, payload }) => {
        if (type === 'PARTENAIRE') {
          this.image = payload.image;
          this.contenu = payload.contenu;
          this.titre = payload.titre;
        } else if (type === 'PARTENAIREMSGSUCCESS') {
          this.$router.push('/admin');
          window.alert(payload);
        } else if (type === 'PARTENAIREMSGERROR') {
          window.alert(payload);
        }
      });
    },
    mounted() {
      this.$store.dispatch('getPartenaire');
    },
    destroyed() {
      this.unsubscribe();
    },
    methods: {
      formSubmit() {
        const data = {
          contenu: this.contenu,
          image: this.image,
          titre: this.titre,
        };

        this.$store.dispatch('updatePartenaire', { id: this.$route.params.id, data });
      }
    }
  };
</script>