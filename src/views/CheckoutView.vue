<template>
  <div id="checkout-page">
    <h1>Shopping Cart</h1>
    <h4>You have {{ cart.length }} items in your cart</h4>

    <div class="checkout-item-container">
      <div class="item-component-container">
        <CheckoutItemComponent
          v-for="product in cart"
          :key="product.productObject.id"
          :product="product"
        />
      </div>
      <PaymentDetails />
    </div>

    <button
      @click="success"
      style="background-color: #c2fbd7"
      class="button-33"
      role="button"
    >
      Pay Now
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CheckoutItemComponent from "../components/CheckoutItemComponent.vue";
import PaymentDetails from "../components/PaymentDetails.vue";
export default {
  name: "CheckoutView",
  components: {
    CheckoutItemComponent,
    PaymentDetails,
  },
  computed: {
    ...mapState(["cart"]),
  },
  created() {
    if (this.$store.state.cart.length === 0) {
      this.$router.push("/shop");
    }
  },
  methods: {
    success() {
      if (confirm("Thank you for your trial")) {
        this.$store.commit("clearCart");
        this.$router.push("/");
      }
    },
  },
  mounted() {
    let shopLink = document.getElementById("shop-link");

    shopLink.classList.add("router-link-active", "router-link-exact-active");
  },
};
</script>

<style lang="scss" scoped>
#checkout-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  justify-content: center;
  align-items: center;

  > h1,
  h4 {
    align-self: flex-start;
    margin-left: 5%;
  }

  > h1 {
    font-size: 40px;
  }
  > h4 {
    margin-top: 15px;
    font-weight: 600;
  }
}

.checkout-item-container {
  width: 90%;
  margin-top: 25px;
  display: flex;
  gap: 10%;
  .item-component-container {
    width: 50%;
  }
}

.button-33 {
  border-radius: 10px;
  box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
    rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
    rgba(44, 187, 99, 0.15) 0 16px 32px;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  width: 100px;
  height: 40px;

  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-weight: 700;
  margin-top: 20px;
}
.button-33:hover {
  box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
    rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
    rgba(44, 187, 99, 0.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}
@media (min-width: 1301px) and (max-width: 1600px) {
  .checkout-item-container {
    gap: 6%;
    .item-component-container {
      width: 70%;
    }
  }
}

@media (min-width: 1190px) and (max-width: 1300px) {
  .checkout-item-container {
    width: 95%;
    gap: 5%;
    .item-component-container {
      width: 65%;
    }
  }
}
@media (min-width: 920px) and (max-width: 1189px) {
  .checkout-item-container {
    width: 95%;
    gap: 5%;
    .item-component-container {
      width: 80%;
    }
  }
}

@media (min-width: 535px) and (max-width: 919px) {
  .checkout-item-container {
    width: 90%;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10%;

    .item-component-container {
      width: 100%;
      max-height: 35vh;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      padding: 10px;
      align-items: center;
      // overflow-x: hidden;
    }
  }
}

@media (min-width: 0px) and (max-width: 534px) {
  #checkout-page {
    > h1 {
      font-size: 20px;
    }
    > h4 {
      margin-top: 10px;
      font-weight: 600;
    }
  }
  .checkout-item-container {
    width: 93%;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10%;

    .item-component-container {
      width: 100%;
      max-height: 25vh;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      padding: 10px;
      align-items: center;
      // overflow-x: hidden;
    }
  }

  .button-33 {
    border-radius: 10px;

    width: 60px;
    height: 40px;

    font-size: 12px;

    font-weight: 700;
    margin-top: 20px;
  }
}
</style>
