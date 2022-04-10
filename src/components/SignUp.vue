<template>
  <div class="wrapper">
    <div class="">
      <img src="@/assets/background2.jpeg" alt="background" />
    </div>
    <div class="row overlay align-items-center">
      <div class="col ml-5">
        <div class="title">Please provide your sign up details</div>
        <b-form>
          <div class="row">
            <div class="col-4">
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="email"
                  placeholder="Enter email address"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <b-form-group
                id="input-group-1"
                label="Password:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="password"
                  placeholder="Enter password"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <b-form-group
                id="input-group-1"
                label="Repeat Password:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="repeatPassword"
                  placeholder="Repeat password"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <b-button @click="signUp" variant="success"> Sign Up </b-button>
            </div>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
    };
  },
  computed: {
    ...mapState({
      signUpData: (state) => state.auth.signUpData,
      loading: (state) => state.auth.sendingSignUpData,
    }),
  },
  methods: {
    ...mapActions({
      postSignUpData: "auth/sendSignUpData",
    }),
    signUp() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.postSignUpData(payload);
      this.$router.push(`/login`);
    },
  },
};
</script>
<style scoped>
.wrapper {
  position: relative;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}
img {
  width: 100%;
  height: 100vh;
}
.title {
  color: white;
  font-size: 20px;
  margin-bottom: 20px;
}
</style>
