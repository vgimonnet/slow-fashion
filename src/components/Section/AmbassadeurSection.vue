<template>
  <section id="ambassadeur">
    <!-- <carousel>
      <slide>
        Slide 1
      </slide>
      <slide>
        Slide 2
      </slide>
      <slide>
        Slide 3
      </slide>
    </carousel> -->
    <p>
      Tu veux devenir ambassadeur ? Contacte nous <a href="#">ici</a> pour nous rejoindre !
    </p>
  </section>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    name: 'AmbassadeurSection',
    components: {
      'carousel': Carousel,
      'slide': Slide
    }
  }
</script>