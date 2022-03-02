<template>
  <main>
    <h1>
      Blogs
    </h1>
    <router-link :to="{ name: 'BlogAjouter' }">Ajouter</router-link>
    <ul>
      <li v-for="blog in blogs" :key="blog.id">
        {{ blog.titre }}
        <router-link :to="{ name: 'BlogModifier', params: { id: blog.id } }">Modifier</router-link>
        <button @click="deleteBlog(blog.id)">Supprimer</button>
      </li>
    </ul>
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
          window.alert(payload);
        } else if (type === 'BLOGMSGERROR') {
          window.alert(payload);
        }
      });
    },
    mounted() { this.getBlogs(); },
    destroyed() { this.unsubscribe(); },
    methods: {
      deleteBlog(id) { this.$store.dispatch('deleteBlog', id); },
      getBlogs() { this.$store.dispatch('getBlogs'); }
    }
  }
</script>