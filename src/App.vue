<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import Public from "./layout/Public.vue";
import Protected from "./layout/Protected.vue";
export default {
  name: "App",
  components: {
    Public,
    Protected,
  },
  computed: {
    layout() {
      if (this.$route.meta.layout === "public") return "public";
      return "protected";
    },
  },
};
</script>
<style>
#app {
  background-color: rgba(252, 245, 245, 0.3);
}
</style>
