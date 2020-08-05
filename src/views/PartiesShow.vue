<template>
  <div class="parties-show sections-page">
    <div class="cd-section" id="teams">
      <!--     *********    TEAM 5     *********      -->
      <div
        class="team-5 section-image"
        :style="`background-image: url('${party.image_url}')`"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <h2 class="title">{{ party.occasion }}</h2>
              <h3 class="description">Budget: ${{ party.budget }}</h3>
              <h4 class="description">
                Balance: ${{ party.budget - calculateBudget }}
              </h4>
              <div v-if="$parent.getUserId() == party.user_id">
                <router-link :to="`/parties/${party.id}/edit`"
                  >Edit</router-link
                >
              </div>
              <button
                class="btn btn-primary btn-round"
                v-on:click="destroyParty()"
              >
                Delete {{ party.occasion }}
              </button>
            </div>
            <div class="row">
              <div class="col-md-4" v-for="vendor in party.vendors">
                <div class="card card-profile">
                  <div class="card-avatar">
                    <a href="#pablo">
                      <img
                        class="img img-raised"
                        :src="`${vendor.image_url}`"
                      />
                    </a>
                  </div>
                  <div class="card-body">
                    <h3 class="card-title">{{ vendor.name }}</h3>
                    <h6 class="category text-primary">${{ vendor.price }}</h6>
                    <p class="card-description">
                      {{ vendor.details }}
                    </p>
                    <div class="card-footer">
                      <button
                        type="button"
                        class="btn btn-icon btn-primary btn-md"
                        v-on:click="destroyVendorParty(vendor)"
                      >
                        <i class="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--     *********    END TEAM 5      *********      -->
      </div>
      <!-- Original Code-->
      <!-- <img :src="party.image_url" alt="" /><br />
      <h1>{{ party.occasion }}</h1>
      <p>Party Budget ${{ party.budget }}</p>
      <p>Budget Balance $ {{ party.budget - calculateBudget }}</p>
      <div v-if="$parent.getUserId() == party.user_id">
        <router-link :to="`/parties/${party.id}/edit`">Edit</router-link>
      </div>
      <button v-on:click="destroyParty()">Delete</button> -->

      <!-- Individual Vendors Index -->
      <!-- <h2>Vendors</h2>
    <div v-for="vendor in party.vendors"> -->
      <!-- <img :src="vendor.image_url" alt="" /><br /> -->
      <!-- <p>Cost: {{ vendor.price }}</p> -->
      <!-- <router-link :to="`/vendors/${vendor.id}`">{{ vendor.name }}</router-link> -->

      <!-- Remove Vendor from Party button-->
      <!-- <button v-on:click="destroyVendorParty(vendor)">
        Remove From {{ party.occasion }}
      </button> -->
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      party: {},
    };
  },
  created: function() {
    axios.get(`/api/parties/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.party = response.data;
      console.log(this.party);
    });
  },
  methods: {
    showParty: function(vendor) {
      console.log(vendor);
    },
    destroyParty: function() {
      if (confirm("Are you sure you want to delete this party?")) {
        axios.delete(`/api/parties/${this.party.id}`).then((response) => {
          console.log("Successfully Deleted!", response.data);
          this.$router.push("/users/:id");
        });
      }
    },
    destroyVendorParty: function(vendor) {
      if (confirm("Are you sure you want to delete this party?")) {
        axios
          .delete(
            `/api/vendor_parties?party_id=${this.party.id}&vendor_id=${vendor.id}`
          )
          .then((response) => {
            console.log("Successfully Deleted!", response.data);
            this.$router.push("/");
          });
      }
    },
  },
  computed: {
    calculateBudget: function() {
      if (this.party.vendors) {
        var total = 0;
        //loop through vendors array and sum up price(attribute then subtract from party budget.))
        // call calculated method by handlebars {{}}
        this.party.vendors.forEach(function(vendor) {
          total += vendor.price;
        });
        return total;
      } else {
        return null;
      }
    },
  },
};
</script>
