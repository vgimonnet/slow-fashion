<template>
  <form @submit.prevent="formSubmit()">
    <label for="image">Image</label>
    <input type="url" name="image" id="image" v-model="image">

    <label for="titre">Titre</label>
    <input type="text" name="titre" v-model="titre">

    <label for="contenu">Contenu</label>
    <textarea name="contenu" id="contenu" cols="30" rows="10" v-model="contenu"></textarea>

    <button type="submit">{{ $route.params.id ? 'Modifier' : 'Ajouter' }}</button>
  </form>
</template>

<script>
  export default {
    name: 'BlogEditionPage',
    data: () => {
      return  {
        image: null,
        contenu: null,
        titre: null
      }
    },
    created() {
      this.unsubscribe = this.$store.subscribe(({ type, payload }) => {
        if (type === 'BLOG') {
          this.image = payload.image;
          this.contenu = payload.contenu;
          this.titre = payload.titre;
        } else if (type === 'BLOGMSGSUCCESS') {
          this.$router.push('/admin/blogs');
          window.alert(payload);
        } else if (type === 'BLOGMSGERROR') {
          window.alert(payload);
        }
      });
    },
    mounted() {
      if (!!this.$route.params.id) {
        this.$store.dispatch('getBlog', this.$route.params.id);
      }
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

        if (this.$route.params.id) {
          this.$store.dispatch('updateBlog', { id: this.$route.params.id, data });
        } else {
          this.$store.dispatch('createBlog', data);
        }
      }
    }
  };
</script>