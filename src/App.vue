<template>
  <div id="app">
    <!-- <div id="nav">
      
      <router-link to="/">Home</router-link> |
      <router-link v-if="!isLoggedIn()" to="/signup">Signup</router-link> |
      <router-link v-if="!isLoggedIn()" to="/login">Login</router-link> |
      <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link> |
      <router-link v-if="isLoggedIn()" :to="`/users/${getUserId()}`">Profile</router-link> |
      <router-link v-if="isLoggedIn()" to="/categories">Vendors</router-link>

    </div> -->

    <!-- Navbar -->
    <nav
      class="navbar navbar-expand-lg bg-white fixed-top"
      color-on-scroll="500"
    >
      <div class="container">
        <div class="navbar-translate">
          <a
            class="navbar-brand"
            href="https://demos.creative-tim.com/now-ui-kit-pro/index.html"
            rel="tooltip"
            title="Designed by Invision. Coded by Creative Tim"
            data-placement="bottom"
            target="_blank"
          >
            Now Ui Kit Pro
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-bar top-bar"></span>
            <span class="navbar-toggler-bar middle-bar"></span>
            <span class="navbar-toggler-bar bottom-bar"></span>
          </button>
        </div>
        <div
          class="collapse navbar-collapse"
          data-nav-image="./assets/img//blurred-image-1.jpg"
          data-color="orange"
        >
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="now-ui-icons design_image" aria-hidden="true"></i>
                <p>Examples</p>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link btn btn-primary"
                href="https://www.creative-tim.com/product/now-ui-kit-pro"
                target="_blank"
              >
                <p>Buy Now</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- End Navbar -->
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // returns true or false depending on jwt in localstorage
    isLoggedIn: function() {
      return localStorage.getItem("jwt");
    },
    getUserId: function() {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
