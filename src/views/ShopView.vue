<template>
  <div class="shop-view">
    <div class="filter-text-component-cart">
      <h1>{{ defaultFilterItem }} Products</h1>
      <div style="display: flex; gap: 25px">
        <FilterComponent @filterItem="filterLabel" :categories="categories" />
        <SearchComponent @searchValueChild="searchValueParent" />
        <CartComponent />
      </div>
    </div>
    <div v-if="defaultFilterItem === 'All'" class="shop-card-container">
      <ShopCard
        v-for="product in listAll.filter((product) => {
          return product.name.toLowerCase().match(searchValue.toLowerCase());
        })"
        :product="product"
        :key="product.id"
        :priceProp="parseInt(product.price)"
        :productNameProp="product.name"
        :weight="product.weight"
        :urlImage="product.product_img"
      />
    </div>

    <div v-else class="shop-card-container">
      <ShopCard
        v-for="product in list.filter((product) => {
          return product.name.toLowerCase().match(searchValue.toLowerCase());
        })"
        :product="product"
        :key="product.id"
        :priceProp="parseInt(product.price)"
        :productNameProp="product.name"
        :weight="product.weight"
        :urlImage="product.product_img"
      />
    </div>
  </div>
</template>

<script>
import ShopCard from "../components/ShopCard.vue";
import FilterComponent from "../components/FilterComponent.vue";
import SearchComponent from "../components/SearchComponent.vue";
import CartComponent from "../components/CartComponent.vue";
import axios from "axios";
export default {
  name: "ShopView",
  components: {
    ShopCard,
    FilterComponent,
    SearchComponent,
    CartComponent,
  },
  data() {
    return {
      list: [],
      categories: [],
      defaultFilterItem: "All",
      listAll: [],
      searchValue: "",
    };
  },

  methods: {
    filterLabel(e) {
      this.defaultFilterItem = e;
    },
    searchValueParent(e) {
      this.searchValue = e;
    },
  },
  watch: {
    defaultFilterItem(e) {
      if (e !== "All") {
        this.list = this.categories.filter((category) => {
          return category.name === e;
        })[0].products;
      } else {
        this.list = this.listAll;
      }
    },
    searchValue(e) {
      // console.log(e);
      // this.list = this.list.filter((product) => {
      //   return product.name.toLowerCase().match(e.toLowerCase());
      // });

      // this.listAll = this.listAll.filter((product) => {
      //   return product.name.toLowerCase().match(e.toLowerCase());
      // });
      this.searchValue = e;
    },
  },
  mounted() {
    axios
      .get("https://626ec4e9c94c985b1e39b661.mockapi.io/task/groceryShop")
      .then((res) => {
        this.categories = res.data;

        let temp = [];

        for (let i = 0; i < res.data.length; i++) {
          // console.log(res.data[i].products);
          temp = temp.concat(res.data[i].products);
        }
        // console.log(res.data);
        this.listAll = temp;
        this.list = temp;
      });
  },
};
</script>

<style lang="scss">
@import "../scss/shop-view.scss";
</style>
