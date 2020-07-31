<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>First Name:</label> 
        <input type="text" class="form-control" v-model="firstName">
      </div>
      <div class="form-group">
        <label>Last Name:</label> 
        <input type="text" class="form-control" v-model="lastName">
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email">
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input class="form-control" type="file" v-on:change="setFile($event)" ref="fileInput">
      </div>
      <div class="form-group">
        <label>Vendor:</label>
        <input type="text" class="form-control" v-model="vendor">
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password">
      </div>
      <div class="form-group">
        <label>Password confirmation:</label>
        <input type="password" class="form-control" v-model="passwordConfirmation">
      </div>
      <input type="submit" class="btn btn-primary" value="Submit">
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
      firstName: "",
      lastName: "",
      email: "",
      imageFile: "",
      vendor: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  created: function () {},
  methods: {
    setFile: function (event) {
      if (event.target.files.length > 0) {
        this.imageFile = event.target.files[0];
      }
    },
    submit: function () {
      var formData = new FormData();
      formData.append("first_name", this.firstName);
      formData.append("last_name", this.lastName);
      formData.append("email", this.email);
      formData.append("image_file", this.imageFile);
      formData.append("vendor", this.vendor);
      formData.append("password", this.password);
      formData.append("password_confirmation", this.passwordConfirmation);
      axios
        .post("/api/users", formData)
        .then((response) => {
          this.$parent.flashMessage = "Successfully Signed up!";
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>