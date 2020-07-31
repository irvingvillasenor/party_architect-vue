<template>

  <div class="vendors-show">
    <h1>{{ vendor.name }}</h1>
    <p>{{ vendor.category_id }}</p>
    <p>{{ vendor.zip_code }}</p>
    <p>{{ vendor.website_url }}</p>
    <img :src="vendor.image_url" alt=""><br>
    <p>{{ vendor.details }}</p>
    <p>Price:{{ vendor.price }}</p>
    <div v-if="$parent.getUserId() == vendor.user_id">
      <router-link :to="`/vendors/${vendor.id}/edit`">Edit</router-link>
    </div>

    <button v-for="party in vendor.user_parties" v-on:click="createVendorParty(party)">Add to {{party.occasion}}</button>

  </div>

</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      vendor: {},
    };
  },
  created: function () {
    axios.get(`/api/vendors/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.vendor = response.data;
      console.log(this.vendor);
    });
  },
  methods: {
    showVendor: function (vendor) {
      console.log(vendor);
    },
    createVendorParty: function (party) {
      var params = {
        vendor_id: this.vendor.id,
        party_id: party.id,
      };
      axios
        .post("/api/vendor_parties", params)
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