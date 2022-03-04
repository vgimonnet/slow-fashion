<template>
  <main id="admin">
    <h1>
      <span>
        Blog
      </span>
    </h1>
    <ul id="blogs_list">
      <li v-for="(blog, index) in blogs" :key="blog.id">
        <router-link :to="{ name: 'Blog', params: { id: blog.id } }">
          <img src="/src/assets/images/woman1.svg" alt="Ambassadrice 1" v-if="index % 2 === 0">
          <img src="/src/assets/images/woman2.svg" alt="Ambassadrice 2" v-else>
          <span>{{ blog.titre }}</span>
        </router-link>
      </li>
    </ul>
  </main>
</template>

<script>
  export default {
    name: 'BlogsPage',
    data: () => {
      return {
        blogs: []
      };
    },
    created() {
      this.unsubscribe = this.$store.subscribe(({ type, payload}) => {
        if (type === 'BLOGS') this.blogs = payload;
      });
    },
    mounted() { this.$store.dispatch('getBlogs'); },
    destroyed() { this.unsubscribe(); }
  }
</script>