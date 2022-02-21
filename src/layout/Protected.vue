<template>
  <div>
    <div class="row">
      <div class="sidebar col-2 bg-info">
        <SideBar />
      </div>
      <div class="col ml-2 mr-2 mt-4">
        <div class="row">
          <div class="col"><NavBar /></div>
        </div>
        <div class="row">
          <div class="col mt-4"><router-view></router-view></div>
        </div>
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
}
</style>
