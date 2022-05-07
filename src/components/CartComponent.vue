<template>
  <div class="cart-container">
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
        <h2>No item</h2>
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

        <!-- <router-link
          :to="{
            name: 'Checkout',
          }"
        > -->
        <h5 style="color: #41ab00; letter-spacing: 0.6px; cursor: pointer">
          Proceed to Checkout
        </h5>
        <!-- </router-link> -->
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
.cart-container {
  position: relative;
  margin-top: 10px;
  margin-right: 20px;
}
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

@media (min-width: 421px) and (max-width: 490px) {
  .cart-container {
    position: absolute;
    top: 20px;
    left: 72%;
  }

  #cart-length {
    position: absolute;
    color: black;
    font-size: 13px;
    left: 60%;
    bottom: 60%;
    width: 25px;
    height: 25px;
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
    width: 90vw;
    max-height: 22vh;
    overflow-y: scroll;
    top: 130%;
    position: absolute;
    right: -18vw;
  }
}

@media (min-width: 353px) and (max-width: 420px) {
  .cart-container {
    position: absolute;
    top: 15px;
    left: 68%;
  }

  #cart-length {
    position: absolute;
    color: black;
    font-size: 13px;
    left: 60%;
    bottom: 60%;
    width: 25px;
    height: 25px;
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
    width: 90vw;
    max-height: 22vh;
    overflow-y: scroll;
    top: 130%;
    position: absolute;
    right: -22vw;
  }
}

@media (min-width: 300px) and (max-width: 352px) {
  .cart-container {
    position: absolute;
    top: 15px;
    left: 65%;
  }

  #cart-length {
    position: absolute;
    color: black;
    font-size: 13px;
    left: 60%;
    bottom: 60%;
    width: 25px;
    height: 25px;
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
    width: 90vw;
    max-height: 22vh;
    overflow-y: scroll;
    top: 130%;
    position: absolute;
    right: -25vw;
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
      width: 45%;

      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: left;
      h3 {
        font-size: 14px;
      }
    }
    #price {
      align-self: center;
      font-size: 15px;
      width: 20%;
    }
  }
}

@media (max-width: 299px) {
  .cart-container {
    position: absolute;
    top: 15px;
    left: 60%;
  }

  #cart-length {
    position: absolute;
    color: black;
    font-size: 13px;
    left: 60%;
    bottom: 60%;
    width: 25px;
    height: 25px;
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
    width: 90vw;
    max-height: 22vh;
    overflow-y: scroll;
    top: 130%;
    position: absolute;
    right: -27vw;
  }

  .product-cart-item {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    margin-bottom: 10px;

    img {
      height: 90%;
      border-radius: 10px;
      object-fit: fill;
    }
    div {
      height: 90%;
      width: 50%;

      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: left;

      h3 {
        font-size: 14px;
      }
    }
    #price {
      align-self: center;
      font-size: 14px;
      width: 20%;
    }
  }
}
</style>
