<template>
  <div class="item-container">
    <img alt="item-img" :src="product.productObject.product_img" />

    <div class="details-container">
      <h2>{{ product.productObject.name }}</h2>
      <h2>{{ product.productObject.weight }}</h2>
    </div>

    <div class="minus-quantity-plus">
      <button @click="minusQuantityCheckout" class="button-33" role="button">
        <fa icon="minus" />
      </button>

      <h3>
        <!-- {{ product.quantity }} -->
        {{ quantity }}
      </h3>
      <button
        style="background-color: #c2fbd7"
        class="button-33"
        role="button"
        @click="addQuantityCheckOut"
      >
        <fa icon="plus" />
      </button>
    </div>

    <h3 id="price">
      {{ (product.quantity * product.productObject.price).toFixed(1) }} LE
    </h3>

    <fa @click="clearCart" id="trash" icon="trash-can" />
  </div>
</template>

<script>
export default {
  name: "CheckoutItemComponent",
  props: {
    product: {
      type: Object,
    },
  },
  data() {
    return { quantity: 0 };
  },

  created() {
    this.quantity = this.product.quantity;
    for (let i = 0; i < this.$store.state.cart.length; i++) {
      if (this.$store.state.cart[i].productObject.id === this.product.id) {
        this.quantity = this.$store.state.cart[i].quantity;
        break;
      }
    }
  },

  methods: {
    addQuantityCheckOut: function () {
      this.quantity++;
      this.$store.commit("addToListCheckout", {
        product: {
          productObject: this.product,
          quantity: this.quantity,
        },
      });
    },
    minusQuantityCheckout: function () {
      if (this.quantity > 0) {
        this.quantity--;
        this.$store.commit("removeFromListCheckout", {
          product: {
            productObject: this.product,
            quantity: this.quantity,
          },
        });
      }
    },

    clearCart: function () {
      this.$store.commit("clearProductFromCheckout", {
        product: {
          productObject: this.product,
          quantity: this.quantity,
        },
      });
    },
  },
};
</script>

<style lang="scss">
.item-container {
  width: 100%;
  height: 110px;
  background-color: #d0fdb4;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  //   padding: 10px;
  box-shadow: 0 0px 2px 0 rgba(0, 0, 0, 0.075),
    0 6px 20px 0 rgba(0, 0, 0, 0.014);

  > img {
    width: 90px;
    height: 90px;
    border-radius: 20px;
    align-self: center;
    padding: 10px;
  }

  .details-container {
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    gap: 10%;
    align-items: flex-start;
    margin-left: 30px;

    > h2:nth-child(1) {
      font-weight: 800;
      font-size: 18px;
      color: rgba(0, 0, 0, 0.815);
    }

    > h2:nth-child(2) {
      font-weight: 600;
      font-size: 15px;
      color: rgba(0, 0, 0, 0.521);
    }
  }

  .minus-quantity-plus {
    display: flex;
    width: 17%;
    align-items: center;
    justify-content: space-between;

    .button-33 {
      border-radius: 10px;
      box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
        rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
        rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
        rgba(44, 187, 99, 0.15) 0 16px 32px;
      color: green;
      cursor: pointer;
      display: inline-block;
      font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto,
        sans-serif;
      width: 40px;
      height: 40px;

      text-align: center;
      text-decoration: none;
      transition: all 250ms;
      border: 0;
      font-size: 16px;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }
    .button-33:hover {
      box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
        rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
        rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
        rgba(44, 187, 99, 0.25) 0 16px 32px;
      transform: scale(1.05) rotate(-1deg);
    }

    .button-38 {
      background-color: #ffffff;
      border: 0;
      border-radius: 100%;
      box-sizing: border-box;
      color: #111827;

      width: 25px;
      height: 25px;

      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
      cursor: pointer;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }
  }
  #price {
    width: 25%;
    font-size: 25px;
    justify-self: center;
    align-self: center;
  }
  #trash {
    color: black;
    font-size: 25px;
    cursor: pointer;
    align-self: center;
  }
}

