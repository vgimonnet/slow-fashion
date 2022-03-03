import axios from 'axios';

export default {
  state: () => ({
    ambassadeur: null,
    ambassadeurs: [],
    nbAmbassadeurs: 0,
    ambassadeurMsgSuccess: null,
    ambassadeurMsgError: null
  }),
  getters: {
    ambassadeur (state) {
      return state.ambassadeur;
    },
    ambassadeurs (state) {
      return state.ambassadeurs;
    },
    nbAmbassadeurs (state) {
      return state.nbAmbassadeurs;
    }
  },
  mutations: {
    AMBASSADEUR (state, payload) {
      state.ambassadeur = payload.data;
    },
    AMBASSADEURS (state, payload) {
      state.ambassadeurs = payload.data;
    },
    NBAMBASSADEURS (state, payload) {
      state.nbAmbassadeurs = payload.data;
    },
    AMBASSADEURMSGSUCCESS (state, payload) {
      state.ambassadeurMsgSuccess = payload.data;
    },
    AMBASSADEURMSGERROR (state, payload) {
      state.ambassadeurMsgError = payload.data;
    }
  },
  actions: {
    async getAmbassadeurs ({ commit }) {
      try {
        const ambassadeurs = await axios.get('https://slow-fashion.api.vgimonnet.fr/ambassadeurs');
        await commit('AMBASSADEURS', ambassadeurs.data);
      } catch {
        await commit('AMBASSADEURMSGERROR', 'Une erreur interne est survenue');
      }
    },
    async getAmbassadeur ({ commit }, id) {
      try {
        const ambassadeur = await axios.get(`https://slow-fashion.api.vgimonnet.fr/ambassadeurs/${ id }`);      
        await commit('AMBASSADEUR', ambassadeur.data);
      } catch {
        await commit('AMBASSADEURMSGERROR', 'Une erreur interne est survenue');
      }
    },
    async createAmbassadeur({ commit }, payload) {
      try {
        const ambassadeur = await axios.post('https://slow-fashion.api.vgimonnet.fr/ambassadeurs', payload);
        await commit('AMBASSADEUR', ambassadeur.data);
        await commit('AMBASSADEURMSGSUCCESS', 'Ambassadeur ajouté avec succés !');
      } catch {
        await commit('AMBASSADEURMSGERROR', 'Une erreur interne est survenue');
      }
    },
    async updateAmbassadeur({ commit }, payload) {
      try {
        const ambassadeur = await axios.put(`https://slow-fashion.api.vgimonnet.fr/ambassadeurs/${ payload.id }`, payload.data);
        await commit('AMBASSADEUR', ambassadeur.data);
        await commit('AMBASSADEURMSGSUCCESS', 'Ambassadeur modifié avec succés !');
      } catch {
        await commit('AMBASSADEURMSGERROR', 'Une erreur interne est survenue');
      }
    },
    async deleteAmbassadeur({ commit }, id) {
      try {
        await axios.delete(`https://slow-fashion.api.vgimonnet.fr/ambassadeurs/${ id }`);
        await commit('AMBASSADEURMSGSUCCESS', 'Ambassadeur supprimé avec succès !');
      } catch {
        await commit('AMBASSADEURMSGERROR', 'Une erreur interne est survenue');
      }
    }
  }
};