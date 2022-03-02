import { createStore } from 'vuex';
import accueil from './modules/accueil.store.js';
import ambassadeur from './modules/ambassadeur.store.js';
import blog from './modules/blog.store.js';
import donation from './modules/donation.store.js';
import equipe from './modules/equipe.store.js';
import partenaire from './modules/partenaire.store.js';
import valeur from './modules/valeur.store.js';

const store = createStore({
  modules: {
    accueil,
    ambassadeur,
    blog,
    donation,
    equipe,
    partenaire,
    valeur    
  }
});

export default store;