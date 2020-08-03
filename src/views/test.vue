<template>
  <div class="home"></div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      vendors: [],
      categories: [],
    };
  },
  created: function() {
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
