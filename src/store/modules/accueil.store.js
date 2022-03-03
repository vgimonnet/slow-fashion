import axios from 'axios';

export default {
  state: () => ({
    accueil: null,
    accueilMsgSuccess: null,
    accueilMsgError: null
  }),
  getters: {
    accueil (state) {
      return state.accueil;
    }
  },
  mutations: {
    ACCUEIL (state, payload) {
      state.accueil = payload.data;
    },
    ACCUEILMSGSUCCESS (state, payload) {
      state.accueilMsgSuccess = payload.data;
    },
    ACCUEILMSGERROR (state, payload) {
      state.accueilMsgError = payload.data;
    }
  },
  actions: {
    async getAccueil ({ commit }) {
      try {
        const accueil = await axios.get('http://localhost:8888/accueil');
        await commit('ACCUEIL', accueil.data);
      } catch {
        await commit('ACCUEILMSGERROR', 'Une erreur interne est survenue');
      }
    },
    async updateAccueil({ commit }, payload) {
      try {
        const accueil = await axios.put(`http://localhost:8888/accueil`, payload.data);
        await commit('ACCUEIL', accueil.data);
        await commit('ACCUEILMSGSUCCESS', 'Texte de la section d\'accueil modifié avec succés !');
      } catch {
        await commit('ACCUEILMSGERROR', 'Une erreur interne est survenue');
      }
    }
  }
};