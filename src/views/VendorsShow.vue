<template>
  <div class="vendors-show contact-page">
    <div class="page-header page-header-small">
      <div
        class="page-header-image"
        data-parallax="true"
        :style="`background-image: url('${vendor.image_url}');`"
      ></div>
    </div>
    <!-- <h1>{{ vendor.name }}</h1>
    <p>{{ vendor.category_id }}</p>
    <p>{{ vendor.zip_code }}</p>
    <p>{{ vendor.website_url }}</p>
    <img :src="vendor.image_url" alt="" /><br />
    <p>{{ vendor.details }}</p>
    <p>Price:{{ vendor.price }}</p>
    <div v-if="$parent.getUserId() == vendor.user_id">
      <router-link :to="`/vendors/${vendor.id}/edit`">Edit</router-link>
    </div>

    <button
      v-for="party in vendor.user_parties"
      v-on:click="createVendorParty(party)"
    >
      Add to {{ party.occasion }}
    </button> -->
    <div class="main">
      <div class="contact-content">
        <div class="container">
          <div class="row">
            <div class="col-md-5 ml-auto mr-auto">
              <h1 class="title">{{ vendor.name }}</h1>
              <h2 class="title">About Us</h2>
              <p class="description">
                {{ vendor.details }}
                <br />
                <br />
              </p>
              <!-- <form role="form" id="contact-form" method="post">
                <label>Your name</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"
                      ><i class="now-ui-icons users_circle-08"></i
                    ></span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Name..."
                    aria-label="Your Name..."
                    autocomplete="name"
                  />
                </div>
                <label>Email address</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"
                      ><i class="now-ui-icons ui-1_email-85"></i
                    ></span>
                  </div>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email Here..."
                    aria-label="Email Here..."
                    autocomplete="email"
                  />
                </div>
                <label>Phone</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"
                      ><i class="now-ui-icons tech_mobile"></i
                    ></span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Number Here..."
                    autocomplete="number"
                  />
                </div>
                <div class="form-group">
                  <label>Your message</label>
                  <textarea
                    name="message"
                    class="form-control"
                    id="message"
                    rows="6"
                  ></textarea>
                </div>
                <div class="submit text-center">
                  <input
                    type="submit"
                    class="btn btn-primary btn-raised btn-round"
                    value="Contact Us"
                  />
                </div>
              </form> -->
            </div>
            <div class="col-md-5 ml-auto mr-auto">
              <div class="info info-horizontal mt-5">
                <div class="icon icon-primary">
                  <i class="now-ui-icons location_pin"></i>
                </div>
                <div class="description">
                  <h4 class="info-title">Find us at</h4>
                  <p>
                    {{ vendor.zip_code }}
                  </p>
                </div>
              </div>
              <div class="info info-horizontal">
                <div class="icon icon-primary">
                  <i class="now-ui-icons tech_laptop"></i>
                </div>
                <div class="description">
                  <h4 class="info-title">Visit us at</h4>
                  <p>
                    {{ vendor.website_url }}
                    <!-- {{ vendor.user.email }} -->
                  </p>
                </div>
              </div>
              <div class="info info-horizontal">
                <div class="icon icon-primary">
                  <i class="shopping_tag-content now-ui-icons"></i>
                </div>
                <div class="description">
                  <h4 class="info-title">Est. Cost</h4>
                  <p>${{ vendor.price }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      vendor: {},
    };
  },
  created: function() {
    axios.get(`/api/vendors/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.vendor = response.data;
      console.log(this.vendor);
    });
  },
  methods: {
    showVendor: function(vendor) {
      console.log(vendor);
    },
    createVendorParty: function(party) {
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
