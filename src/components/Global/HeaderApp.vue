<template>
  <header>
    <router-link :to="{ name: 'Accueil' }" id="logo">
      <span><i>Slow</i>Fash<i>ion</i></span>
      <i class="small">.france</i>
    </router-link>
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
          <a href="#">Contact</a>
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