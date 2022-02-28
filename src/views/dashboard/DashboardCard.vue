<template>
  <div>
    <div class="row" v-if="first">
      <div class="col-6 mr-4">
        <b-card class="p-4 shadow border border-white" title="">
          <div class="title_font">{{ title1 }}</div>
          <hr />
          <div class="amount_font">GHS {{ amount1 }}</div>
        </b-card>
      </div>
      <div class="col-4">
        <b-card class="p-4 shadow border border-white" title="">
          <div class="title_font">{{ title2 }}</div>
          <hr />
          <div class="amount_font">GHS {{ amount2 }}</div>
        </b-card>
      </div>
    </div>
    <div v-if="flip" class="row mt-4">
      <div class="col-4 mr-4">
        <b-card class="p-4 shadow border border-white border-radius-4" title="">
          <div class="title_font">{{ title1 }}</div>
          <hr />
          <div class="amount_font">GHS {{ amount1 }}</div>
        </b-card>
      </div>
      <div class="col-6">
        <b-card class="p-4 shadow border border-white" title="">
          <div class="title_font">{{ title2 }}</div>
          <hr />
          <div class="amount_font">GHS {{ amount2 }}</div>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DashboardCard",
  props: {
    title1: {
      type: String,
      required: true,
    },
    amount1: {
      type: Number,
      required: true,
    },
    title2: {
      type: String,
      required: true,
    },
    amount2: {
      type: Number,
      required: true,
    },
    flip: {
      type: Boolean,
      required: true,
      default: false,
    },
    first: {
      type: Boolean,
      required: true,
      default: true,
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
.title_font {
  font-weight: 600;
  font-size: 22px;
  text-align: center;
}
.amount_font {
  font-size: 20px;
  text-align: center;
}
</style>
