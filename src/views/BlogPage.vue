<template>
  <main v-if="blog">
    <h1>{{ blog.titre }}</h1>
    <p>{{ blog.contenu }}</p>
  </main>
</template>

<script>
  export default {
    name: 'BlogPage',
    data: () => {
      return {
        blog: null
      }
    },
    created() {
      this.unsubscribe = this.$store.subscribe(({ type, payload }) => {
        if (type === 'BLOG') this.blog = payload;
        else if (type === 'BLOGMSGSUCCESS') {
          this.$router.push('/admin/blogs');
          window.alert(payload);
        } else if (type === 'BLOGMSGERROR') {
          window.alert(payload);
        }
      });
    },
    mounted() { this.$store.dispatch('getBlog', this.$route.params.id); },
    destroyed() { this.unsubscribe(); }
    
  }
</script>