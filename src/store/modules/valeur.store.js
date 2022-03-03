import axios from 'axios';

export default {
  state: () => ({
    valeur: null,
    valeurs: [],
    nbValeurs: 0,
    valeurMsgSuccess: null,
    valeurMsgError: null
  }),
  getters: {
    valeur (state) {
      return state.valeur;
    },
    valeurs (state) {
      return state.valeurs;
    },
    nbValeur (state) {
      return state.nbValeur;
    }
  },
  mutations: {
    VALEUR (state, payload) {
      state.valeur = payload.data;
    },
    VALEURS (state, payload) {
      state.valeurs = payload.data;
    },
    NBVALEURS (state, payload) {
      state.nbValeurs = payload.data;
    },
    VALEURMSGSUCCESS (state, payload) {
      state.valeurMsgSuccess = payload.data;
    },
    VALEURMSGERROR (state, payload) {
      state.valeurMsgError = payload.data;
    }
  },
  actions: {
    async getValeurs ({ commit }) {
      try {
        const valeurs = await axios.get('https://slow-fashion.api.vgimonnet.fr/valeurs');
        await commit('VALEURS', valeurs.data);
      } catch {
        await commit('VALEURMSGERROR', 'Une erreur interne est survenue');
      }
    },
    async getValeur ({ commit }, id) {
      try {
        const valeur = await axios.get(`https://slow-fashion.api.vgimonnet.fr/valeurs/${ id }`);      
        await commit('VALEUR', valeur.data);
      } catch {
        await commit('VALEURMSGERROR', 'Une erreur interne est survenue');
      }
    },
    async createValeur({ commit }, payload) {
      try {
        const valeur = await axios.post('https://slow-fashion.api.vgimonnet.fr/valeurs', payload);
        await commit('VALEUR', valeur.data);
        await commit('VALEURMSGSUCCESS', 'Valeur ajouté avec succés !');
      } catch {
        await commit('VALEURMSGERROR', 'Une erreur interne est survenue');
      }
    },
    async updateValeur({ commit }, payload) {
      try {
        const valeur = await axios.put(`https://slow-fashion.api.vgimonnet.fr/valeurs/${ payload.id }`, payload.data);
        await commit('VALEUR', valeur.data);
        await commit('VALEURMSGSUCCESS', 'Valeur modifié avec succés !');
      } catch {
        await commit('VALEURMSGERROR', 'Une erreur interne est survenue');
      }
    },
    async deleteValeur({ commit }, id) {
      try {
        await axios.delete(`https://slow-fashion.api.vgimonnet.fr/valeurs/${ id }`);
        await commit('VALEURMSGSUCCESS', 'Valeur supprimé avec succès !');
      } catch {
        await commit('VALEURMSGERROR', 'Une erreur interne est survenue');
      }
    }
  }
};