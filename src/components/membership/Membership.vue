<template>
  <div>
    <b-card title="" class="shadow border border-white wrapper">
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
                v-model="memberId"
                placeholder="membership ID"
              ></b-form-input>
            </div>
            <div class="ml-1">
              <b-button @click="showMemberDetails" variant="outline-info"
                >search</b-button
              >
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
        <div class="col">
          <b-table
            id="my-table"
            :per-page="perPageLimit"
            :current-page="currentPage"
            :items="membersDetails"
            :fields="fields"
            class="bg-white"
            hover
            show-empty
            :busy="loading"
            sticky-header="true"
            :filter="memberId"
          >
            <template #cell(action)="data">
              <div class="d-flex justify-content-center action">
                <b-button
                  type="submit"
                  variant="danger"
                  pill
                  size="sm"
                  @click="deleteMember(data.item._id)"
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

  created() {
    this.fetchMembersDetails();
  },
  computed: {
    ...mapState({
      membersDetails: (state) => state.membership.membershipDetails,
      memberDetails: (state) => state.membership.memberDetails,
      loading: (state) => state.membership.fetchingMembershipDetails,
      deletedMember: (state) => state.membership.deletedMembershipDetails,
      deletingMember: (state) => state.membership.deletingMembershipDetails,
    }),
    totalRecords() {
      return this.membersDetails?.length;
    },
  },

  data() {
    return {
      perPageLimit: "15",
      limit: [10, 15, 20, 25],

      currentPage: 1,
      memberId: "",
      fields: [
        {
          key: "memberId",
          sortable: true,
        },
        {
          key: "lastName",
          sortable: false,
        },
        {
          key: "firstName",
          sortable: false,
        },
        {
          key: "deductionStartDate",
          sortable: true,
        },
        {
          key: "contributionAmount",
          sortable: true,
        },
        {
          key: "deductionSource",
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
      fetchMembersDetails: "membership/fetchMembershipDetails",
      deleteMemberDetails: "membership/removeMember",
      fetchMemberDetails: "membership/fetchMemberDetails",
    }),
    deleteMember(id) {
      console.log("comp--id", id);
      this.deleteMemberDetails(id);
      this.fetchMembersDetails();
    },
    addNewMember() {
      this.$router.push(`/membership/new-member`);
    },
    showMemberDetails(filteredItems) {
      this.fetchMemberDetails(this.memberId);

      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>
<style scoped>
.wrapper {
  height: 100vh;
}
</style>
