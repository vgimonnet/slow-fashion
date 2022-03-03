<template>
  <main id="admin">
    <form @submit.prevent="formSubmit()">
      <div class="form-group">
        <label for="titre">Titre</label>
        <input type="text" name="titre" v-model="titre">
      </div>

      <div class="form-group">
        <label for="contenu">Contenu</label>
        <textarea name="contenu" id="contenu" cols="30" rows="10" v-model="contenu"></textarea>
      </div>

      <button type="submit" class="marquee">{{ $route.params.id ? 'Modifier' : 'Ajouter' }}</button>
    </form>
  </main>
</template>

<script>
  export default {
    name: 'BlogEditionPage',
    data: () => {
      return  {
        contenu: '',
        titre: null,
      }
    },
    created() {
      this.unsubscribe = this.$store.subscribe(({ type, payload }) => {
        if (type === 'BLOG') {
          this.contenu = payload.contenu;
          this.titre = payload.titre;
        } else if (type === 'BLOGMSGSUCCESS') {
          this.$router.push('/admin/blogs');
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
          titre: this.titre,
        };

        if (this.$route.params.id) {
          this.$store.dispatch('updateBlog', { id: this.$route.params.id, data })
          .then(() => {
            window.alert('Blog modifié avec succès !');
          });
        } else {
          this.$store.dispatch('createBlog', data)
          .then(() => {
            window.alert('Blog ajouté avec succès !');            
          });
        }
      }
    }
  };
</script>