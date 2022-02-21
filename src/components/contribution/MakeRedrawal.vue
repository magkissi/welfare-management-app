<template>
  <div>
    <b-card shadow border-white>
      <form>
        <div class="row">
          <div class="col">
            <b-form-group id="input-group-1" label-for="input-1" label="Name">
              <b-input
                id="input-1"
                v-model="name"
                type="text"
                placeholder="enter account name"
                required
              >
              </b-input>
            </b-form-group>
          </div>
          <div class="col">
            <b-form-group id="input-group-2" label-for="input-2" label="Amount">
              <b-input
                id="input-2"
                v-model="amount"
                type="text"
                placeholder="enter redrawal amount"
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
      name: "",
      amount: "",
    };
  },
  methods: {
    cancel() {
      this.name = "";
      this.amount = "";
      this.$router.push(`/contributions`);
    },
    updateRecord() {},
  },
};
</script>
