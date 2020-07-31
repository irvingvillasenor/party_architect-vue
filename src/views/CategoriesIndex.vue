<template>

  <div class="categories-index">
    <h1>Categories</h1>
    <div v-for="category in categories">
      <img :src="category.image_url" alt="">
      <router-link :to="`/categories/${category.id}`">{{category.name}}</router-link>
    </div>
  </div>

</template>

<style>
img {
  width: 250px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      categories: [],
    };
  },
  created: function () {
    axios.get("/api/categories").then((response) => {
      console.log("All categories:", response.data);
      this.categories = response.data;
    });
  },
  methods: {},
};
</script>