<template>
  <div class="card-container">
    <div class="image-container"><img alt="image1" :src="urlImage" /></div>

    <div class="details-container">
      <div id="name-and-price">
        <div id="weight-num">
          <h4>{{ productNameProp }}</h4>
          <h5>{{ weight }}kg</h5>
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
export default {
  name: "ShopCard",
  data() {
    return { quantity: 0 };
  },
  props: {
    priceProp: {
      type: Number,
      default: 30,
    },
    productNameProp: {
      default: "",
    },
    weight: {
      type: Number,
    },
    urlImage: {
      type: String,
    },
  },
  methods: {
    addQuantity: function () {
      this.quantity++;
    },
    minusQuantity: function () {
      if (this.quantity > 0) {
        this.quantity--;
      }
    },
    // showInfo: function () {
    //   if (document.getElementsByClassName("info-box")) {
    //     if (
    //       document.getElementsByClassName("info-box")[0].style.display ===
    //       "flex"
    //     ) {
    //       document.getElementsByClassName("info-box")[0].style.display = "none";
    //     } else {
    //       document.getElementsByClassName("info-box")[0].style.display = "flex";
    //     }
    //   }
    // },
  },
};

// console.log(document.getElementsByClassName("button-38"));
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
  //   overflow: hidden;
  padding: 7px;
  margin-left: 20px;
  margin-right: 20px;
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
</style>
