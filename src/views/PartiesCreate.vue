<template>
  <div class="login-page sidebar-collapse">
    <div class="parties-create page-header header-filter" filter-color="black">
      <div
        class="page-header-image"
        style="background-image:url(/assets/img/login.jpg)"
      ></div>
      <div class="content">
        <div class="container">
          <div class="col-md-5 ml-auto mr-auto">
            <div class="card card-login card-plain">
              <form
                class="form"
                method=""
                action=""
                v-on:submit.prevent="submit()"
              >
                <!--Login Logo-->
                <div class="card-header text-center">
                  <div class="logo-container">
                    <img src="/assets/img/now-logo.png" alt="" />
                  </div>
                </div>
                <!--Login Logo End-->
                <h1>Create</h1>
                <ul>
                  <li class="text-danger" v-for="error in errors">
                    {{ error }}
                  </li>
                </ul>
                <div class="form-group no-border input-lg">
                  <label>Budget:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Budget..."
                    v-model="budget"
                  />
                </div>
                <div class="form-group no-border input-lg">
                  <label>Party Name:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Party Name"
                    v-model="occasion"
                  />
                </div>
                <label>Party Image:</label>
                <div class="input-group">
                  <input
                    type="file"
                    class="form-control btn btn-secondary btn-round btn-lg"
                    placeholder="Upload Image..."
                    v-on:change="setFile($event)"
                    ref="fileInput"
                  />
                </div>
                <div class="card-footer text-center">
                  <button
                    type="submit"
                    class="btn btn-primary btn-round btn-lg btn-block"
                    value="Submit"
                  >
                    Let's Party
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- <form v-on:submit.prevent="submit()">
      <h1>Party Create</h1> -->
      <!-- <ul> -->
      <!-- <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Budget:</label>
        <input type="text" class="form-control" v-model="budget" />
      </div> -->

      <!-- <div class="form-group">
        <label>Occasion:</label>
        <input type="text" class="form-control" v-model="occasion" />
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input
          class="form-control"
          type="file"
          v-on:change="setFile($event)"
          ref="fileInput"
        />
      </div> -->

      <!-- <input type="submit" class="btn btn-primary" value="Create" />
    </form> -->
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      budget: "",
      occasion: "",
      imageFile: "",
      errors: [],
    };
  },
  created: function() {},
  methods: {
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.imageFile = event.target.files[0];
      }
    },
    submit: function() {
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
