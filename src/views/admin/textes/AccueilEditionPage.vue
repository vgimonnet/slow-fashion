<template>
  <main>
    <h1>Texte section d'accueil</h1>

    <form @submit.prevent="formSubmit()">
      <label for="titre">Titre / Slogan</label>
      <textarea type="text" name="titre" v-model="titre"></textarea>

      <label for="contenu">Contenu</label>
      <textarea name="contenu" id="contenu" cols="30" rows="10" v-model="contenu"></textarea>

      <button type="submit">Modifier</button>
    </form>
  </main>
</template>

<script>
  export default {
    name: 'AccueilEditionPage',
    data: () => {
      return  {
        contenu: null,
        titre: null
      }
    },
    created() {
      this.unsubscribe = this.$store.subscribe(({ type, payload }) => {
        if (type === 'ACCUEIL') {
          this.contenu = payload.contenu;
          this.titre = payload.titre;
        } else if (type === 'ACCUEILMSGSUCCESS') {
          this.$router.push('/admin');
          window.alert(payload);
        } else if (type === 'ACCUEILMSGERROR') {
          window.alert(payload);
        }
      });
    },
    mounted() {
      this.$store.dispatch('getAccueil');
    },
    destroyed() {
      this.unsubscribe();
    },
    methods: {
      formSubmit() {
        const data = {
          contenu: this.contenu,
          titre: this.titre,
        };

        this.$store.dispatch('updateAccueil', { id: this.$route.params.id, data });
      }
    }
  };
</script>