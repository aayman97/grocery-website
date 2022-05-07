<template>
  <div class="card-container">
    <div class="image-container"><img alt="image1" :src="urlImage" /></div>

    <div class="details-container">
      <div id="name-and-price">
        <div id="weight-num">
          <h4>{{ productNameProp }}</h4>
          <h5>{{ weight }}</h5>
        </div>
        <h4>{{ priceProp.toFixed(1) }}LE</h4>
      </div>
    </div>

    <div class="info-and-count-container">
      <div class="minus-quantity-plus">
        <button @click="minusQuantity" class="button-33" role="button">
          <fa icon="minus" />
        </button>

        <h3>
          {{ quantity }}
        </h3>
        <button
          style="background-color: #c2fbd7"
          class="button-33"
          role="button"
          @click="addQuantity"
        >
          <fa icon="plus" />
        </button>
      </div>

      <button class="button-38" role="button">
        <fa icon="info" />
      </button>

      <div class="info-box">
        <h4>Extra info</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ShopCard",
  data() {
    return { quantity: 0 };
  },
  props: {
    product: {
      type: Object,
    },
    priceProp: {
      type: Number,
      default: 30,
    },
    productNameProp: {
      default: "",
    },
    weight: {
      type: String,
    },
    urlImage: {
      type: String,
    },
  },
  computed: {
    ...mapState(["cart"]),
  },
  created() {
    for (let i = 0; i < this.$store.state.cart.length; i++) {
      if (this.$store.state.cart[i].productObject.id === this.product.id) {
        this.quantity = this.$store.state.cart[i].quantity;
        break;
      }
    }
  },
  methods: {
    addQuantity: function () {
      this.quantity++;
      this.$store.commit("addToList", {
        product: {
          productObject: this.product,
          quantity: this.quantity,
        },
      });
    },
    minusQuantity: function () {
      if (this.quantity > 0) {
        this.quantity--;
        this.$store.commit("removeFromList", {
          product: {
            productObject: this.product,
            quantity: this.quantity,
          },
        });
      }
    },
  },
  watch: {
    "$store.state.cart": function (e) {
      if (e.length === 0) {
        this.quantity = 0;
      }
    },
  },
};
</script>

<style lang="scss">
.info-box {
  position: absolute;
  width: 50%;
  height: 30%;
  background-color: white;
  left: 70%;
  bottom: 18%;
  border-radius: 20px;
  display: none;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 1s linear;
}
.card-container {
  width: 230px;
  height: 260px;
  background-color: #d0fdb4;
  border-radius: 10px;
  margin: 20px;
  //   overflow: hidden;
  padding: 7px;
  // margin-left: 20px;
  // margin-right: 30px;
  box-shadow: 0 8px 8px 4px #90b37b1e;
  position: relative;

  .image-container {
    width: 100%;
    height: 57%;

    > img {
      width: 100%;
      height: 100%;
      object-fit: fill;
      border-radius: 10px;
    }
  }
  .details-container {
    width: 100%;
    height: 22%;

    #name-and-price {
      display: flex;
      justify-content: space-between;
      padding: 7px;

      #weight-num {
        text-align: left;
        color: rgb(0, 0, 0);
        font-family: "Source Sans Pro", sans-serif;

        h5 {
          color: rgba(0, 0, 0, 0.336);
        }
      }
    }
  }
  .info-and-count-container {
    width: 100%;
    height: 22%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .minus-quantity-plus {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 50%;
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

    .button-38:hover {
      background-color: rgb(249, 250, 251);
    }

    .button-38:hover + .info-box {
      display: flex;
      opacity: 1;
    }
  }
}

