<template>
  <footer>
    <div class="bloc">
      <h3>
        Sections
      </h3>
      <nav>
        <ul>
          <li>
            <a href="#accueil" class="anchor">À propos</a>
          </li>
          <li>
            <a href="#ambassadeur" class="anchor">Devenir ambassadeur/rice</a>
          </li>
          <li>
            <a href="#donation" class="anchor">Donations</a>
          </li>
          <li>
            <router-link :to="{ name: 'Blogs' }">Blog</router-link>          
          </li>
          <li>
            <a href="#">Contact</a>          
          </li>
          <li>
            <router-link :to="{ name: 'Admin' }">Administration</router-link>          
          </li>
        </ul>
      </nav>
    </div>
    <div class="bloc">
      <h3>
        Faire un don
      </h3>
      <!-- <button class="marquee" id="marquee-footer">
        <marquee behavior="sliding" direction="left">
          Faire une donation - Faire une donation - Faire une donation
        </marquee>
      </button> -->
      <button class="marquee" id="marquee-footer">
        Faire une donation
      </button>
      <br/>
      <span class="flex-between">
        <a href="https://www.slowfashion.global/">
          <img src="/logo-monde.svg" alt="Slow Fashion Movement" id="logo-monde">
        </a>
        <a href="https://www.instagram.com/slowfashion.movement/">
          <img src="/src/assets/images/instagram.svg" alt="Instagram Slow Fashion Movement">
        </a>
      </span>
    </div>
    <div class="bloc">
      <h3>
        Devenir ambassadeur
      </h3>
      <a href="mailto:ambassadeur@slow-fashion.fr" class="email">ambassadeur@slow-fashion.fr</a>

      <h3 class="bottom">
        Contactez-nous
      </h3>
      <a href="mailto:contact@slow-fashion.fr" class="email">contact@slow-fashion.fr</a>
    </div>
    <div class="bloc">
      <h3>
        Inscrivez-vous à notre
        <br>
        Newsletter
      </h3>
      <form id="newsletter-form">
        <label for="email" class="d-none">Email</label>
        <input type="email" placeholder="Votre email" required>
      </form>
      <a href="https://www.instagram.com/slowfashion.france/" id="link-insta">
        <img src="/src/assets/images/instagram.svg" alt="Instagram">
      </a>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'FooterApp',
    // mounted() {
      // const button = document.getElementById('marquee-footer');
      // const marquee = button.childNodes[0];
      // marquee.stop();
      // button.addEventListener('mouseover', () => marquee.start());
      // button.addEventListener('mouseout', () => marquee.stop());
    // }
  }
</script>