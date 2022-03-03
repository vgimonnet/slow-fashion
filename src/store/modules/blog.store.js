import axios from 'axios';

export default {
  state: () => ({
    blog: null,
    blogs: [],
    nbBlogs: 0,
    blogMsgSuccess: null,
    blogMsgError: null
  }),
  getters: {
    blog (state) {
      return state.blog;
    },
    blogs (state) {
      return state.blogs;
    },
    nbBlog (state) {
      return state.nbBlog;
    }
  },
  mutations: {
    BLOG (state, payload) {
      state.blog = payload.data;
    },
    BLOGS (state, payload) {
      state.blogs = payload.data;
    },
    NBBLOGS (state, payload) {
      state.nbBlogs = payload.data;
    },
    BLOGMSGSUCCESS (state, payload) {
      state.blogMsgSuccess = payload.data;
    },
    BLOGMSGERROR (state, payload) {
      state.blogMsgError = payload.data;
    }
  },
  actions: {
    async getBlogs ({ commit }) {
      try {
        const blogs = await axios.get('http://localhost:8888/blogs');
        await commit('BLOGS', blogs.data);
      } catch {
        await commit('BLOGMSGERROR', 'Une erreur interne est survenue');
      }
    },
    async getBlog ({ commit }, id) {
      try {
        const blog = await axios.get(`http://localhost:8888/blogs/${ id }`);      
        await commit('BLOG', blog.data);
      } catch {
        await commit('BLOGMSGERROR', 'Une erreur interne est survenue');
      }
    },
    async createBlog({ commit }, payload) {
      try {
        const blog = await axios.post('http://localhost:8888/blogs', payload);
        await commit('BLOG', blog.data);
        await commit('BLOGMSGSUCCESS', 'Blog ajouté avec succés !');
      } catch {
        await commit('BLOGMSGERROR', 'Une erreur interne est survenue');
      }
    },
    async updateBlog({ commit }, payload) {
      try {
        const blog = await axios.put(`http://localhost:8888/blogs/${ payload.id }`, payload.data);
        await commit('BLOG', blog.data);
        await commit('BLOGMSGSUCCESS', 'Blog modifié avec succés !');
      } catch {
        await commit('BLOGMSGERROR', 'Une erreur interne est survenue');
      }
    },
    async deleteBlog({ commit }, id) {
      try {
        await axios.delete(`http://localhost:8888/blogs/${ id }`);
        await commit('BLOGMSGSUCCESS', 'Blog supprimé avec succès !');
      } catch {
        await commit('BLOGMSGERROR', 'Une erreur interne est survenue');
      }
    }
  }
};