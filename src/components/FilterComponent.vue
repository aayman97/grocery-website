<template>
  <div id="filter-component" @click="toggle">
    <h3>{{ defaultString }}</h3>
    <fa icon="angle-down" style="margin-top: 2px" />

    <div v-if="open" class="filter-menu active">
      <h4 @click="changeDefaultToAll">All</h4>
      <h4
        v-for="category in categories"
        :key="category.id"
        @click="changeDefault(category.name)"
      >
        {{ category.name }}
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterComponent",
  props: {
    categories: {
      default: [],
    },
  },
  data() {
    return {
      defaultString: "filter",
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    changeDefault(e) {
      this.defaultString = e;
      this.$emit("filterItem", this.defaultString);
    },
    changeDefaultToAll() {
      this.defaultString = "All";
      this.$emit("filterItem", this.defaultString);
    },
  },
};
</script>

<style lang="scss">
#filter-component {
  display: flex;
  position: relative;
  align-items: center;
  gap: 15px;
  width: 120px;
  height: 35px;
  justify-content: space-between;
  cursor: pointer;
  border-bottom-style: solid;
  border-image: linear-gradient(white, rgba(0, 0, 0, 0.1)) 1;
}

.filter-menu {
  width: 130px;
  //   height: 100px;
  background-color: #d0fdb4;
  position: absolute;
  top: 35px;
  z-index: 10;
  display: flex;
  //   display: none;
  //   visibility: hidden;
  //   opacity: 0;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  > h4 {
    padding: 10px;
    cursor: pointer;
    width: 130px;
    text-align: left;
  }
}
</style>
