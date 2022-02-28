<template>
  <div>
    <b-card title="" class="shadow border border-white">
      <div class="row">
        <div class="col-8">
          <div class="d-flex align-items-center">
            <div class="mr-1">show</div>
            <div>
              <b-form-select
                v-model="perPageLimit"
                :options="limit"
                searchable
              ></b-form-select>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="d-flex align-items-center">
            <div>
              <b-form-input
                v-model="member"
                placeholder="membership ID"
              ></b-form-input>
            </div>
            <div class="ml-1">
              <b-button variant="outline-info">search</b-button>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col overflow-auto">
          <b-table
            id="my-table"
            :per-page="perPageLimit"
            :current-page="currentPage"
            :items="contributions"
            :fields="fields"
            class="bg-white"
            hover
            show-empty
            :busy="loading"
          >
            <template #cell(action)="data">
              <div class="d-flex justify-content-center action">
                <b-button
                  type="submit"
                  variant="info"
                  pill
                  size="sm"
                  @click="$router.push(`/contributions/${data.item.memberId}`)"
                  >view details</b-button
                >
              </div>
            </template>

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
  name: "contTable",
  created() {
    this.fetchAllContributions();
  },
  computed: {
    ...mapState({
      contributions: (state) => state.contributions.allContributions,
      loading: (state) => state.contributions.fetchingAllContributions,
    }),
    totalRecords() {
      return this.contributions?.length;
    },
  },

  data() {
    return {
      perPageLimit: 10,
      limit: [10, 15, 20, 25],

      currentPage: null,
      member: "",
      fields: [
        {
          key: "memberId",
          sortable: true,
        },
        {
          key: "name",
          sortable: false,
        },

        {
          key: "totalContribution",
          sortable: true,
        },
        {
          key: "totalRedrawal",
          sortable: false,
        },
        {
          key: "balance",
          sortable: false,
        },
        {
          key: "deductionSource",
          sortable: true,
        },

        {
          key: "action",
          sortable: false,
        },
      ],
    };
  },
  methods: {
    ...mapActions({
      fetchAllContributions: "contributions/fetchAllContributions",
    }),
    deleteMember() {},
    addNewMember() {
      this.$router.push(`/membership/new-member`);
    },
  },
};
</script>
