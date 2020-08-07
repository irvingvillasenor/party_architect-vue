<template>
  <div class="home about-us">
    <div class="page-header page-header-small">
      <div
        class="page-header-image"
        data-parallax="true"
        style="background-image: url('/confetti.jpg');"
      ></div>
      <div class="content-center">
        <div class="container">
          <!--Login Logo-->
          <div class="card-header text-center">
            <div class="container">
              <img src="/partyArchitect.v1.png" alt="" />

              <!--Login Logo End-->
              <!-- Social Media Buttons-->
              <div class="text-center">
                <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                  <i class="fab fa-facebook-square"></i>
                </a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                  <i class="fab fa-google-plus"></i>
                </a>
              </div>
              <!-- Social Media Buttons End-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Who we are?</h2>
            <h5 class="description">
              A party service that furnishes supplies and personnel to meet the
              needs of party hosts. We are a local Chicago agency who can
              coordinate all aspects of professional meetings and events. Party
              Architect conceives, organizes, and executes special affairs such
              as corporate receptions, weddings, birthday parties,
              anniversaries, and bar and bat mitzvahs.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <!-- First image on the left side -->
              <div
                class="image-container image-left"
                style="background-image: url('/party.jpg')"
              >
                <p class="blockquote blockquote-primary">
                  "I want to let everyone out there know how incredibly amazing
                  Party Architect is! They're knowledgeable and honest about
                  everything. If you want the best service and advise, go to
                  Party Architect! The Best!!!"
                  <br />
                  <br />
                  <small>-Nicole</small>
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div
                class="image-container image-left-bottom"
                style="background-image: url('/venue.png')"
              ></div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right"
                style="background-image: url('/girls-confetti.png')"
              ></div>
              <h3>
                So what is Party Architect
              </h3>
              <p>
                Party Architect is a party planning service that brings all of
                your options to your fingertips. We have done all of the legwork
                and have provided our subscribers to the best locals have to
                offer. We have been working hard and dilegently to provide
                premium vendors from a - z. We offer a varierty of categories to
                chose from, Catering, Venues, Entertainment, and Rentals to name
                a few. No matter how big or small, Party Architect can cater to
                your needs. Let's layout the blueprint to your next bash and
                have blast!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-office ">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-8 ml-auto mr-auto">
            <h2 class="title">We Love to PARTY</h2>
            <h4 class="description">
              Here are some pictures of what Party Architect can offer. You can
              see we are like a palace and is fully equiped with everything you
              need to get the job done.
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <img
              class="rounded img-raised"
              alt="Raised Image"
              src="/caters.jpg"
            />
          </div>
          <div class="col-md-4">
            <img
              class="rounded img-raised"
              alt="Raised Image"
              src="/chairs.jpg"
            />
          </div>
          <div class="col-md-4">
            <img
              class="rounded img-raised"
              alt="Raised Image"
              src="/wedding.jpeg"
            />
          </div>
          <div class="col-md-6">
            <img
              class="rounded img-raised"
              alt="Raised Image"
              src="/catering.jpg"
            />
          </div>
          <div class="col-md-6">
            <img
              class="rounded img-raised"
              alt="Raised Image"
              src="/wedding-venues-njjpg-a56e6efd89586e50.jpg"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- <h1>Vendors</h1>
    <div v-for="vendor in vendors">
      <img :src="vendor.image_url" alt="" />
      <h2>{{ vendor.name }}</h2>
      <router-link :to="`/signup`">More Info</router-link>
    </div>

    <h1>Categories</h1>
    <div v-for="category in categories">
      <img :src="category.image_url" alt="" />
      <h2>{{ category.name }}</h2>
    </div> -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      vendors: [],
      categories: [],
    };
  },
  created: function() {
    axios.get("/api/vendors").then((response) => {
      console.log("All Vendors:", response.data);
      this.vendors = response.data;
    }),
      axios.get("/api/categories").then((response) => {
        console.log("All categories:", response.data);
        this.categories = response.data;
      });
  },
  methods: {},
};
</script>
