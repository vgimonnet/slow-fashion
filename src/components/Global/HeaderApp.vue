<template>
  <header>
    <router-link :to="{ name: 'Accueil' }" id="logo">
      <span><i>Slow</i>Fash<i>ion</i></span>
      <i class="small">.france</i>
    </router-link>
    <nav>
      <!-- <ul>
        <li>
          <a href="#accueil" class="anchor">Accueil</a>
        </li>
        <li>
          <a href="#valeur" class="anchor">Valeur</a>
        </li>
        <li>
          <a href="#ambassadeur" class="anchor">Ambassadeur</a>
        </li>
        <li>
          <a href="#donation" class="anchor">Donation</a>
        </li>
        <li>
          <a href="#equipe" class="anchor">Equipe</a>
        </li>
        <li>
          <router-link :to="{ name: 'Blogs' }">Blogs</router-link>          
        </li>
        <li>
          <router-link :to="{ name: 'Admin' }">Admin</router-link>          
        </li>
      </ul> -->
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
  </header>
</template>

<script>
  export default {
    name: 'HeaderApp'
  }
</script>