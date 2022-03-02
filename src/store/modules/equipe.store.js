import axios from 'axios';

export default {
  state: () => ({
    equipe: null,
    equipes: [],
    nbEquipes: 0,
    equipeMsgSuccess: null,
    equipeMsgError: null
  }),
  getters: {
    equipe (state) {
      return state.equipe;
    },
    equipes (state) {
      return state.equipes;
    },
    nbEquipes (state) {
      return state.nbEquipes;
    }
  },
  mutations: {
    EQUIPE (state, payload) {
      state.equipe = payload.data;
    },
    EQUIPES (state, payload) {
      state.equipes = payload.data;
    },
    NBEQUIPES (state, payload) {
      state.nbEquipes = payload.data;
    },
    EQUIPEMSGSUCCESS (state, payload) {
      state.equipeMsgSuccess = payload.data;
    },
    EQUIPEMSGERROR (state, payload) {
      state.equipeMsgError = payload.data;
    }
  },
  actions: {
    async getEquipes ({ commit }) {
      try {
        const equipes = await axios.get('http://localhost:8000/equipes');
        await commit('EQUIPES', equipes.data);
      } catch {
        await commit('EQUIPEMSGERROR', 'Une erreur interne est survenue');
      }
    },
    async getEquipe ({ commit }, id) {
      try {
        const equipe = await axios.get(`http://localhost:8000/equipes/${ id }`);      
        await commit('EQUIPE', equipe.data);
      } catch {
        await commit('EQUIPEMSGERROR', 'Une erreur interne est survenue');
      }
    },
    async createEquipe({ commit }, payload) {
      try {
        const equipe = await axios.post('http://localhost:8000/equipes', payload);
        await commit('EQUIPE', equipe.data);
        await commit('EQUIPEMSGSUCCESS', 'Membre ajouté avec succés !');
      } catch {
        await commit('EQUIPEMSGERROR', 'Une erreur interne est survenue');
      }
    },
    async updateEquipe({ commit }, payload) {
      try {
        const equipe = await axios.put(`http://localhost:8000/equipes/${ payload.id }`, payload.data);
        await commit('EQUIPE', equipe.data);
        await commit('EQUIPEMSGSUCCESS', 'Membre modifié avec succés !');
      } catch {
        await commit('EQUIPEMSGERROR', 'Une erreur interne est survenue');
      }
    },
    async deleteEquipe({ commit }, id) {
      try {
        await axios.delete(`http://localhost:8000/equipes/${ id }`);
        await commit('EQUIPEMSGSUCCESS', 'Membre supprimé avec succès !');
      } catch {
        await commit('EQUIPEMSGERROR', 'Une erreur interne est survenue');
      }
    }
  }
};