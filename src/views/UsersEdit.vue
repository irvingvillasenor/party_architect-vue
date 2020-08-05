<template>
  <div class="users-edit login-page sidebar-collapse">
    <div class="page-header header-filter" filter-color="orange">
      <div
        class="page-header-image"
        style="background-image: url(/assets/img/login.jpg);"
      ></div>
      <div class="content">
        <div class="container">
          <div class="col-md-5 ml-auto mr-auto">
            <div class="card card-login card-plain">
              <form
                class="form"
                method=""
                action=""
                v-on:submit.prevent="editUser()"
              >
                <!--Login Logo-->
                <div class="card-header text-center">
                  <div class="logo-container">
                    <img src="/assets/img/now-logo.png" alt="" />
                  </div>
                </div>
                <!--Login Logo End-->
                <h2>Update Profile</h2>
                <ul>
                  <li class="text-danger" v-for="error in errors">
                    {{ error }}
                  </li>
                </ul>
                <div class="card-body">
                  <div class="input-group no-border input-lg">
                    <div class="input-group-prepend">
                      <span class="input-group-text"
                        ><i class="now-ui-icons users_circle-08"></i
                      ></span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First Name..."
                      v-model="user.first_name"
                    />
                  </div>
                  <div class="input-group no-border input-lg">
                    <div class="input-group-prepend">
                      <span class="input-group-text"
                        ><i class="now-ui-icons text_caps-small"></i
                      ></span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last Name..."
                      v-model="user.last_name"
                    />
                  </div>
                  <div class="input-group no-border input-lg">
                    <div class="input-group-prepend">
                      <span class="input-group-text"
                        ><i class="now-ui-icons text_caps-small"></i
                      ></span>
                    </div>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email..."
                      v-model="user.email"
                    />
                  </div>
                  <div class="input-group no-border input-lg">
                    <div class="input-group-prepend">
                      <span class="input-group-text"
                        ><i class="now-ui-icons text_caps-small"></i
                      ></span>
                    </div>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password..."
                      v-model="user.password"
                    />
                  </div>
                  <div class="input-group no-border input-lg">
                    <div class="input-group-prepend">
                      <span class="input-group-text"
                        ><i class="now-ui-icons text_caps-small"></i
                      ></span>
                    </div>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password Confirmation..."
                      v-model="user.password_confirmation"
                    />
                  </div>
                </div>
                <div class="card-footer text-center">
                  <button
                    type="submit"
                    class="btn btn-primary btn-round btn-lg btn-block"
                    value="Submit"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form v-on:submit.prevent="editUser()">
      <h1>Edit User</h1>

      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>

      <div class="form-group">
        <label>First Name:</label>
        <input type="text" class="form-control" v-model="user.first_name" />
      </div>
      <div class="form-group">
        <label>Last Name:</label>
        <input type="text" class="form-control" v-model="user.last_name" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="text" class="form-control" v-model="user.email" />
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input
          class="form-control"
          type="file"
          v-on:change="setFile($event)"
          ref="fileInput"
        />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="text" class="form-control" v-model="user.password" />
      </div>
      <div class="form-group">
        <label>Password Confirmation:</label>
        <input
          type="text"
          class="form-control"
          v-model="user.password_confirmation"
        />
      </div>

      <input type="submit" class="btn btn-primary" value="Update" />
      <button v-on:click="destroyUser()">Delete</button>
    </form>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      errors: [],
      user: {},
    };
  },
  created: function() {
    axios.get(`/api/users/${this.$route.params.id}`).then((response) => {
      this.user = response.data;
      console.log(this.user);
    });
  },
  methods: {
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.user.image_url = event.target.files[0];
      }
    },
    editUser: function() {
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
    destroyUser: function() {
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
