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
    <!-- Navbar with profile  -->
    <nav class="navbar navbar-expand-lg bg-white">
      <div class="container">
        <div class="navbar-translate">
          <a class="navbar-brand" href="/">Party Architect</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#example-navbar-profile"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="example-navbar-profile">
          <ul class="navbar-nav ml-auto">
            <!-- <li class="nav-item">
              <a href="/categories" class="nav-link">
                <i
                  class="now-ui-icons design_bullet-list-67"
                  aria-hidden="true"
                ></i>
                <p>Vendors</p>
              </a>
            </li> -->
            <li class="nav-item" v-if="isLoggedIn()">
              <a href="/logout" class="nav-link">
                <i class="now-ui-icons sport_user-run" aria-hidden="true"></i>
                <p>Logout</p>
              </a>
            </li>
            <li class="nav-item" v-if="!isLoggedIn()">
              <a href="/signup" class="nav-link">
                <i class="now-ui-icons files_paper" aria-hidden="true"></i>
                <p>Signup</p>
              </a>
            </li>
            <li class="nav-item" v-if="!isLoggedIn()">
              <a href="/login" class="nav-link">
                <i
                  class="now-ui-icons arrows-1_share-66"
                  aria-hidden="true"
                ></i>
                <p>Login</p>
              </a>
            </li>
            <!-- <li class="nav-item" v-if="isLoggedIn()">
              <a
                class="nav-link btn btn-primary"
                :href="`/users/${getUserId()}`"
                target="_blank"
              >
                <p>Profile</p>
              </a>
            </li> -->
            <li class="nav-item" v-if="isLoggedIn()">
              <a class="nav-link" :href="`/users/${getUserId()}`">
                <i class="now-ui-icons users_circle-08"></i>
                <p>Profile</p>
              </a>
            </li>

            <li class="nav-item dropdown nav-item-image" v-if="isLoggedIn()">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
              >
                <i
                  class="now-ui-icons design_bullet-list-67"
                  aria-hidden="true"
                ></i>
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-header">Party Architect</a>
                <a
                  class="dropdown-item"
                  v-if="isLoggedIn()"
                  href="/parties-create"
                  >New Party</a
                >
                <a
                  class="dropdown-item"
                  v-if="isLoggedIn()"
                  href="/vendors-create"
                  >New Vendor</a
                >
                <a class="dropdown-item" v-if="isLoggedIn()" href="/logout"
                  >Logout</a
                >
                <a class="dropdown-item" v-if="isLoggedIn()" href="/categories"
                  >Vendors</a
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- End Navbar with profile -->
    <!-- Navbar -->
    <!-- <nav
      class="navbar navbar-expand-lg bg-transparent fixed-top"
      color-on-scroll="500"
    >
      <div class="container">
        <div class="navbar-translate">
          <a
            class="navbar-brand"
            href="/"
            rel="tooltip"
            title="Designed by Invision. Coded by Creative Tim"
            data-placement="bottom"
            target="_blank"
          >
            Home
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
          <ul class="navbar-nav ml-auto" v-if="isLoggedIn()">
            <li class="nav-item">
              <a href="/categories" class="nav-link">
                <i
                  class="now-ui-icons design_bullet-list-67"
                  aria-hidden="true"
                ></i>
                <p>Vendors</p>
              </a>
            </li>
            <li class="nav-item" v-if="isLoggedIn()">
              <a href="/logout" class="nav-link">
                <i class="now-ui-icons sport_user-run" aria-hidden="true"></i>
                <p>Logout</p>
              </a>
            </li>
            <li class="nav-item" v-if="!isLoggedIn()">
              <a href="/login" class="nav-link">
                <i
                  class="now-ui-icons arrows-1_share-66"
                  aria-hidden="true"
                ></i>
                <p>Login</p>
              </a>
            </li>
            <li class="nav-item" v-if="!isLoggedIn()">
              <a href="/signup" class="nav-link">
                <i class="now-ui-icons files_paper" aria-hidden="true"></i>
                <p>Signup</p>
              </a>
            </li>
            <li class="nav-item" v-if="isLoggedIn()">
              <a
                class="nav-link btn btn-primary"
                :href="`/users/${getUserId()}`"
                target="_blank"
              >
                <p>Profile</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->
    <!-- End Navbar -->

    <div class="wrapper">
      <router-view />
    </div>
    <!--     *********    BLACK SIMPLE FOOTER WITH SOCIAL AND BRAND     *********      -->
    <footer class="footer" data-background-color="black">
      <div class="container">
        <a class="footer-brand" href="#pablo">PARTY ARCHITECT</a>
        <ul class="pull-center">
          <li>
            <a href="/categories">
              Vendors
            </a>
          </li>
          <li>
            <a href="/">
              Home
            </a>
          </li>
          <li>
            <a href="#pablo">
              Contact Us
            </a>
          </li>
        </ul>
        <ul class="social-buttons pull-right">
          <li>
            <a
              href="https://twitter.com/irvingvillasenor"
              target="_blank"
              class="btn btn-icon btn-link btn-neutral"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/irvingvillasenor"
              target="_blank"
              class="btn btn-icon btn-neutral btn-link"
            >
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/reallyirving"
              target="_blank"
              class="btn btn-icon btn-neutral btn-link"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
    <!--     *********   END BLACK SIMPLE FOOTER WITH SOCIAL AND BRAND     *********      -->
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
