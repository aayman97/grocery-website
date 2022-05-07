<template>
  <body>
    <div class="search-container">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        class="search-input"
        @input="(e) => printInput(e)"
      />
      <a href="#" class="search-btn">
        <fa style="color: black" icon="search" />
      </a>
    </div>
  </body>
</template>

<script>
export default {
  name: "SearchComponent",
  methods: {
    printInput(e) {
      this.$emit("searchValueChild", e.target.value);
      //   console.log(e.target.value);
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-container {
  background: transparent;
  height: 20px;
  border-radius: 30px;
  padding: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.8s;

  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
    -4px -4px 6px 0 rgba(116, 125, 136, 0.2);
  /* inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2); */
}

.search-container:hover > .search-input {
  width: 150px;
}

.search-container > .search-input:focus {
  width: 150px;
}
.search-container .search-input {
  background: transparent;
  border: none;
  outline: none;
  width: 0px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  /* font-weight: 500;
  font-size: 16px; */
  transition: 0.8s;
}

@media (max-width: 699px) {
  .search-container:hover > .search-input {
    width: 30vw;
  }

  .search-container > .search-input:focus {
    width: 30vw;
  }
}
/* .search-container .search-btn .fas {
  color: #5cbdbb;
} */
</style>
