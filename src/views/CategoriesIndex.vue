<template>
  <div class="categories-index">
    <div class="cd-section" id="projects">
      <!--     *********    PROJECTS 1     *********      -->
      <div class="projects-1">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 px-0" v-for="category in categories">
              <div
                class="card card-background card-background-product card-no-shadow"
                :style="`background-image: url('${category.image_url}')`"
              >
                <div class="card-body">
                  <h3 class="card-title add-margin">
                    {{ category.name }}
                  </h3>

                  <router-link
                    :to="`/categories/${category.id}`"
                    class="btn btn-primary btn-round"
                  >
                    See More
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--     *********    END PROJECTS 1      *********      -->
    </div>
  </div>
</template>

<style>
.card-background.card-background-product .card-body .card-title.add-margin {
  margin-top: 70px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      categories: [],
    };
  },
  created: function() {
    axios.get("/api/categories").then((response) => {
      console.log("All categories:", response.data);
      this.categories = response.data;
    });
  },
  methods: {},
};
</script>
