<template>
  <div class="users-show profile-page sidebar-collapse ">
    <!--Profile Header-->
    <div
      data-parallax="true"
      class="page-header page-header-small"
      filter-color="black"
    >
      <div
        style="background-image: url('/assets/img/bg44.jpg');"
        data-parallax="true"
        class="page-header-image"
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
    <!--Profile Header End-->
    <!--Profile Header Buttons-->
    <div class="button-container">
      <a href="/parties-create" class="btn btn-primary btn-round btn-lg"
        >Add Party</a
      >
      <a href="/vendors-create" class="btn btn-primary btn-round btn-lg"
        >Add Vendor</a
      >
      <a
        :href="`/users/${user.id}/edit`"
        class="btn btn-primary btn-round btn-lg"
        >Edit Profile</a
      >
    </div>
    <!--Profile Header Button End-->

    <!--Party/ Vendor Section-->
    <div class="main">
      <div class="container text-center">
        <div class="section">
          <br />
          <!--Party Cards -->
          <div class="row" v-if="user.parties.length > 0">
            <div class="col-md-4" v-for="party in user.parties">
              <div class="card card-plain card-blog">
                <div class="card-image">
                  <a :href="`/parties/${party.id}`">
                    <img
                      class="img rounded img-raised"
                      :src="`${party.image_url}`"
                    />
                  </a>
                </div>
                <div class="card-body">
                  <h6 class="category text-info">{{ party.occasion }}</h6>
                  <h4 class="card-title text-align">
                    Party Budget: ${{ party.budget }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <!--Party Cards End-->
          <!--Vendor Cards-->
          <div class="row" v-if="user.vendors.length > 0">
            <div class="col-md-4" v-for="vendor in user.vendors">
              <div class="card card-plain card-blog">
                <div class="card-image">
                  <a :href="`/vendors/${vendor.id}`">
                    <img
                      class="img rounded img-raised"
                      :src="`${vendor.image_url}`"
                    />
                  </a>
                </div>
                <div class="card-body">
                  <h6 class="category text-info">{{ vendor.name }}</h6>
                  <h4 class="card-title text-align">
                    {{ vendor.website_url }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <!--Vendor Cards End-->
        </div>
      </div>
    </div>
    <!--Party/ Vendor Section End-->
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