@media (min-width: 1527px) and (max-width: 1578px) {
  .info-box {
    position: absolute;
    width: 50%;
    height: 30%;
    background-color: white;
    left: 70%;
    bottom: 18%;
    border-radius: 20px;
    display: none;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 1s linear;
  }
  .card-container {
    width: 220px;
    height: 240px;
    // .image-container {
    //   width: 100%;
    //   height: 57%;

    //   > img {
    //     width: 100%;
    //     height: 100%;
    //     object-fit: fill;
    //     border-radius: 10px;
    //   }
    // }
    .details-container {
      width: 100%;
      height: 22%;

      #name-and-price {
        display: flex;
        justify-content: space-between;
        padding: 7px;

        #weight-num {
          text-align: left;
          color: rgb(0, 0, 0);
          font-family: "Source Sans Pro", sans-serif;

          h5 {
            color: rgba(0, 0, 0, 0.336);
          }
        }
      }
    }
    .info-and-count-container {
      width: 100%;
      height: 22%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .minus-quantity-plus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;
      }
      .button-33 {
        width: 30px;
        height: 30px;

        font-size: 12px;
      }

      .button-38 {
        width: 25px;
        height: 25px;
      }

      .button-38:hover {
        background-color: rgb(249, 250, 251);
      }

      .button-38:hover + .info-box {
        display: flex;
        opacity: 1;
      }
    }
  }
}

@media (min-width: 1500px) and (max-width: 1526px) {
  .info-box {
    position: absolute;
    width: 50%;
    height: 30%;
    background-color: white;
    left: 70%;
    bottom: 18%;
    border-radius: 20px;
    display: none;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 1s linear;
  }
  .card-container {
    width: 215px;
    height: 240px;
    margin: 20px;
    // .image-container {
    //   width: 100%;
    //   height: 57%;

    //   > img {
    //     width: 100%;
    //     height: 100%;
    //     object-fit: fill;
    //     border-radius: 10px;
    //   }
    // }
    .details-container {
      width: 100%;
      height: 22%;

      #name-and-price {
        display: flex;
        justify-content: space-between;
        padding: 7px;

        #weight-num {
          text-align: left;
          color: rgb(0, 0, 0);
          font-family: "Source Sans Pro", sans-serif;

          h5 {
            color: rgba(0, 0, 0, 0.336);
          }
        }
      }
    }
    .info-and-count-container {
      width: 100%;
      height: 22%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .minus-quantity-plus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;
      }
      .button-33 {
        width: 30px;
        height: 30px;

        font-size: 12px;
      }

      .button-38 {
        width: 25px;
        height: 25px;
      }

      .button-38:hover {
        background-color: rgb(249, 250, 251);
      }

      .button-38:hover + .info-box {
        display: flex;
        opacity: 1;
      }
    }
  }
}

@media (min-width: 1400px) and (max-width: 1499px) {
  .info-box {
    position: absolute;
    width: 50%;
    height: 30%;
    background-color: white;
    left: 70%;
    bottom: 18%;
    border-radius: 20px;
    display: none;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 1s linear;
  }
  .card-container {
    width: 14vw;
    height: 240px;
    margin: 20px;
    // .image-container {
    //   width: 100%;
    //   height: 57%;

    //   > img {
    //     width: 100%;
    //     height: 100%;
    //     object-fit: fill;
    //     border-radius: 10px;
    //   }
    // }
    .details-container {
      width: 100%;
      height: 22%;

      #name-and-price {
        display: flex;
        justify-content: space-between;
        padding: 7px;

        #weight-num {
          text-align: left;
          color: rgb(0, 0, 0);
          font-family: "Source Sans Pro", sans-serif;

          h5 {
            color: rgba(0, 0, 0, 0.336);
          }
        }
      }
    }
    .info-and-count-container {
      width: 100%;
      height: 22%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .minus-quantity-plus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;
      }
      .button-33 {
        width: 30px;
        height: 30px;

        font-size: 12px;
      }

      .button-38 {
        width: 25px;
        height: 25px;
      }

      .button-38:hover {
        background-color: rgb(249, 250, 251);
      }

      .button-38:hover + .info-box {
        display: flex;
        opacity: 1;
      }
    }
  }
}

