<template>
  <div class="home">
    <h1>Vendors</h1>
    <div v-for="vendor in vendors">
      <img :src="vendor.image_url" alt="">
      <h2>{{vendor.name}}</h2>
      <router-link :to="`/signup`">More Info</router-link>
    </div>

    <h1>Categories</h1>
    <div v-for="category in categories">
      <img :src="category.image_url" alt="">
      <h2>{{category.name}}</h2>
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
      vendors: [],
      categories: [],
    };
  },
  created: function () {
    axios.get("/api/vendors").then((response) => {
      console.log("All Vendors:", response.data);
      this.vendors = response.data;
    }),
      axios.get("/api/categories").then((response) => {
        console.log("All categories:", response.data);
        this.categories = response.data;
      });
  },
  methods: {},
};
</script>