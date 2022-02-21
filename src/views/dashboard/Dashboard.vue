<template>
  <div>
    <div class="text-center text-primary my-2" v-if="loading">
      <b-spinner class="align-middle"></b-spinner>
    </div>
    <div class="row">
      <div
        class="col-5 mt-5 overflow-wrap"
        v-for="info in dashboardInfo"
        :key="info.title"
      >
        <DashboardCard :title="info.title" :amount="info.amount" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

import DashboardCard from "./DashboardCard.vue";

export default {
  name: "Dashboard",
  components: {
    DashboardCard,
  },
  created() {
    this.fetchDashboardInfo();
    console.log("info", this.dashboardInfo);
  },
  computed: {
    ...mapState({
      dashboardInfo: (state) => state.dashboard.info,
      loading: (state) => state.dashboard.fectchingInfo,
    }),
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      fetchDashboardInfo: "dashboard/fetchDashboardInfo",
    }),
  },
};
</script>

<style scoped>
.sidebar {
  color: white;

  height: 100vh;
  border: 1px solid gray;
}
</style>
