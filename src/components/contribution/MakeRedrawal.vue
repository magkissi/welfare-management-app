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
export default {
  name: "MakeRedrawal",
  data() {
    return {
      memberId: "",
      amount: "",
      operator: "",
    };
  },
  methods: {
    cancel() {
      this.memberId = "";
      this.amount = "";
      this.operator = "";
      this.$router.push(`/contributions`);
    },
    updateRecord() {},
  },
};
</script>
