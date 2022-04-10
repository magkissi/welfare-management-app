<template>
  <div class="wrapper">
    <div class="">
      <img src="@/assets/background2.jpeg" alt="background" />
    </div>
    <div class="row overlay align-items-center">
      <div class="col ml-5">
        <div class="title">Please provide your login details</div>
        <validation-observer ref="signInForm">
          <b-form>
            <div class="row md">
              <div class="col-4">
                <validation-provider
                  rules="required"
                  v-slot="{ errors }"
                  name="email"
                >
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
                    <div class="error-field">{{ errors[0] }}</div>
                  </b-form-group>
                </validation-provider>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <validation-provider
                  rules="required"
                  v-slot="{ errors }"
                  name="password"
                >
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
                    <div class="error-field">{{ errors[0] }}</div>
                  </b-form-group>
                </validation-provider>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <b-button @click="login" variant="success"> Login </b-button>
              </div>
              <div click="resetPassword" class="col password">
                <p>Forgotten password?</p>
              </div>
            </div>
          </b-form>
        </validation-observer>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "SignIn",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapState({
      loginData: (state) => state.auth.loginData,
      loading: (state) => state.auth.sendingLoginData,
      loginError: (state) => state.auth.sendLoginDataError,
      users: (state) => state.auth.users,
    }),
  },
  methods: {
    ...mapActions({
      postLoginData: "auth/sendLoginData",
      fetchUsers: "auth/fetchUsers",
    }),
    login() {
      const payload = {
        email: this.email,
        password: this.password,
        strategy: "local",
      };

      this.$refs.signInForm.validate().then(async (success) => {
        if (success) {
          await this.postLoginData(payload);

          if (this.loginError.status) {
            this.$toast(this.loginError.message);
          } else {
            this.$router.push(`/dashboard`);
          }
        }
      });
    },
    resetPassword() {
      console.log("password reset");
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
.error-field {
  color: red;
  font-size: 12px;
}
.password {
  cursor: pointer;
  color: bisque;
}
</style>
