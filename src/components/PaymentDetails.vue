<template>
  <div class="payment-details-box">
    <div class="title-number">
      <h3>Subtotal</h3>
      <h3>{{ totalPrice }}.0 LE</h3>
    </div>

    <div class="title-number">
      <h3>Shipping</h3>
      <h3>20.0 LE</h3>
    </div>

    <div class="line" />
    <div class="title-number">
      <h3>Total (tax incl.)</h3>
      <h3>{{ totalPrice + 20 }}.0 LE</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentDetails",
  data() {
    return {
      totalPrice: 0,
    };
  },
  mounted() {
    let e = this.$store.state.cart;
    let temp = 0;
    for (let i = 0; i < e.length; i++) {
      temp = temp + e[i].productObject.price * e[i].quantity;
    }

    this.totalPrice = temp;
  },
  watch: {
    "$store.state.cart": {
      handler(e) {
        let temp = 0;
        for (let i = 0; i < e.length; i++) {
          temp = temp + e[i].productObject.price * e[i].quantity;
        }
        console.log(temp);
        this.totalPrice = temp;
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss">
.payment-details-box {
  width: 600px;
  height: 300px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.075),
    0 6px 20px 0 rgba(0, 0, 0, 0.014);
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  .title-number {
    display: flex;
    justify-content: space-between;
    font-size: 100%;
    margin-top: 8%;
  }
  .line {
    width: 90%;
    height: 3px;
    background-color: rgba(0, 0, 0, 0.075);
    align-self: center;
    border-radius: 10px;
    margin-top: 10%;
  }
}

@media (min-width: 1301px) and(max-width: 1600px) {
  .payment-details-box {
    width: 400px;
    height: 200px;

    .line {
      width: 90%;
      height: 3px;
      background-color: rgba(0, 0, 0, 0.075);
      align-self: center;
      border-radius: 10px;
      margin-top: 5%;
    }
  }
}

@media (min-width: 1190px) and (max-width: 1300px) {
  .payment-details-box {
    width: 300px;
    height: 200px;

    .title-number {
      display: flex;
      justify-content: space-between;
      font-size: 100%;
      margin-top: 10%;
    }

    .line {
      width: 90%;
      height: 3px;
      background-color: rgba(0, 0, 0, 0.075);
      align-self: center;
      border-radius: 10px;
      margin-top: 5%;
    }
  }
}

@media (min-width: 535px) and (max-width: 1189px) {
  .payment-details-box {
    width: 250px;
    height: 150px;
    margin-top: 10px;
    .title-number {
      display: flex;
      justify-content: space-between;
      font-size: 80%;
      margin-top: 8%;
    }

    .line {
      width: 90%;
      height: 3px;
      background-color: rgba(0, 0, 0, 0.075);
      align-self: center;
      border-radius: 10px;
      margin-top: 5%;
    }
  }
}

@media (min-width: 0px) and (max-width: 534px) {
  .payment-details-box {
    width: 150px;
    height: 100px;
    margin-top: 10px;
    .title-number {
      display: flex;
      justify-content: space-between;
      font-size: 70%;
      margin-top: 8%;
    }

    .line {
      width: 90%;
      height: 3px;
      background-color: rgba(0, 0, 0, 0.075);
      align-self: center;
      border-radius: 10px;
      margin-top: 5%;
    }
  }
}
</style>
