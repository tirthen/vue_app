<template>
  <section id="registrationPage">
    <div class="container p-5">
      <div class="row mt-5 d-flex justify-content-center">
        <div class="col-lg-4 offset-lg-4">
          <div class="card bg-light">
            <div class="card-body">
              <h4 class="text-center">
                Registration
              </h4>
              <hr />
              <form>
                <div class="form-group">
                  <label for="name" class="float-left">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>

                <div class="form-group">
                  <label for="InputEmail" class="float-left">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="Email"
                    placeholder="Enter email"
                  />
                </div>

                <div class="form-group">
                  <label class="float-left">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="enter your password"
                  />
                </div>
                <div class="form-check">
                  <label class="form-check-label float-left">
                    <input
                      type="checkbox"
                      name="isSeller"
                      class="form-check-input"
                    />
                    Register as Seller
                  </label>
                </div>
                <hr />
                <button type="submit" class="btn btn-primary btn-block">
                  Register
                </button>
                <button type="button" class="btn btn-warning btn-block">
                  Sign in
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
export default {
  name: "Register",
};
</script>

<style scoped></style>
