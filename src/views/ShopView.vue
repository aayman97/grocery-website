<template>
  <div class="shop-view">
    <ShopCard
      :priceProp="20"
      productNameProp="Tomato"
      :weight="1.5"
      urlImage="https://images.unsplash.com/photo-1561136594-7f68413baa99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    />
  </div>
</template>

<script>
import ShopCard from "../components/ShopCard.vue";
export default {
  name: "ShopView",
  components: {
    ShopCard,
  },
};
</script>

<style lang="scss">
@import "../scss/shop-view.scss";
</style>