@media (min-width: 1316px) and (max-width: 1399px) {
  .info-box {
    width: 40%;
    height: 25%;

    font-size: 12px;
  }
  .card-container {
    width: 190px;
    height: 220px;
    margin: 15px;

    .details-container {
      #name-and-price {
        font-size: 13px;
        #weight-num {
          font-size: 13px;
        }
      }
    }
    .info-and-count-container {
      width: 100%;
      height: 22%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .minus-quantity-plus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;

        > h3 {
          font-size: 16px;
        }
      }
      .button-33 {
        width: 25px;
        height: 25px;

        font-size: 12px;
      }

      .button-38 {
        width: 20px;
        height: 20px;
        font-size: 10px;
        margin-top: 10px;
      }
    }
  }
}

@media (min-width: 1264px) and (max-width: 1315px) {
  .info-box {
    width: 40%;
    height: 25%;

    font-size: 12px;
  }
  .card-container {
    width: 180px;
    height: 220px;
    margin: 15px;

    .details-container {
      #name-and-price {
        font-size: 13px;
        #weight-num {
          font-size: 13px;
        }
      }
    }
    .info-and-count-container {
      width: 100%;
      height: 22%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .minus-quantity-plus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;

        > h3 {
          font-size: 16px;
        }
      }
      .button-33 {
        width: 25px;
        height: 25px;

        font-size: 12px;
      }

      .button-38 {
        width: 20px;
        height: 20px;
        font-size: 10px;
        margin-top: 10px;
      }
    }
  }
}

@media (min-width: 1211px) and (max-width: 1263px) {
  .info-box {
    width: 40%;
    height: 25%;

    font-size: 12px;
  }
  .card-container {
    width: 170px;
    height: 220px;
    margin: 15px;

    .details-container {
      #name-and-price {
        font-size: 13px;
        #weight-num {
          font-size: 13px;
        }
      }
    }
    .info-and-count-container {
      width: 100%;
      height: 22%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .minus-quantity-plus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;

        > h3 {
          font-size: 16px;
        }
      }
      .button-33 {
        width: 25px;
        height: 25px;

        font-size: 12px;
      }

      .button-38 {
        width: 20px;
        height: 20px;
        font-size: 10px;
        margin-top: 10px;
      }
    }
  }
}

@media (min-width: 1158px) and (max-width: 1210px) {
  .info-box {
    width: 40%;
    height: 25%;

    font-size: 12px;
  }
  .card-container {
    width: 170px;
    height: 210px;
    margin: 10px;

    .details-container {
      #name-and-price {
        font-size: 13px;
        #weight-num {
          font-size: 13px;
        }
      }
    }
    .info-and-count-container {
      width: 100%;
      height: 22%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .minus-quantity-plus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;

        > h3 {
          font-size: 16px;
        }
      }
      .button-33 {
        width: 25px;
        height: 25px;

        font-size: 12px;
      }

      .button-38 {
        width: 20px;
        height: 20px;
        font-size: 10px;
        margin-top: 10px;
      }
    }
  }
}

@media (min-width: 1106px) and (max-width: 1157px) {
  .info-box {
    width: 40%;
    height: 25%;

    font-size: 12px;
  }
  .card-container {
    width: 170px;
    height: 210px;
    margin: 5px;

    .details-container {
      #name-and-price {
        font-size: 13px;
        #weight-num {
          font-size: 13px;
        }
      }
    }
    .info-and-count-container {
      width: 100%;
      height: 22%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .minus-quantity-plus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;

        > h3 {
          font-size: 16px;
        }
      }
      .button-33 {
        width: 25px;
        height: 25px;

        font-size: 12px;
      }

      .button-38 {
        width: 20px;
        height: 20px;
        font-size: 10px;
        margin-top: 10px;
      }
    }
  }
}

