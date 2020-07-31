<template>
  <div class="vendors-create">
    <form v-on:submit.prevent="submit()">
      <h1>Vendor Create</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Name:</label> 
        <input type="text" class="form-control" v-model="name">
      </div>

      <div class="form-group">
        <label>Select Category:</label> 
        <select name="categories" id="categories" v-model="category_id">
          <option v-for="category in categories" :value="category.id">{{category.name}}</option>
        </select>
      </div>

      <div class="form-group">
        <label>Zip Code:</label>
        <input type="text" class="form-control" v-model="zip_code">
      </div>
      <!-- <div class="form-group">
        <label>User ID:</label>
        <input type="text" class="form-control" v-model="userId">
      </div> -->
      <div class="form-group">
        <label>Website URL:</label>
        <input type="text" class="form-control" v-model="website_url">
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input class="form-control" type="file" v-on:change="setFile($event)" ref="fileInput">
      </div>
      <div class="form-group">
        <label>Details:</label>
        <input type="text" class="form-control" v-model="details">
      </div>
      <div class="form-group">
        <label>Price:</label>
        <input type="text" class="form-control" v-model="price">
      </div>
      
      <input type="submit" class="btn btn-primary" value="Create">
    </form>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      name: "",
      category_id: "",
      categories: [],
      zip_code: "",
      // userId: "",
      website_url: "",
      imageFile: "",
      details: "",
      price: "",
      errors: [],
    };
  },
  created: function () {
    axios.get("/api/categories").then((response) => {
      console.log(response.data);
      this.categories = response.data;
    });
  },
  methods: {
    setFile: function (event) {
      if (event.target.files.length > 0) {
        this.imageFile = event.target.files[0];
      }
    },
    submit: function () {
      var formData = new FormData();
      formData.append("name", this.name);
      formData.append("category_id", this.category_id);
      formData.append("zip_code", this.zip_code);
      formData.append("website_url", this.website_url);
      formData.append("image_file", this.imageFile);
      formData.append("details", this.details);
      formData.append("price", this.price);
      axios
        .post("/api/vendors", formData)
        .then((response) => {
          this.$parent.flashMessage = "Vendor successfully created!";
          // this.$router.push(`/vendors/${this.vendor_id}`);
          console.log(response.data);
          this.$router.push("/vendors/" + response.data.id);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>