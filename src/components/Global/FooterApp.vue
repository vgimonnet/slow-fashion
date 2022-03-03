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
            <router-link :to="{ name: 'Blogs' }">Blogs</router-link>          
          </li>
          <li>
            <router-link :to="{ name: 'Admin' }">Contact</router-link>          
          </li>
        </ul>
      </nav>
    </div>
    <div class="bloc">
      <h3>
        Faire un don
      </h3>
      <button class="marquee">
        <marquee behavior="sliding" direction="left">
          Faire une donation - Faire une donation - Faire une donation
        </marquee>
      </button>
      <br/>
      <img src="/logo-monde.svg" alt="Slow Fashion Movement" id="logo-monde">
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
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'FooterApp'
  }
</script>