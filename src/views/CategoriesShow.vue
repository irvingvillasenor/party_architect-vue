<template>

  <div class="categories-show">
    <h1>{{ category.name }}</h1>
    
    <h2>Vendors</h2>
    <div v-for="vendor in category.vendors">
      <img :src="vendor.image_url" alt=""><br>
      <router-link :to="`/vendors/${vendor.id}`">{{vendor.name}}</router-link>
    </div>
  </div>

</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      category: {},
      vendor: [],
    };
  },
  created: function () {
    axios.get(`/api/categories/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.category = response.data;
      console.log(this.category);
    });
  },
  methods: {
    showCategory: function (category) {
      console.log(category);
    },
  },
};
</script>