@media (min-width: 1053px) and (max-width: 1105px) {
  .info-box {
    width: 40%;
    height: 25%;

    font-size: 12px;
  }
  .card-container {
    width: 160px;
    height: 210px;
    margin: 5px;

    .details-container {
      #name-and-price {
        font-size: 13px;
        #weight-num {
          font-size: 13px;
        }
      }
    }
    .info-and-count-container {
      width: 100%;
      height: 22%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .minus-quantity-plus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;

        > h3 {
          font-size: 16px;
        }
      }
      .button-33 {
        width: 25px;
        height: 25px;
        border-radius: 5px;
        font-size: 12px;
      }

      .button-38 {
        width: 20px;
        height: 20px;
        font-size: 10px;
        margin-top: 10px;
      }
    }
  }
}

@media (min-width: 990px) and (max-width: 1052px) {
  .info-box {
    width: 40%;
    height: 25%;

    font-size: 12px;
  }
  .card-container {
    width: 150px;
    height: 210px;
    margin: 4px;

    .details-container {
      #name-and-price {
        font-size: 12px;
        #weight-num {
          font-size: 12px;
        }
      }
    }
    .info-and-count-container {
      width: 100%;
      height: 22%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .minus-quantity-plus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;

        > h3 {
          font-size: 14px;
        }
      }
      .button-33 {
        width: 22px;
        height: 22px;
        border-radius: 5px;
        font-size: 11px;
      }

      .button-38 {
        width: 18px;
        height: 18px;
        font-size: 10px;
        margin-top: 7px;
      }
    }
  }
}

@media (min-width: 872px) and (max-width: 989px) {
  .info-box {
    width: 40%;
    height: 25%;

    font-size: 12px;
  }
  .card-container {
    width: 170px;
    height: 210px;
    margin: 4px;

    .details-container {
      #name-and-price {
        font-size: 12px;
        #weight-num {
          font-size: 12px;
        }
      }
    }
    .info-and-count-container {
      width: 100%;
      height: 22%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .minus-quantity-plus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;

        > h3 {
          font-size: 14px;
        }
      }
      .button-33 {
        width: 22px;
        height: 22px;
        border-radius: 5px;
        font-size: 11px;
      }

      .button-38 {
        width: 18px;
        height: 18px;
        font-size: 10px;
        margin-top: 7px;
      }
    }
  }
}

@media (min-width: 822px) and (max-width: 871px) {
  .info-box {
    width: 40%;
    height: 25%;

    font-size: 12px;
  }
  .card-container {
    width: 160px;
    height: 200px;
    margin: 3px;

    .details-container {
      #name-and-price {
        font-size: 12px;
        #weight-num {
          font-size: 12px;
        }
      }
    }
    .info-and-count-container {
      width: 100%;
      height: 22%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .minus-quantity-plus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;

        > h3 {
          font-size: 14px;
        }
      }
      .button-33 {
        width: 22px;
        height: 22px;
        border-radius: 5px;
        font-size: 11px;
      }

      .button-38 {
        width: 18px;
        height: 18px;
        font-size: 10px;
        margin-top: 7px;
      }
    }
  }
}

@media (min-width: 779px) and (max-width: 821px) {
  .info-box {
    width: 40%;
    height: 25%;

    font-size: 12px;
  }
  .card-container {
    width: 150px;
    height: 200px;
    margin: 3px;

    .details-container {
      #name-and-price {
        font-size: 12px;
        #weight-num {
          font-size: 12px;
        }
      }
    }
    .info-and-count-container {
      width: 100%;
      height: 22%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .minus-quantity-plus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;

        > h3 {
          font-size: 14px;
        }
      }
      .button-33 {
        width: 22px;
        height: 22px;
        border-radius: 5px;
        font-size: 11px;
      }

      .button-38 {
        width: 18px;
        height: 18px;
        font-size: 10px;
        margin-top: 7px;
      }
    }
  }
}

