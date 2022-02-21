<template>
  <div>
    <b-card class="shadow border border-white">
      <div class="row mb-3">
        <div class="col-8 title">
          <u>Name: {{ contributor }}</u>
        </div>

        <div class="col d-flex align-items-center">
          <div class="">
            <b-button @click="handleDownload" variant="success"
              >Download Statement</b-button
            >
          </div>
          <div class="ml-3">
            <b-button
              @click="$router.push(`/contributions`)"
              variant="outline-danger"
              >Close</b-button
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <b-table
            id="my-table"
            :per-page="perPageLimit"
            :current-page="currentPage"
            :items="contribution"
            :fields="fields"
            class="bg-white"
            hover
            show-empty
            :busy="loading"
          >
            <!-- <template #cell(deposits)="data">
              <div class="d-flex justify-content-center">
                {{ data.item.contribution_amount }}
              </div>
            </template> -->
            <template #table-busy>
              <div class="text-center text-primary my-2">
                <b-spinner class="align-middle"></b-spinner>
              </div>
            </template>
          </b-table>
          <div class="col mb-2">
            <b-pagination
              v-model="currentPage"
              :total-rows="totalRecords"
              :per-page="perPageLimit"
              aria-controls="my-table"
              class="float-right"
              pills
            ></b-pagination>
          </div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ContDetails",

  created() {
    const id = this.$route.params.id;
    this.fetchContribution(id);
    this.contributor =
      this.contribution.length > 0 ? this.contribution[0].name : "";
  },
  computed: {
    ...mapState({
      contribution: (state) => state.contributions.contribution,
      loading: (state) => state.contributions.fetchingContribution,
    }),
  },
  data() {
    return {
      perPageLimit: 15,
      limit: [10, 15, 20, 25],
      totalRecords: 20,
      currentPage: null,
      contributor: "",
      fields: [
        {
          key: "deposit",
          sortable: false,
        },
        {
          key: "redrawal",
          sortable: true,
        },
        {
          key: "interest",
          sortable: false,
        },
        {
          key: "date",
          sortable: true,
        },
      ],
    };
  },
  methods: {
    ...mapActions({
      fetchContribution: "contributions/fetchContribution",
    }),
    handleDownload() {
      this.$router.push(`/contributions`);
    },
  },
};
</script>
<style scoped>
.title {
  font-size: 20px;
}
</style>
