<template>
  <div>
    <div class="text-center text-primary my-2" v-if="loading">
      <b-spinner class="align-middle"></b-spinner>
    </div>
    <div class="">
      <DashboardCard
        :title1="dashboardInfo[0].title"
        :amount1="dashboardInfo[0].amount"
        :title2="dashboardInfo[1].title"
        :amount2="dashboardInfo[1].amount"
        :flip="false"
      />
    </div>
    <div class="">
      <DashboardCard
        :title1="dashboardInfo[2].title"
        :amount1="dashboardInfo[2].amount"
        :title2="dashboardInfo[3].title"
        :amount2="dashboardInfo[3].amount"
        :flip="true"
        :first="false"
      />
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
