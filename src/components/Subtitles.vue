<template>
  <div>
    <b-card class="shadow border border-white">
      <router-link :to="path1"
        ><div>{{ subtitle1 }}</div></router-link
      >
      <router-link :to="path2"
        ><div>{{ subtitle2 }}</div></router-link
      >
      <router-link :to="path3"
        ><div>{{ subtitle3 }}</div></router-link
      >
      <router-link :to="path4"
        ><div>{{ subtitle4 }}</div></router-link
      >
    </b-card>
  </div>
</template>
<script>
export default {
  name: "Subtitles",
  props: {
    subtitle1: {
      type: String,
    },
    subtitle2: {
      type: String,
    },
    subtitle3: {
      type: String,
    },
    subtitle4: {
      type: String,
    },
    path1: String,
    path2: String,
    path3: String,
    path4: String,
  },
};
</script>
