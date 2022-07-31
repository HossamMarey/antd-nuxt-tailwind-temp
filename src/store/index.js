// import { getCategories } from '~/api/categoryService';
// import { getCourses } from '~/api/courseService';
// import { getPlacmentTests } from '~/api/placementTestService';
// import { getBlogs } from '~/api/blogService';
// import { getCart } from '~/api/cartService';
// import { getWishlist } from '~/api/wishlistService';

// export const getters = {
//   isAuthenticated(state) {
//     return state.auth.loggedIn;
//   },

//   loggedInUser(state) {
//     return state.auth.user;
//   },
// };

// export const actions = {
//   // async nuxtServerInit({ commit }, ctx) {
//   //   // handle login via token
//   //   const TOKEN = ctx.$auth.strategies.laravelJWT.token.get() || null;
//   //   if (TOKEN) {
//   //     this.$axios.defaults.headers.common.Authorization = TOKEN;
//   //     const userRes = await ctx.$axios.get('/auth/current_user');
//   //     if (userRes && userRes.data) {
//   //       ctx.$auth.setUser(userRes.data);
//   //       // if user add =>
//   //       // Cart
//   //       const cartPromise = initCart(ctx, commit);
//   //       // Wishlist
//   //       const wishListPromise = initWishList(ctx, commit);
//   //       await Promise.all([cartPromise, wishListPromise]);
//   //     }
//   //   }
//   //   // console.log('protected', userRes.data);

//   //   // init state e courses
//   //   const coursesPromise = initCourses(ctx, commit);
//   //   // init state e placementTests
//   //   const testsPromise = initTests(ctx, commit);
  

//   //   await Promise.all([
//   //     coursesPromise,
//   //     testsPromise,
      
//   //   ]);
//   // },
// };

// // const initCourses = async (ctx, commit) => {
// //   try {
// //     commit('courses/FETCH_INITIATE');
// //     const coursesRes = await getCourses(ctx.route.query);
// //     if (coursesRes && coursesRes.status === 200) {
// //       commit('courses/FETCH_SUCCESS', coursesRes.data);
// //     } else {
// //       commit('courses/FETCH_ERROR', coursesRes);
// //     }
// //   } catch (error) {}
// //   return 'done';
// // };

// // const initTests = async (ctx, commit) => {
// //   try {
// //     commit('placementTest/PLACEMENT_TESTS_INITIAT');
// //     const res = await getPlacmentTests();
// //     if (res.status === 200) {
// //       commit('placementTest/PLACEMENT_TESTS_SUCCESS', res.data.Tests);
// //     } else {
// //       commit('placementTest/PLACEMENT_TESTS_ERROR', res.message);
// //     }
// //   } catch (error) {
// //     commit('placementTest/PLACEMENT_TESTS_ERROR', error.message);
// //   }

// //   return 'done';
// // };

 

// // const initCart = async (ctx, commit) => {
// //   try {
// //     commit('cart/FETCH_INITIATE');
// //     const cartRes = await getCart();

// //     if (cartRes) {
// //       commit('cart/FETCH_SUCCESS', { data: cartRes });
// //     }
// //   } catch (error) {
// //     commit('cart/FETCH_ERROR', error);
// //   }
// //   return 'done';
// // };

// // const initWishList = async (ctx, commit) => {
// //   try {
// //     commit('wishlist/FETCH_INITIATE');
// //     const res = await getWishlist();
// //     if (res) {
// //       commit('wishlist/FETCH_SUCCESS', res);
// //     }
// //   } catch (error) {
// //     commit('wishlist/FETCH_ERROR', error);
// //   }
// //   return 'done';
// // };
