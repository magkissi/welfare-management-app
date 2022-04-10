<template>
  <div class="row main-wrapper">
    <div class="sidebar col-2 bg-info">
      <SideBar />
    </div>
    <div class="col ml-2 mr-2">
      <div class="row nav-wrapper">
        <div class="col"><NavBar /></div>
      </div>
      <div class="row content-wrapper">
        <div class="col"><router-view></router-view></div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
import SideBar from "../components/SideBar.vue";

export default {
  name: "Protected",
  components: {
    NavBar,
    SideBar,
  },
};
</script>
<style scoped>
.sidebar {
  height: 100vh;

  position: fixed;

  left: 0;
  z-index: 10;
}
.main-wrapper {
  position: relative;
  width: 100%;
}
.nav-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
}
.content-wrapper {
  position: relative;
  margin-left: 250px;
  margin-top: 100px;
}
</style>