@media (min-width: 720px) and (max-width: 778px) {
  .info-box {
    width: 40%;
    height: 25%;
    border-radius: 10px;
    font-size: 12px;
  }
  .card-container {
    width: 140px;
    height: 190px;
    margin: 1px;

    .details-container {
      #name-and-price {
        font-size: 12px;
        #weight-num {
          font-size: 12px;
        }
      }
    }
    .info-and-count-container {
      width: 100%;
      height: 22%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .minus-quantity-plus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;

        > h3 {
          font-size: 13px;
        }
      }
      .button-33 {
        width: 22px;
        height: 22px;
        border-radius: 5px;
        font-size: 11px;
      }

      .button-38 {
        width: 18px;
        height: 18px;
        font-size: 10px;
        margin-top: 7px;
      }
    }
  }
}

@media (min-width: 687px) and (max-width: 719px) {
  .info-box {
    width: 40%;
    height: 25%;
    border-radius: 10px;
    font-size: 12px;
  }
  .card-container {
    width: 180px;
    height: 220px;
    margin: 5px;

    .details-container {
      #name-and-price {
        font-size: 14px;
        #weight-num {
          font-size: 14px;
        }
      }
    }
    .info-and-count-container {
      width: 100%;
      height: 22%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .minus-quantity-plus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;

        > h3 {
          font-size: 16px;
        }
      }
      .button-33 {
        width: 25px;
        height: 25px;
        border-radius: 5px;
        font-size: 11px;
      }

      .button-38 {
        width: 20px;
        height: 20px;
        font-size: 10px;
        margin-top: 5px;
      }
    }
  }
}

@media (min-width: 655px) and (max-width: 686px) {
  .info-box {
    width: 40%;
    height: 25%;
    border-radius: 10px;
    font-size: 12px;
  }
  .card-container {
    width: 160px;
    height: 220px;
    margin: 10px;

    .details-container {
      #name-and-price {
        font-size: 14px;
        #weight-num {
          font-size: 14px;
        }
      }
    }
    .info-and-count-container {
      width: 100%;
      height: 22%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .minus-quantity-plus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;

        > h3 {
          font-size: 16px;
        }
      }
      .button-33 {
        width: 25px;
        height: 25px;
        border-radius: 5px;
        font-size: 11px;
      }

      .button-38 {
        width: 20px;
        height: 20px;
        font-size: 10px;
        margin-top: 5px;
      }
    }
  }
}

@media (min-width: 608px) and (max-width: 654px) {
  .info-box {
    width: 40%;
    height: 25%;
    border-radius: 10px;
    font-size: 12px;
  }
  .card-container {
    width: 155px;
    height: 220px;
    margin: 5px;

    .details-container {
      #name-and-price {
        font-size: 14px;
        #weight-num {
          font-size: 14px;
        }
      }
    }
    .info-and-count-container {
      width: 100%;
      height: 22%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .minus-quantity-plus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;

        > h3 {
          font-size: 16px;
        }
      }
      .button-33 {
        width: 25px;
        height: 25px;
        border-radius: 5px;
        font-size: 11px;
      }

      .button-38 {
        width: 20px;
        height: 20px;
        font-size: 10px;
        margin-top: 5px;
      }
    }
  }
}

@media (min-width: 589px) and (max-width: 607px) {
  .info-box {
    width: 40%;
    height: 25%;
    border-radius: 10px;
    font-size: 12px;
  }
  .card-container {
    width: 155px;
    height: 220px;
    margin: 2px;

    .details-container {
      #name-and-price {
        font-size: 13px;
        #weight-num {
          font-size: 13px;
        }
      }
    }
    .info-and-count-container {
      width: 100%;
      height: 22%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .minus-quantity-plus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;

        > h3 {
          font-size: 14px;
        }
      }
      .button-33 {
        width: 22px;
        height: 22px;
        border-radius: 5px;
        font-size: 10px;
      }

      .button-38 {
        width: 18px;
        height: 18px;
        font-size: 10px;
        margin-top: 5px;
      }
    }
  }
}

