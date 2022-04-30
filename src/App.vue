<template>
  <nav>
    <img src="./assets/logo_2.png" />
    <div class="routers-link-conatiner">
      <router-link to="/">Home</router-link>
      <router-link to="/shop">Shop</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>

      <button>Sign Up</button>
    </div>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import "scss/nav-bar.scss";
</style>
