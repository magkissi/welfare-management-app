<template>
  <div class="wrapper">
    <div class="">
      <img src="@/assets/background2.jpeg" alt="background" />
    </div>
    <div class="row overlay align-items-center">
      <div class="col ml-5">
        <b-form>
          <div class="title">Please Login</div>
          <div class="row">
            <div class="col-4">
              <b-form-group
                id="input-group-1"
                label="User name:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="username"
                  placeholder="Enter username"
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
              <b-button @click="login" variant="success"> Login </b-button>
            </div>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$router.push(`/dashboard`);
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
  margin-left: 200px;
}
</style>
