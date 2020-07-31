<template>
  <div class="users-show">
    <img :src="user.image_url" alt=""><br>
    <h1>{{ user.first_name }} {{user.last_name}}</h1>
    <p>{{ user.email }}</p>
    <!-- <p>{{user.image_url}}</p> -->
    <router-link :to="`/users/${user.id}/edit`">Edit</router-link>

    <h2>Parties</h2>
    <div>
    <router-link to="/parties-create">New Party</router-link>
    </div>

    <div v-for="party in user.parties">
    <img :src="party.image_url" alt=""><br>
      <p>{{ party.occasion }}</p>
      <router-link :to="`/parties/${party.id}`">View Party</router-link>
    </div>
    <h2>Vendors</h2>
    <div v-for="vendor in user.vendors">
      <img :src="vendor.image_url" alt=""><br>
      <router-link :to="`/vendors/${vendor.id}`">{{vendor.name}}</router-link>
    </div>

    <div>
    <router-link to="/vendors-create">New Vendor</router-link>
    </div>

  </div>

</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {},
      user_id: localStorage.getItem("user_id"),
      parties: [],
    };
  },
  created: function () {
    axios.get(`/api/users/${this.user_id}`).then((response) => {
      console.log(response.data);
      this.user = response.data;
    });
  },
  methods: {},
};
</script>