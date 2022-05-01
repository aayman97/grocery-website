<template>
  <div class="page-container">
    <div>
      <div id="left-side-container">
        <div>Fresh Grocery Delievery</div>
        <div>Delicious and <span>fresh</span> produce from farmers</div>
        <div>
          Buy Fresh, Locally Grown Fruits and Vegetables only on app. Stay home
          and get your daily need's
        </div>
        <router-link to="/shop">Shop now</router-link>
      </div>
    </div>

    <div>
      <div id="gradient-circle"></div>
      <img src="../assets/vm.png" alt="vectorImage" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style lang="scss">
@import "../scss/home-view.scss";
</style>
