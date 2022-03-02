import axios from 'axios';

export default {
  state: () => ({
    partenaire: null,
    partenaireMsgSuccess: null,
    partenaireMsgError: null
  }),
  getters: {
    partenaire (state) {
      return state.partenaire;
    }
  },
  mutations: {
    PARTENAIRE (state, payload) {
      state.partenaire = payload.data;
    },
    PARTENAIREMSGSUCCESS (state, payload) {
      state.partenaireMsgSuccess = payload.data;
    },
    PARTENAIREMSGERROR (state, payload) {
      state.partenaireMsgError = payload.data;
    }
  },
  actions: {
    async getPartenaire ({ commit }) {
      try {
        const partenaires = await axios.get('http://localhost:8000/partenaire');
        await commit('PARTENAIRE', partenaires.data);
      } catch {
        await commit('PARTENAIREMSGERROR', 'Une erreur interne est survenue');
      }
    },
    async updatePartenaire({ commit }, payload) {
      try {
        const partenaire = await axios.put(`http://localhost:8000/partenaire`, payload.data);
        await commit('PARTENAIRE', partenaire.data);
        await commit('PARTENAIREMSGSUCCESS', 'Texte de la section d\'partenaire modifié avec succés !');
      } catch {
        await commit('PARTENAIREMSGERROR', 'Une erreur interne est survenue');
      }
    }
  }
};