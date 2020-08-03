<template>
  <div class="categories-show">
    <!--     *********     FEATURES 8      *********      -->
    <div
      class="features-8 section-image"
      :style="`background-image: url('${category.image_url}')`"
    >
      <div class="col-md-8 ml-auto mr-auto text-center">
        <h2 class="title">{{ category.name }}</h2>
        <!-- <h4 class="description">
          {{category.description}}
        </h4> -->
      </div>
      <div class="container">
        <div class="row">
          <!-- Profile Card-->
          <div class="col-md-6" v-for="vendor in category.vendors">
            <div
              class="card card-background"
              :style="`background-image: url('${vendor.image_url}')`"
            >
              <div class="card-body">
                <div class="card-title text-left">
                  <h3>{{ vendor.name }}</h3>
                  <router-link
                    :to="`/vendors/${vendor.id}`"
                    class="btn btn-primary btn-round"
                  >
                    Details
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <!--End Profile Card-->
        </div>
      </div>
    </div>
    <!--     *********    END FEATURES 8      *********      -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      category: {},
      vendor: [],
    };
  },
  created: function() {
    axios.get(`/api/categories/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.category = response.data;
      console.log(this.category);
    });
  },
  methods: {
    showCategory: function(category) {
      console.log(category);
    },
  },
};
</script>
