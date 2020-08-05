<template>
  <div class="login-page page-header header-filter" filter-color="orange">
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
              <h1>Party Architect</h1>
              <h2>Login</h2>
              <ul>
                <li class="text-danger" v-for="error in errors">{{ error }}</li>
              </ul>
              <div class="form-group no-border input-lg">
                <label>Email:</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="email"
                  v-model="email"
                />
              </div>
              <div class="form-group no-border input-lg">
                <label>Password:</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="password"
                  v-model="password"
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
              <div class="pull-center">
                <h6>
                  <a href="/signup" class="link footer-link">Create Account</a>
                </h6>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          localStorage.setItem("vendor_id", response.data.vendor_id);
          this.$parent.flashMessage = "Successfully Logged in!";
          this.$router.push(`/users/${response.data.user_id}`);
        })
        .catch((error) => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
