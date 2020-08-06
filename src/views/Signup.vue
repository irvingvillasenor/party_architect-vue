<template>
  <div class="signup signup-page sidebar-collapse">
    <!-- <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>First Name:</label>
        <input type="text" class="form-control" v-model="firstName" />
      </div>
      <div class="form-group">
        <label>Last Name:</label>
        <input type="text" class="form-control" v-model="lastName" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input
          class="form-control"
          type="file"
          v-on:change="setFile($event)"
          ref="fileInput"
        />
      </div>
      <div class="form-group">
        <label>Vendor:</label>
        <input type="text" class="form-control" v-model="vendor" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <div class="form-group">
        <label>Password confirmation:</label>
        <input
          type="password"
          class="form-control"
          v-model="passwordConfirmation"
        />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form> -->
    <div class="page-header header-filter" filter-color="black">
      <div
        class="page-header-image"
        style="background-image:url(/confetti.jpg)"
      ></div>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-md-4 ml-auto mr-auto">
              <div class="info info-horizontal">
                <div class="icon icon-primary">
                  <i class="now-ui-icons business_badge"></i>
                </div>
                <div class="description">
                  <h5 class="info-title">Vendors</h5>
                  <p class="description">
                    Remember that every vendor is unique and that no two
                    vendors' services, packages or pricing structures are
                    exactly the same.
                  </p>
                </div>
              </div>
              <div class="info info-horizontal">
                <div class="icon icon-primary">
                  <i class="now-ui-icons business_money-coins"></i>
                </div>
                <div class="description">
                  <h5 class="info-title">Party Budget</h5>
                  <p class="description">
                    Set your party expenses and we’ll add them up to break down
                    your estimates and total spent. Your party budget calculator
                    is integrated with every planning tool on Party Architect.
                  </p>
                </div>
              </div>
              <div class="info info-horizontal">
                <div class="icon icon-info">
                  <i class="now-ui-icons media-2_note-03"></i>
                </div>
                <div class="description">
                  <h5 class="info-title">Entertainment</h5>
                  <p class="description">
                    Decide which events you want entertainment for. Also
                    consider additional equipment, like microphones, you might
                    need on your special day.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mr-auto">
              <div class="card card-signup">
                <div class="card-body">
                  <h4 class="card-title text-center">Signup</h4>
                  <form
                    class="form"
                    method=""
                    action=""
                    v-on:submit.prevent="submit()"
                  >
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"
                          ><i class="now-ui-icons users_circle-08"></i
                        ></span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First Name..."
                        v-model="firstName"
                      />
                    </div>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"
                          ><i class="now-ui-icons users_circle-08"></i
                        ></span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last Name..."
                        v-model="lastName"
                      />
                    </div>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"
                          ><i class="now-ui-icons ui-1_email-85"></i
                        ></span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Email..."
                        autocomplete="email"
                        v-model="email"
                      />
                    </div>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"
                          ><i class="now-ui-icons media-1_camera-compact"></i
                        ></span>
                      </div>
                      <input
                        type="file"
                        class="form-control"
                        placeholder="Upload Image..."
                        autocomplete="uploadImage"
                        v-on:change="setFile($event)"
                        ref="fileInput"
                      />
                    </div>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"
                          ><i class="now-ui-icons objects_key-25"></i
                        ></span>
                      </div>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Your Password..."
                        autocomplete="password"
                        v-model="password"
                      />
                    </div>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"
                          ><i class="now-ui-icons objects_key-25"></i
                        ></span>
                      </div>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Password Confirmation..."
                        autocomplete="passwordConfirmation"
                        v-model="passwordConfirmation"
                      />
                    </div>
                    <!-- If you want to add a checkbox to this form, uncomment this code -->
                    <div class="form-check">
                      <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" />
                        <span class="form-check-sign"></span>
                        I want to be a vendor
                      </label>
                    </div>
                    <div class="card-footer text-center">
                      <button
                        type="submit"
                        class="btn btn-primary btn-round btn-lg"
                        value="Submit"
                      >
                        Get Started
                      </button>
                    </div>
                  </form>
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
      firstName: "",
      lastName: "",
      email: "",
      imageFile: "",
      vendor: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  created: function() {},
  methods: {
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.imageFile = event.target.files[0];
      }
    },
    submit: function() {
      var formData = new FormData();
      formData.append("first_name", this.firstName);
      formData.append("last_name", this.lastName);
      formData.append("email", this.email);
      formData.append("image_file", this.imageFile);
      formData.append("vendor", this.vendor);
      formData.append("password", this.password);
      formData.append("password_confirmation", this.passwordConfirmation);
      axios
        .post("/api/users", formData)
        .then((response) => {
          this.$parent.flashMessage = "Successfully Signed up!";
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
