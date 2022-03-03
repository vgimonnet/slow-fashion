<template>
  <section id="valeur">
    <ul>
      <li v-for="(valeur, index) in valeurs" :key="index">
        <h2 :class="index === 0 ? 'valeur_titre active' : 'valeur_titre'  " :data-texte="valeur.description" :data-image="valeur.image">
          {{ valeur.titre }}
          <img src="../../assets/images/arrow-union.svg" alt="Voir la valeur" aria-hidden="true">
        </h2>
      </li>
    </ul>
    <p>
      <img src="../../assets/images/eco-responsable.svg" alt="Eco-responsable" id="img-ecoresponsable">
      <img src="../../assets/images/locale.svg" alt="Locale" id="img-locale">
      <img src="../../assets/images/recyclabilite.svg" alt="Recyclabilité" id="img-recyclabilite">
      <img src="../../assets/images/durabilite.svg" alt="Durabilité" id="img-durabilite">
      {{ texte }}
    </p>
  </section>
</template>

<script>
  export default {
    name: 'ValeurSection',
    data: () => {
      return {
        valeurs: [],
        texte: ''
      }
    },
    created() {
      this.unsubscribe = this.$store.subscribe(({ type, payload }) => {
        if (type === 'VALEURS') {
          this.valeurs = payload;
          setTimeout(() => this.startListeners(), 1000);
        }
      });
    },
    mounted() { this.$store.dispatch('getValeurs'); },
    destroyed() { this.unsubscribe(); },
    methods: {
      startListeners() {
        const items = document.querySelectorAll('h2.valeur_titre');

        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          if (i === 0) {
            this.texte = item.dataset.texte;
            document.getElementById(item.dataset.image).classList.add('active');            
          };
          item.addEventListener('mouseover', () => {
            document.querySelector('h2.active').classList.remove('active');
            document.querySelector('img.active').classList.remove('active');
            if (!item.classList.contains('active')) {
              item.classList.add('active');
              this.texte = item.dataset.texte;
              document.getElementById(item.dataset.image).classList.add('active');            
            }
          });
        }
      }
    }
  }
</script>


<style lang="scss">
  @import '../../assets/styles/components/sections/valeur.section.scss';
</style>