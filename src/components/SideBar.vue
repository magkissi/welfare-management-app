<template>
  <div class="row pl-3 mt-5">
    <div class="col">
      <div class="sidebar_items row mt-5">
        <div class="col">+ Dashboard</div>
        >
      </div>
      <div class="sidebar_items row mt-3">
        <div @click="showMembershipTable" class="col">+ Membership</div>
      </div>

      <div class="sidebar_items row mt-3">
        <div class="col" @click="showContributions">+ Contributions</div>
      </div>
      <div
        class="sidebar_items row mt-3 mb-3"
        @mouseover="contSubTitles = true"
        @mouseleave="contSubTitles = false"
      >
        <div v-show="contSubTitles" class="col">
          <Subtitles
            subtitle1="All records"
            subtitle2="Statement"
            subtitle3="Make a deposit"
            subtitle4="Make a redrawal"
            path1="/contributions"
            path2="/statement"
            path3="/deposit"
            path4="/redrawal"
          />
        </div>
      </div>
      <div class="sidebar_items row mt-3">
        <div class="col" @click="showLoanSubtitles">+ Loans</div>
      </div>
      <div
        class="sidebar_items row mt-3"
        @mouseover="loanSubTitles = true"
        @mouseleave="loanSubTitles = false"
      >
        <div v-show="loanSubTitles" class="col">
          <Subtitles
            subtitle1="All records"
            subtitle2="apply for loan"
            subtitle3="statement"
            subtitle4="credit account"
            path1="/loans"
            path2="/loans/new-loan"
            path3="/"
            path4="/"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Subtitles from "./Subtitles.vue";

export default {
  name: "SideBar",
  components: {
    Subtitles,
  },
  data() {
    return {
      contSubTitles: false,
      SubTitles: false,
      loanSubTitles: false,
    };
  },
  methods: {
    showMembershipTable() {
      this.$router.push(`/membership`);
    },
    showContributions() {
      this.contSubTitles = !this.contSubTitles;
    },
    showLoanSubtitles() {
      this.loanSubTitles = !this.loanSubTitles;
    },
  },
};
</script>
<style scoped>
.sidebar_items {
  cursor: pointer;
}
</style>
