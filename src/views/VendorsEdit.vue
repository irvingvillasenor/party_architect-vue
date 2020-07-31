<template>

  <div class="vendors-edit">
    <form v-on:submit.prevent="editVendor()">
      <h1>Edit Vendor</h1>

      <ul>
        <li class="text-danger" v-for="error in errors">{{error}}</li>
      </ul>

      <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" v-model="vendor.name">
      </div>
      <div class="form-group">
        <label>Category:</label>
        <input type="text" class="form-control" v-model="vendor.category_id">
      </div>
      <div class="form-group">
        <label>Zip Code:</label>
        <input type="text" class="form-control" v-model="vendor.zip_code">
      </div>
      <div class="form-group">
        <label>Website:</label>
        <input type="text" class="form-control" v-model="vendor.website_url">
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input class="form-control" type="file" v-on:change="setFile($event)" ref="fileInput">
      </div>
      <div class="form-group">
        <label>Details:</label>
        <input type="text" class="form-control" v-model="vendor.details">
      </div>
      <div class="form-group">
        <label>Price:</label>
        <input type="text" class="form-control" v-model="vendor.price">
      </div>
      <input type="submit" class="btn btn-primary" value="Update">
      <button v-on:click="destroyVendor()">Delete</button>

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
      errors: [],
      vendor: {},
    };
  },
  created: function () {
    axios.get(`/api/vendors/${this.$route.params.id}`).then((response) => {
      this.vendor = response.data;
      console.log(this.vendor);
    });
  },
  methods: {
    setFile: function (event) {
      if (event.target.files.length > 0) {
        this.vendor.image_url = event.target.files[0];
      }
    },
    editVendor: function () {
      var formData = new FormData();
      formData.append("name", this.vendor.name);
      formData.append("category_id", this.vendor.category_id);
      formData.append("zip_code", this.vendor.zip_code);
      formData.append("website_url", this.vendor.website_url);
      formData.append("image_url", this.vendor.image_url);
      formData.append("details", this.vendor.details);
      formData.append("price", this.vendor.price);
      axios
        .patch(`/api/vendors/${this.vendor.id}`, formData)
        .then((response) => {
          this.$parent.flashMessage = "Vendor successfully updated!";
          // this.$router.push(`/vendors/${this.vendor_id}`);
          console.log(response.data);
          this.$router.push("/vendors/" + response.data.id);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    destroyVendor: function () {
      if (confirm("Are you sure you want to delete this vendor?")) {
        axios.delete(`/api/vendors/${this.vendor.id}`).then((response) => {
          console.log("Successfully Deleted!", response.data);
          this.$router.push(`/categories`);
        });
      }
    },
  },
};
</script>