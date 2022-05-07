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
        if (
          state.cart[i].productObject.id === payload.product.productObject.id
        ) {
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
        if (
          state.cart[i].productObject.id === payload.product.productObject.id
        ) {
          if (state.cart[i].quantity === 1) {
            state.cart.splice(i, 1);
          } else {
            state.cart[i].quantity--;
          }
          break;
        }
      }
    },
    clearCart(state) {
      state.cart = [];
    },
    addToListCheckout(state, payload) {
      for (let i = 0; i < state.cart.length; i++) {
        if (
          state.cart[i].productObject.id ===
          payload.product.productObject.productObject.id
        ) {
          state.cart[i].quantity++;
          break;
        }
      }
    },
    removeFromListCheckout(state, payload) {
      for (let i = 0; i < state.cart.length; i++) {
        if (
          state.cart[i].productObject.id ===
          payload.product.productObject.productObject.id
        ) {
          if (state.cart[i].quantity === 1) {
            state.cart.splice(i, 1);
          } else {
            state.cart[i].quantity--;
          }
          break;
        }
      }
    },

    clearProductFromCheckout(state, payload) {
      for (let i = 0; i < state.cart.length; i++) {
        if (
          state.cart[i].productObject.id ===
          payload.product.productObject.productObject.id
        ) {
          state.cart.splice(i, 1);
          break;
        }
      }
    },
  },
  actions: {},
  modules: {},
});
