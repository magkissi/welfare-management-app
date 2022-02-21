<template>
  <div>
    <b-card title="" class="shadow border border-white">
      <div class="row">
        <div class="col">
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
        <div class="col">
          <b-button variant="success" @click="addNewMember"
            >create new member</b-button
          >
        </div>
      </div>
      <div class="row mt-3">
        <div class="col overflow-auto">
          <b-table
            id="my-table"
            :per-page="perPageLimit"
            :current-page="currentPage"
            :items="memberDetails"
            :fields="fields"
            class="bg-white"
            hover
            show-empty
            :busy="loading"
          >
            <template #cell(action)>
              <div class="d-flex justify-content-center action">
                <b-button
                  type="submit"
                  variant="danger"
                  pill
                  size="sm"
                  @click="deleteMember"
                  >delete</b-button
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
  name: "Membership",
  computed: {
    ...mapState({
      memberDetails: (state) => state.membership.membershipDetails,
      loading: (state) => state.membership.fetchingMembershipDetails,
    }),
    totalRecords() {
      return this.memberDetails?.length;
    },
  },
  created() {
    this.fetchMemberDetails();
  },
  data() {
    return {
      perPageLimit: 5,
      limit: [10, 15, 20, 25],

      currentPage: null,
      member: "",
      fields: [
        {
          key: "membership_ID",
          sortable: true,
        },
        {
          key: "name",
          sortable: false,
        },
        {
          key: "start_date",
          sortable: true,
        },
        {
          key: "contribution_amount",
          sortable: true,
        },
        {
          key: "deduction_source",
          sortable: true,
        },
        {
          key: "department",
          sortable: false,
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
      fetchMemberDetails: "membership/fetchMembershipDetails",
    }),
    deleteMember() {},
    addNewMember() {
      this.$router.push(`/membership/new-member`);
    },
  },
};
</script>
