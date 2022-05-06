<template>
  <nav>
    <img src="./assets/logo_2.png" />
    <div
      :style="open ? 'left:0%' : 'left : 100%'"
      class="routers-link-conatiner"
    >
      <router-link @click="closeDrawer" to="/">Home</router-link>
      <router-link @click="closeDrawer" to="/shop">Shop</router-link>
      <router-link @click="closeDrawer" to="/about">About</router-link>
      <router-link @click="closeDrawer" to="/contact">Contact</router-link>

      <button>Sign Up</button>
    </div>
    <div @click="toggleDrawer" class="drawer">
      <fa :icon="open ? 'xmark' : 'bars'" />
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.open = !this.open;
      console.log(this.open);
    },
    closeDrawer() {
      this.open = false;
    },
  },
};
</script>

<style lang="scss">
@import "scss/nav-bar.scss";
</style>