@media (min-width: 567px) and (max-width: 588px) {
  .info-box {
    width: 40%;
    height: 25%;
    border-radius: 10px;
    font-size: 12px;
  }
  .card-container {
    width: 150px;
    height: 210px;
    margin: 1px;

    .details-container {
      #name-and-price {
        font-size: 13px;
        #weight-num {
          font-size: 13px;
        }
      }
    }
    .info-and-count-container {
      width: 100%;
      height: 22%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .minus-quantity-plus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;

        > h3 {
          font-size: 14px;
        }
      }
      .button-33 {
        width: 22px;
        height: 22px;
        border-radius: 5px;
        font-size: 10px;
      }

      .button-38 {
        width: 18px;
        height: 18px;
        font-size: 10px;
        margin-top: 5px;
      }
    }
  }
}

@media (min-width: 516px) and (max-width: 566px) {
  .info-box {
    width: 40%;
    height: 25%;
    border-radius: 10px;
    font-size: 12px;
  }
  .card-container {
    width: 130px;
    height: 180px;
    margin: 3px;

    .details-container {
      #name-and-price {
        font-size: 12px;
        #weight-num {
          font-size: 12px;
        }
      }
    }
    .info-and-count-container {
      width: 100%;
      height: 22%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .minus-quantity-plus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;

        > h3 {
          font-size: 13px;
        }
      }
      .button-33 {
        width: 18px;
        height: 18px;
        border-radius: 3px;
        font-size: 8px;
      }

      .button-38 {
        width: 16px;
        height: 16px;
        font-size: 8px;
        margin-top: 5px;
      }
    }
  }
}

@media (min-width: 369px) and (max-width: 515px) {
  .info-box {
    width: 40%;
    height: 25%;
    border-radius: 10px;
    font-size: 12px;
  }
  .card-container {
    width: 35vw;
    height: 45vw;
    margin: 3vw;

    .details-container {
      #name-and-price {
        font-size: 3vw;
        #weight-num {
          font-size: 3vw;
        }
      }
    }
    .info-and-count-container {
      width: 100%;
      height: 22%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .minus-quantity-plus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;

        > h3 {
          font-size: 3vw;
        }
      }
      .button-33 {
        width: 4.5vw;
        height: 4.5vw;
        border-radius: 5px;
        font-size: 2.2vw;
      }

      .button-38 {
        width: 4vw;
        height: 4vw;
        font-size: 2vw;
        margin-top: 1vw;
      }
    }
  }
}

@media (min-width: 350px) and (max-width: 368px) {
  .info-box {
    width: 40%;
    height: 25%;
    border-radius: 10px;
    font-size: 12px;
  }
  .card-container {
    width: 35vw;
    height: 45vw;
    margin: 2vw;

    .details-container {
      #name-and-price {
        font-size: 3vw;
        #weight-num {
          font-size: 3vw;
        }
      }
    }
    .info-and-count-container {
      width: 100%;
      height: 22%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .minus-quantity-plus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;

        > h3 {
          font-size: 3vw;
        }
      }
      .button-33 {
        width: 4.5vw;
        height: 4.5vw;
        border-radius: 5px;
        font-size: 2.2vw;
      }

      .button-38 {
        width: 4vw;
        height: 4vw;
        font-size: 2vw;
        margin-top: 1vw;
      }
    }
  }
}

@media (min-width: 0px) and (max-width: 349px) {
  .info-box {
    width: 40%;
    height: 25%;
    border-radius: 10px;
    font-size: 12px;
  }
  .card-container {
    width: 100vw;
    height: 100vw;
    margin: 0vw;

    .details-container {
      #name-and-price {
        font-size: 6vw;
        #weight-num {
          font-size: 6vw;
        }
      }
    }
    .info-and-count-container {
      width: 100%;
      height: 22%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .minus-quantity-plus {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;

        > h3 {
          font-size: 8vw;
        }
      }
      .button-33 {
        width: 12vw;
        height: 12vw;
        border-radius: 5px;
        font-size: 5vw;
      }

      .button-38 {
        width: 10vw;
        height: 10vw;
        font-size: 4vw;
        margin-top: 2vw;
      }
    }
  }
}
</style>
