<template>
  <div class="">
    <div v-if="hasNoMemberId" class="row">
      <div class="col">
        <div class="d-flex align-items-center justify-content-center">
          <div>
            <b-form-input
              v-model="memberId"
              placeholder="membership ID"
            ></b-form-input>
          </div>
          <div class="ml-1">
            <b-button @click="viewStatement" variant="outline-info"
              >search</b-button
            >
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-if="hasMemberId" class="row">
      <div class="col">
        <ContDetails />
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Statement",

  computed: {
    ...mapState({
      contribution: (state) => state.contributions.contribution,
      loading: (state) => state.contributions.fetchingContribution,
    }),
  },

  data() {
    return {
      hasNoMemberId: true,
      hasMemberId: false,
      memberId: "",
    };
  },
  methods: {
    ...mapActions({}),
    viewStatement() {
      this.hasNoMemberId = false;
      this.$router.push(`/contributions/${this.memberId}`);
    },
  },
};
</script>
