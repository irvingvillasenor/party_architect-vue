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
    <div class="section section-javascript">
      <div class="container">
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
          <!--Edit Modal-->
          <div
            class="modal fade modal-primary"
            id="loginModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-login">
              <div class="modal-content">
                <div class="card card-login card-plain" data-background-color>
                  <div class="modal-header justify-content-center">
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    >
                      <i class="now-ui-icons ui-1_simple-remove"></i>
                    </button>
                    <div class="header header-primary text-center">
                      <div class="logo-container">
                        <img src="assets/img/now-logo.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="modal-body">
                    <form class="form" method="" action="">
                      <div class="card-body">
                        <div class="input-group no-border input-lg">
                          <div class="input-group-prepend">
                            <span class="input-group-text"
                              ><i class="now-ui-icons users_circle-08"></i
                            ></span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="First Name..."
                          />
                        </div>
                        <div class="input-group no-border input-lg">
                          <div class="input-group-prepend">
                            <span class="input-group-text"
                              ><i class="now-ui-icons ui-1_lock-circle-open"></i
                            ></span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Password..."
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer text-center">
                    <a
                      href="#pablo"
                      class="btn btn-neutral btn-round btn-lg btn-block"
                      >Get Started</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--End Modal-->
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <!--User Parties List-->
        <!--     *********    PRICING 1     *********      -->
        <div class="row" v-if="user.parties.length > 0">
          <div class="col-md-6 col-lg-3" v-for="party in user.parties">
            <div
              class="card card-pricing card-background"
              :style="`background-image: url('${party.image_url}')`"
            >
              <div class="card-body">
                <!-- <div class="icon icon-primary">
                  <i class="now-ui-icons media-1_button-power"></i>
                </div> -->
                <h2 class="card-title">${{ party.budget }}</h2>
                <p class="card-description">
                  {{ party.occasion }}
                </p>
                <a
                  :href="`/parties/${party.id}`"
                  class="btn btn-primary btn-round"
                >
                  Open
                </a>
              </div>
            </div>
          </div>
        </div>
        <!--     *********    END PRICING 1      *********      -->

        <!--     *********    PRICING 2     *********      -->
        <div class="row" v-if="user.vendors.length > 0">
          <div class="col-md-6 col-lg-3" v-for="vendor in user.vendors">
            <div
              class="card card-pricing card-background"
              :style="`background-image: url('${vendor.image_url}')`"
            >
              <div class="card-body">
                <div class="icon icon-primary">
                  <i class="now-ui-icons business_badge"></i>
                </div>
                <h2 class="card-title">{{ vendor.name }}</h2>
                <p class="card-description">
                  {{ vendor.website_url }}
                </p>
                <a
                  :href="`/vendors/${vendor.id}`"
                  class="btn btn-primary btn-round"
                >
                  Open
                </a>
              </div>
            </div>
          </div>
        </div>
        <!--     *********    END PRICING 2      *********      -->
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
