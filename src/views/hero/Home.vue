<template>
  <div class="home">
    <div class="background">
      <img src="@/assets/background1.jpg" alt="background" />
    </div>
    <div
      class="overlay d-flex flex-column justify-content-center align-items-center"
    >
      <div class="title text-white">MILIFE WELFARE SCHEME</div>
      <div class="mt-3">
        <b-button @click="signUp" variant="success">Sign Up</b-button>
      </div>
      <div class="mt-5 d-flex justify-content-center align-items-center">
        <div class="text-white mr-1">Already have an account?</div>
        <div @click="signIn" class="sign_in"><u>Sign In</u></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  components: {},
  methods: {
    signUp() {
      this.$router.push(`/sign-up`);
    },
    signIn() {
      this.$router.push(`/login`);
    },
  },
};
</script>
<style scoped>
.home {
  position: relative;
}
img {
  width: 100%;
  height: 100vh;
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
  /* padding-top: 200px; */
}
.title {
  border-bottom: 1px solid white;
  font-size: 50px;
  font-weight: 700;
}
.sign_in {
  font-size: 25px;
  color: rgb(25, 151, 109);
  font-weight: 800;
  cursor: pointer;
}
</style>
