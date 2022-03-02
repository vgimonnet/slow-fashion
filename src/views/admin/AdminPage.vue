<template>
  <main>
    <h1>Administration</h1>

    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'BlogsAdmin' }">Blogs</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'AmbassadeursAdmin' }">Ambassadeurs</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ValeursAdmin' }">Valeurs</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'TexteAccueilModifier' }">Texte accueil</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'EquipeAdmin' }">Equipe</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'TexteDonationModifier' }">Texte donation</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'TextePartenaireModifier' }">Texte partenaire</router-link>
        </li>
      </ul>
    </nav>
  </main>
</template>

<script>
  export default {
    name: 'AdminPage'
  }
</script>