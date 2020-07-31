<template>
  <div class="vendors-index">
    <h1>Vendors</h1>
    <div v-for="vendor in vendors">
      <img :src="vendor.image_url" alt="">
      <h2>Name: {{vendor.name}}</h2>
      <p>Category: {{vendor.category_id}}</p>
      <p>Zip Code: {{vendor.zip_code}}</p>
      <p>Website: {{vendor.website_url}}</p>
      <p>Image: {{vendor.image_url}}</p>
      <p>Details: {{vendor.details}}</p>
      <p>Price: {{vendor.price}}</p>
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
    };
  },
  created: function () {
    axios.get("/api/vendors").then((response) => {
      console.log("All Vendors:", response.data);
      this.vendors = response.data;
    });
  },
  methods: {},
};
</script>