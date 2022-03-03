import axios from 'axios';

export default {
  state: () => ({
    donation: null,
    donationMsgSuccess: null,
    donationMsgError: null
  }),
  getters: {
    donation (state) {
      return state.donation;
    }
  },
  mutations: {
    DONATION (state, payload) {
      state.donation = payload.data;
    },
    DONATIONMSGSUCCESS (state, payload) {
      state.donationMsgSuccess = payload.data;
    },
    DONATIONMSGERROR (state, payload) {
      state.donationMsgError = payload.data;
    }
  },
  actions: {
    async getDonation ({ commit }) {
      try {
        const donations = await axios.get('http://localhost:8888/donation');
        await commit('DONATION', donations.data);
      } catch {
        await commit('DONATIONMSGERROR', 'Une erreur interne est survenue');
      }
    },
    async updateDonation({ commit }, payload) {
      try {
        const donation = await axios.put(`http://localhost:8888/donation`, payload.data);
        await commit('DONATION', donation.data);
        await commit('DONATIONMSGSUCCESS', 'Texte de la section donation modifié avec succés !');
      } catch {
        await commit('DONATIONMSGERROR', 'Une erreur interne est survenue');
      }
    }
  }
};