<template>
  <main id="admin" class="blogs-admin-page">
    <h1>
      <span>Blogs</span>
    </h1>
    <router-link :to="{ name: 'BlogAjouter' }" class="marquee btn-add">Ajouter</router-link>
    <table>
      <thead>
        <tr>
          <th>
            Titre
          </th>
          <th>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="blog in blogs" :key="blog.id">
          <td>
            {{ blog.titre }}
          </td>
          <td>
            <router-link class="marquee" :to="{ name: 'BlogModifier', params: { id: blog.id } }">Modifier</router-link>
            <button class="marquee" @click="deleteBlog(blog.id)">Supprimer</button>    
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
  export default {
    name: 'BlogsAdminPage',
    data: () => {
      return {
        blogs: []
      };
    },
    created() {
      this.unsubscribe = this.$store.subscribe(({ type, payload}) => {
        if (type === 'BLOGS') this.blogs = payload;
         else if (type === 'BLOGMSGSUCCESS') {
          this.getBlogs();
          // window.alert(payload);
        } else if (type === 'BLOGMSGERROR') {
          window.alert(payload);
        }
      });
    },
    mounted() { this.getBlogs(); },
    destroyed() { this.unsubscribe(); },
    methods: {
      deleteBlog(id) { 
        if (window.confirm('Êtes-vous sur de vouloir supprimer ce blog ?')) {
          this.$store.dispatch('deleteBlog', id)
          .then(() => {
            window.alert('Blog supprimé avec succès !');              
          });
        }
      },
      getBlogs() { this.$store.dispatch('getBlogs'); }
    }
  }
</script>