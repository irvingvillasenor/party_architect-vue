<template>
  <div class="parties-create">
    <form v-on:submit.prevent="submit()">
      <h1>Party Create</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Budget:</label> 
        <input type="text" class="form-control" v-model="budget">
      </div>
      <div class="form-group">
        <label>Occasion:</label> 
        <input type="text" class="form-control" v-model="occasion">
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input class="form-control" type="file" v-on:change="setFile($event)" ref="fileInput">
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
      budget: "",
      occasion: "",
      imageFile: "",
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
      formData.append("budget", this.budget);
      formData.append("occasion", this.occasion);
      formData.append("image_file", this.imageFile);
      axios
        .post("/api/parties", formData)
        .then((response) => {
          this.$parent.flashMessage = "Party successfully created!";
          console.log(response.data);
          // Party show Page ------>
          // this.$router.push("/parties/" + response.data.id);
          this.$router.push("/categories/");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>