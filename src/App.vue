<template>
  <div id="app">
    <div id="nav">
      <!-- <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li> -->
        <!-- <li v-if="!isLoggedIn()">
          <router-link to="/signup">Signup</router-link>
        </li> -->
        <!-- <li v-if="!isLoggedIn()">
          <router-link to="/login">Login</router-link>
        </li> -->
        <!-- <li v-if="isLoggedIn()">
          <router-link to="/logout">Logout</router-link>
        </li> -->
        <!-- <li v-if="isLoggedIn()">
          <router-link to="/users/:id">Profile</router-link>
        </li> -->
        <!-- <li v-if="isLoggedIn()">
          <router-link to="/categories">Vendors</router-link>
        </li> -->
      <!-- </ul> -->
      <router-link to="/">Home</router-link> |
      <router-link v-if="!isLoggedIn()" to="/signup">Signup</router-link> |
      <router-link v-if="!isLoggedIn()" to="/login">Login</router-link> |
      <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link> |
      <router-link v-if="isLoggedIn()" :to="`/users/${getUserId()}`">Profile</router-link> |
      <router-link v-if="isLoggedIn()" to="/categories">Vendors</router-link>

    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  methods: {
    // returns true or false depending on jwt in localstorage
    isLoggedIn: function () {
      return localStorage.getItem("jwt");
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
