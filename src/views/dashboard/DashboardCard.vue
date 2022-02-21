<template>
  <div>
    <b-card class="p-4 shadow border border-white d-md-block" title="">
      <div class="row border-bottom">
        <div class="col title">{{ title }}</div>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="col">{{ amount }}</div>
      </div>

      <div @click="viewDetails" class="mt-3">
        <b-button variant="info">view details</b-button>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "DashboardCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  methods: {
    viewDetails() {
      console.log("12345");
    },
  },
};
</script>
<style scoped>
.title {
  font-weight: 600;
  font-size: 20px;
}
</style>