@media (min-width: 730px) and (max-width: 1069px) {
  .item-container {
    .details-container {
      width: 25%;
    }

    .minus-quantity-plus {
      width: 22%;
    }
    #price {
      width: 26%;
      font-size: 20px;
      justify-self: center;
      align-self: center;
    }
    #trash {
      color: black;
      font-size: 20px;
      cursor: pointer;
      align-self: center;
    }
  }
}

@media (min-width: 650px) and (max-width: 729px) {
  .item-container {
    .details-container {
      width: 20%;
    }

    .minus-quantity-plus {
      width: 17%;

      .button-33 {
        border-radius: 10px;

        width: 30px;
        height: 30px;

        font-size: 12px;
      }
    }
    #price {
      width: 26%;
      font-size: 19px;
      justify-self: center;
      align-self: center;
    }
    #trash {
      color: black;
      font-size: 18px;
      cursor: pointer;
      align-self: center;
    }
  }
}

@media (min-width: 530px) and (max-width: 649px) {
  .item-container {
    height: 95px;

    > img {
      width: 80px;
      height: 80px;
      border-radius: 20px;
      align-self: center;
      padding: 10px;
    }

    .details-container {
      width: 19%;
      margin-left: 6px;
      justify-content: space-evenly;
      gap: 0%;
      height: 60%;
      align-self: center;

      > h2 {
        font-size: 8px;
      }
    }

    .minus-quantity-plus {
      width: 19%;

      .button-33 {
        border-radius: 5px;

        width: 25px;
        height: 25px;

        font-size: 12px;
      }
    }
    #price {
      width: 25%;
      font-size: 17px;
      justify-self: center;
      align-self: center;
    }
    #trash {
      color: black;
      font-size: 18px;
      cursor: pointer;
      align-self: center;
    }
  }
}

@media (min-width: 281px) and (max-width: 529px) {
  .item-container {
    height: 90px;
    border-radius: 10px;
    > img {
      width: 75px;
      height: 75px;
      border-radius: 15px;
      align-self: center;
      padding: 8px;
    }

    .details-container {
      width: 22%;
      margin-left: 6px;
      justify-content: space-evenly;
      gap: 0%;
      height: 60%;
      align-self: center;

      > h2:nth-child(1) {
        font-weight: 800;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.815);
      }

      > h2:nth-child(2) {
        font-weight: 600;
        font-size: 11px;
        color: rgba(0, 0, 0, 0.521);
      }
    }

    .minus-quantity-plus {
      width: 18%;
      display: flex;
      > h3 {
        font-size: 12px;
      }
      .button-33 {
        border-radius: 5px;

        width: 20px;
        height: 20px;

        font-size: 11px;
      }
    }
    #price {
      width: 22%;
      font-size: 12px;
      justify-self: center;
      align-self: center;
    }
    #trash {
      color: black;
      font-size: 15px;
      cursor: pointer;
      align-self: center;
    }
  }
}

@media (min-width: 0px) and (max-width: 280px) {
  .item-container {
    height: 90px;
    border-radius: 10px;
    > img {
      width: 70px;
      height: 70px;
      border-radius: 15px;
      align-self: center;
      padding: 8px;
    }

    .details-container {
      width: 20%;
      margin-left: 2px;
      justify-content: space-evenly;
      gap: 0%;
      height: 60%;
      align-self: center;

      > h2:nth-child(1) {
        font-weight: 800;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.815);
      }

      > h2:nth-child(2) {
        font-weight: 600;
        font-size: 9px;
        color: rgba(0, 0, 0, 0.521);
      }
    }

    .minus-quantity-plus {
      width: 18%;
      display: flex;
      > h3 {
        font-size: 12px;
      }
      .button-33 {
        border-radius: 3px;

        width: 15px;
        height: 15px;

        font-size: 11px;
      }
    }
    #price {
      width: 19%;
      font-size: 9px;
      justify-self: center;
      align-self: center;
    }
    #trash {
      color: black;
      font-size: 15px;
      cursor: pointer;
      align-self: center;
    }
  }
}
</style>
