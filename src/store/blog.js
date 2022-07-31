// import { getBlogs, getBlog } from '../api/blogService';

// export const state = () => ({
//   loading: false,
//   data: [],
//   error: null,
//   postLoading: false,
//   post: null,
//   postError: null,
// });

// export const mutations = {
//   FETCH_INITIATE(state) {
//     state.loading = true;
//   },
//   FETCH_SUCCESS(state, data) {
//     state.error = null;
//     state.data = data;
//     state.loading = false;
//   },
//   FETCH_ERROR(state, data) {
//     state.error = data;
//     state.loading = false;
//   },
//   FETCH_POST_INITIATE(state) {
//     state.postLoading = true;
//   },
//   FETCH_POST_SUCCESS(state, data) {
//     state.postError = null;
//     state.post = data;
//     state.postLoading = false;
//   },
//   FETCH_POST_ERROR(state, data) {
//     state.postError = data;
//     state.postLoading = false;
//   },
// };

// export const actions = {
//   async fetch({ commit }, params) {
//     commit('FETCH_INITIATE');
//     try {
//       const res = await getBlogs(params);
//       if (res && res.data) {
//         commit('FETCH_SUCCESS', res.data);
//       }
//     } catch (error) {
//       commit('FETCH_ERROR', error);
//     }
//   },
//   async fetchPost({ commit }, params) {
//     commit('FETCH_POST_INITIATE');
//     try {
//       const res = await getBlog(params);
//       commit('FETCH_POST_SUCCESS', res.data);
//     } catch (error) {
//       commit('FETCH_POST_ERROR', error);
//     }
//   },
// };
