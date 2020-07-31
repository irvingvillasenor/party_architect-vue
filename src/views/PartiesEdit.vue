<template>

  <div class="parties-edit">
    <form v-on:submit.prevent="editParty()">
      <h1>Edit Party</h1>

      <ul>
        <li class="text-danger" v-for="error in errors">{{error}}</li>
      </ul>

      <div class="form-group">
        <label>Budget:</label>
        <input type="text" class="form-control" v-model="party.budget">
      </div>
      <div class="form-group">
        <label>Occasion:</label>
        <input type="text" class="form-control" v-model="party.occasion">
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input class="form-control" type="file" v-on:change="setFile($event)" ref="fileInput">
      </div>
      <input type="submit" class="btn btn-primary" value="Update">
      <button v-on:click="destroyParty()">Delete</button>

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
      party: {},
    };
  },
  created: function () {
    axios.get(`/api/parties/${this.$route.params.id}`).then((response) => {
      this.party = response.data;
      console.log(this.party);
    });
  },
  methods: {
    setFile: function (event) {
      if (event.target.files.length > 0) {
        this.party.image_url = event.target.files[0];
      }
    },
    editParty: function () {
      var formData = new FormData();
      formData.append("budget", this.party.budget);
      formData.append("occasion", this.party.occasion);
      formData.append("image_url", this.party.image_url);
      axios
        .patch(`/api/parties/${this.party.id}`, formData)
        .then((response) => {
          this.$parent.flashMessage = "Party successfully updated!";
          console.log(response.data);
          this.$router.push("/parties/" + response.data.id);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    destroyParty: function () {
      if (confirm("Are you sure you want to delete this party?")) {
        axios.delete(`/api/parties/${this.party.id}`).then((response) => {
          console.log("Successfully Deleted!", response.data);
          this.$router.push("/users/:id");
        });
      }
    },
  },
};
</script>