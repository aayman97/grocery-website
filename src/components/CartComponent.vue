<template>
  <div style="position: relative; margin-top: 10px">
    <fa
      @click="toggle"
      style="color: black; font-size: 25px; cursor: pointer"
      icon="cart-shopping"
    />
    <div id="cart-length">{{ cart.length }}</div>
    <div v-show="open" id="cart-item">
      <div v-if="cart.length > 0">
        <div
          v-for="product in cart"
          :key="product.productObject.id"
          class="product-cart-item"
        >
          <img alt="product-img" :src="product.productObject.product_img" />

          <div>
            <h3>{{ product.productObject.name }}</h3>
            <h5>
              Quantity: {{ product.quantity }} x
              {{ product.productObject.price }} L.E
            </h5>
          </div>

          <h3 id="price">
            {{ product.quantity * product.productObject.price }} LE
          </h3>
        </div>
      </div>

      <div
        v-else
        style="
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        <h2>There is no item in the cart</h2>
      </div>

      <div v-if="cart.length > 0" class="clear-and-proceed">
        <h5
          style="
            color: #0096ff;
            font-weight: 200;
            letter-spacing: 0.6px;
            cursor: pointer;
          "
          @click="clearCart"
        >
          Clear Cart
        </h5>
        <h5 style="color: #41ab00; letter-spacing: 0.6px; cursor: pointer">
          Proceed to Checkout
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CartComponent",
  data() {
    return {
      open: false,
    };
  },
  computed: {
    ...mapState(["cart"]),
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    clearCart() {
      this.$store.commit("clearCart");
    },
  },
};
</script>

<style lang="scss">
#cart-length {
  position: absolute;
  color: black;
  font-size: 15px;
  left: 60%;
  bottom: 60%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d0fdb4;
  border-radius: 100%;
  font-weight: 700;
  border-style: solid;
  border-color: white;
}

#cart-item {
  width: 370px;
  background: #d0fdb4;
  position: absolute;
  right: -20px;
  top: 110%;
  z-index: 10;
  border-radius: 10px;
  display: flex;
  padding: 5px;
  flex-direction: column;
  border-style: solid;
  border-color: white;
}

.product-cart-item {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 10px;

  img {
    height: 100%;
    border-radius: 10px;
    object-fit: fill;
  }
  div {
    height: 100%;
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: left;
  }
  #price {
    align-self: center;
    font-size: 20px;
    width: 20%;
  }
}

.clear-and-proceed {
  align-self: center;
  width: 95%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
