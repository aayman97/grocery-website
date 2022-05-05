import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
  },
  getters: {},
  mutations: {
    addToList(state, payload) {
      let check = false;

      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].productObject === payload.product.productObject) {
          check = true;
          state.cart[i].quantity++;
          break;
        }
      }
      if (!check) {
        state.cart.push(payload.product);
      }
    },
    removeFromList(state, payload) {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].productObject === payload.product.productObject) {
          if (state.cart[i].quantity === 1) {
            state.cart.splice(i, 1);
          } else {
            state.cart[i].quantity--;
          }
          break;
        }
      }
    },
  },
  actions: {},
  modules: {},
});
