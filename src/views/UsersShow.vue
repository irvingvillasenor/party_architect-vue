<template>
  <div class="users-show profile-page">
    <div
      class="page-header clear-filter page-header-small"
      filter-color="orange"
    >
      <div
        class="page-header-image"
        data-parallax="true"
        style="background-image:url('/assets/img/bg5.jpg');"
      ></div>
      <div class="container">
        <div class="photo-container">
          <img :src="`${user.image_url}`" alt="" />
        </div>
        <h3 class="title">{{ user.first_name }} {{ user.last_name }}</h3>
        <!-- <p class="category">Photographer</p> -->
        <div class="content">
          <div class="social-description">
            <h2>{{ user.parties.length }}</h2>
            <p>PARTIES</p>
          </div>
          <div class="social-description">
            <h2>{{ user.vendors.length }}</h2>
            <p>VENDORS</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="button-container">
          <a href="#button" class="btn btn-primary btn-round btn-lg"
            >Add Party</a
          >
          <a
            href="#button"
            class="btn btn-default btn-round btn-lg btn-icon"
            rel="tooltip"
            title="Follow me on Twitter"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="#button"
            class="btn btn-default btn-round btn-lg btn-icon"
            rel="tooltip"
            title="Follow me on Instagram"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#button" class="btn btn-primary btn-round btn-lg"
            >Add Vendor</a
          >
        </div>
        <h3 class="title">About me</h3>
        <h5 class="description text-center">
          An artist of considerable range, Ryan — the name taken by
          Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
          records all of his own music, giving it a warm, intimate feel with a
          solid groove structure. An artist of considerable range.
        </h5>
      </div>
    </div>
    <img :src="user.image_url" alt="" /><br />
    <h1>{{ user.first_name }} {{ user.last_name }}</h1>
    <p>{{ user.email }}</p>
    -->
    <!-- <p>{{user.image_url}}</p> -->
    <router-link :to="`/users/${user.id}/edit`">Edit</router-link>

    <h2>Parties</h2>
    <div>
      <router-link to="/parties-create">New Party</router-link>
    </div>

    <div v-for="party in user.parties">
      <img :src="party.image_url" alt="" /><br />
      <p>{{ party.occasion }}</p>
      <router-link :to="`/parties/${party.id}`">View Party</router-link>
    </div>
    <h2>Vendors</h2>
    <div v-for="vendor in user.vendors">
      <img :src="vendor.image_url" alt="" /><br />
      <router-link :to="`/vendors/${vendor.id}`">{{ vendor.name }}</router-link>
    </div>

    <div>
      <router-link to="/vendors-create">New Vendor</router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {},
      user_id: localStorage.getItem("user_id"),
      parties: [],
    };
  },
  created: function() {
    axios.get(`/api/users/${this.user_id}`).then((response) => {
      console.log(response.data);
      this.user = response.data;
    });
  },
  methods: {},
};
</script>
