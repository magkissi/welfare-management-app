<template>
  <div>
    <b-card shadow border-white>
      <form>
        <div class="row">
          <div class="col-6">
            <b-form-group
              id="input-group-1"
              label-for="input-1"
              label="Member ID"
            >
              <b-input
                id="input-1"
                v-model="memberId"
                type="text"
                placeholder="enter account ID"
                required
              >
              </b-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <b-form-group id="input-group-2" label-for="input-2" label="Amount">
              <b-input
                id="input-2"
                v-model="amount"
                type="number"
                placeholder="enter deposit amount"
                required
              >
              </b-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <b-form-group
              id="input-group-3"
              label-for="input-3"
              label="Operator name"
            >
              <b-input
                id="input-3"
                v-model="operator"
                type="text"
                placeholder="enter name of Operator"
                required
              >
              </b-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col d-flex align-items-center">
            <div class="mr-4">
              <b-button @click="updateRecord" variant="success"
                >Upadate record</b-button
              >
            </div>
            <div>
              <b-button @click="cancel" variant="danger">Cancel</b-button>
            </div>
          </div>
        </div>
      </form>
    </b-card>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "MakeDeposit",

  data() {
    return {
      memberId: "",
      amount: null,
      operator: "",
      deductionSource: "",
    };
  },
  computed: {
    ...mapState({
      deposit: (state) => state.actions.deposit,
      loading: (state) => state.actions.addingDeposit,
      contribution: (state) => state.contributions.addedDepositToCont,
    }),
  },
  methods: {
    ...mapActions({
      addDeposit: "actions/addNewDeposit",
      addDepositToContribution: "contributions/addDepositToContribution",
    }),

    cancel() {
      this.memberName = "";
      this.amount = null;
      this.$router.push(`/contributions`);
    },
    updateRecord() {
      const actionPayload = {
        memberId: this.memberId,
        operator: "",
        amount: this.amount,
        paymentSource: "",
        type: "deposit",
      };
      const contributionPayload = {
        memberId: this.memberId,
        operator: "",
        amount: this.amount,
        paymentSource: this.deductionSource,
        type: "deposit",
      };
      this.addDeposit(actionPayload);
      this.memberName = "";
      this.amount = null;

      this.addDepositToContribution(contributionPayload);
      this.$router.push(`/contributions`);
    },
  },
};
</script>
