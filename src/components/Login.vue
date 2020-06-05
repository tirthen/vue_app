<template>
  <section id="registrationPage">
    <div class="container p-5">
      <div class="row mt-5 d-flex justify-content-center">
        <div class="col-lg-4 offset-lg-4">
          <div class="card bg-light">
            <div class="card-body">
              <h4 class="text-center">
                Login
              </h4>
              <hr />
              <form @submit="login">
                <ValidationProvider
                  name="email"
                  v-slot="{ errors }"
                  rules="required|email"
                >
                  <div class="form-group">
                    <label for="InputEmail" class="float-left">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="Email"
                      placeholder="Enter email"
                      v-model="email"
                    />
                    <span>{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>

                <div class="form-group">
                  <label class="float-left">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="enter your password"
                    v-model="password"
                  />
                </div>

                <hr />
                <button type="submit" class="btn btn-primary btn-block">
                  Login
                </button>
                <button type="button" class="btn btn-warning btn-block">
                  Create your Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { extend } from "vee-validate";
import { email } from "vee-validate/dist/rules";
import Axios from "axios";
extend("email", email);
export default {
  components: {
    ValidationProvider,
  },
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      submitted: false,
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      console.log(this.email, this.password);
      let obj = {
        email: this.email,
        password: this.password,
      };
      let headers = {
        "Content-Type": "application/json",
      };
      let config = {
        headers: headers,
      };
      let result = await Axios.post(
        "http://localhost:3000/api/accounts/login",
        obj,
        config
      ).catch((err) => console.log(err));
      console.log(result);
    },
  },
};
</script>

<style scoped></style>
