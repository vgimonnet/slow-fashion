<template>
  <main v-if="blog" id="admin">
    <section id="blog-page">
      <h1>
        <span>
          {{ blog.titre }}
        </span>
      </h1>
      <article>
        <img src="/src/assets/images/woman1.svg" alt="Ambassadrice 1">
        <p>{{ blog.contenu }}</p>
      </article>
    </section>
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