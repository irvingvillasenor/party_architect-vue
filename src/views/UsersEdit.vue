<template>

  <div class="users-edit">
    <form v-on:submit.prevent="editUser()">
      <h1>Edit User</h1>

      <ul>
        <li class="text-danger" v-for="error in errors">{{error}}</li>
      </ul>

      <div class="form-group">
        <label>First Name:</label>
        <input type="text" class="form-control" v-model="user.first_name">
      </div>
      <div class="form-group">
        <label>Last Name:</label>
        <input type="text" class="form-control" v-model="user.last_name">
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="text" class="form-control" v-model="user.email">
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input class="form-control" type="file" v-on:change="setFile($event)" ref="fileInput">
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="text" class="form-control" v-model="user.password">
      </div>
      <div class="form-group">
        <label>Password Confirmation:</label>
        <input type="text" class="form-control" v-model="user.password_confirmation">
      </div>
      
      <input type="submit" class="btn btn-primary" value="Update">
      <button v-on:click="destroyUser()">Delete</button>

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
      user: {},
    };
  },
  created: function () {
    axios.get(`/api/users/${this.$route.params.id}`).then((response) => {
      this.user = response.data;
      console.log(this.user);
    });
  },
  methods: {
    setFile: function (event) {
      if (event.target.files.length > 0) {
        this.user.image_url = event.target.files[0];
      }
    },
    editUser: function () {
      var formData = new FormData();
      formData.append("first_name", this.user.first_name);
      formData.append("last_name", this.user.last_name);
      formData.append("email", this.user.email);
      formData.append("image_url", this.user.image_url);
      formData.append("vendor", this.user.vendor);
      formData.append("password", this.user.password);
      formData.append("password_confirmation", this.user.password_confirmation);
      axios
        .patch(`/api/users/${this.user.id}`, formData)
        .then((response) => {
          this.$parent.flashMessage = "User successfully updated!";
          console.log(response.data);
          this.$router.push("/users/" + response.data.id);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    destroyUser: function () {
      if (confirm("Are you sure you want to delete this user?")) {
        axios.delete(`/api/users/${this.user.id}`).then((response) => {
          console.log("Successfully Deleted!", response.data);
          this.$router.push("/logout");
        });
      }
    },
  },
};
</script>