<template>
  <main>
    <h1>
      Blogs
    </h1>
    <ul>
      <li v-for="blog in blogs" :key="blog.id">
        {{ blog.titre }}
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