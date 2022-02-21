<template>
  <div>
    <b-card title="" class="shadow border border-white h-full">
      <validation-observer ref="detailsValidation">
        <b-form>
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col">
                  <b-form-group
                    id="input-group-1"
                    label="First name:"
                    label-for="input-1"
                  >
                    <validation-provider>
                      <b-form-input
                        id="input-1"
                        v-model="firstName"
                        type="text"
                        placeholder="Enter first name"
                        required
                      >
                      </b-form-input>
                      <!-- <small class="text-danger">{{ errors[0] }}</small> -->
                    </validation-provider>
                  </b-form-group>
                </div>
                <div class="col">
                  <b-form-group
                    id="input-group-1"
                    label="Last name:"
                    label-for="input-1"
                  >
                    <validation-provider>
                      <b-form-input
                        id="input-1"
                        v-model="lastName"
                        type="text"
                        placeholder="Enter surname"
                        required
                      >
                      </b-form-input>
                      <!-- <small class="text-danger">{{ errors[0] }}</small> -->
                    </validation-provider>
                  </b-form-group>
                </div>
              </div>
            </div>
            <div class="col">
              <b-form-group
                id="input-group-2"
                label="Department:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="department"
                  type="text"
                  placeholder="Enter department"
                  required
                >
                </b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <b-form-group
                id="input-group-3"
                label="Contribution amount:"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  type="number"
                  v-model="amount"
                  placeholder="Enter contribution amount"
                  required
                >
                </b-form-input>
              </b-form-group>
            </div>
            <div class="col">
              <b-form-group
                id="input-group-4"
                label="Email"
                label-for="input-4"
              >
                <b-form-input
                  id="input-4"
                  v-model="email"
                  type="email"
                  placeholder="Enter email address"
                  required
                >
                </b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <b-form-group
                id="input-group-5"
                label="Deduction Source:"
                label-for="input-5"
              >
                <b-form-input
                  id="input-5"
                  v-model="source"
                  type="text"
                  placeholder="Enter deduction source"
                  required
                >
                </b-form-input>
              </b-form-group>
            </div>
            <div class="col">
              <b-form-group
                id="input-group-6"
                label="Contact:"
                label-for="input-6"
              >
                <b-form-input
                  id="input-6"
                  v-model="contact"
                  type="number"
                  placeholder="Enter phone number"
                  required
                >
                </b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <b-form-group
                id="input-group-7"
                label="Deduction Start date:"
                label-for="input-7"
              >
                <b-form-input
                  id="input-7"
                  v-model="startDate"
                  type="text"
                  placeholder="Enter only month and year eg. 02-2022"
                  required
                >
                </b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="mt-5 border-top text-primary">Next of Kin:</div>
          <div class="row mt-4">
            <div class="col">
              <b-form-group
                id="input-group-7"
                label="Name:"
                label-for="input-7"
              >
                <b-form-input
                  id="input-7"
                  v-model="successorName"
                  type="text"
                  placeholder="Enter surname first"
                  required
                >
                </b-form-input>
              </b-form-group>
            </div>
            <div class="col">
              <b-form-group
                id="input-group-8"
                label="Contact:"
                label-for="input-8"
              >
                <b-form-input
                  id="input-8"
                  v-model="successorContact"
                  type="number"
                  placeholder="Enter phone number"
                  required
                >
                </b-form-input>
              </b-form-group>
            </div>
          </div>
          <div class="d-flex mt-4">
            <div class="mr-3">
              <b-button @click="edit" variant="info">Edit</b-button>
            </div>
            <div>
              <b-button @click="submitDetails" variant="success"
                >Submit</b-button
              >
            </div>
          </div>
        </b-form>
      </validation-observer>
    </b-card>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
// import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  name: "NewMember",
  components: {
    // ValidationProvider,
    // ValidationObserver,
  },

  computed: {
    ...mapState({
      newMember: (state) => state.membership.newMember,
    }),
  },
  data() {
    return {
      generatedId: "",
      email: "",
      firstName: "",
      lastName: "",
      source: "",
      amount: null,
      department: "",
      contact: null,
      startDate: null,
      successorName: "",
      successorContact: "",
    };
  },
  methods: {
    ...mapActions({
      addNewMember: "membership/addNewMember",
    }),
    edit() {
      console.log("editting");
    },
    submitDetails() {
      //   const getIdNumbers = this.startDate
      const getIdLetters = this.firstName.charAt(0) + this.lastName.slice(0, 4);
      const combineLetters = getIdLetters.toUpperCase();
      this.generatedId = combineLetters;
      const payload = {
        membership_ID: this.generatedId,
        name: this.lastName.toUpperCase() + " " + this.firstName.toUpperCase(),
        contribution_amount: this.amount,
        start_date: this.startDate,
        deduction_source: this.source,
        department: this.department,
        contact: this.contact,
        email: this.email,
        successor_name: this.successorName,
        successor_contct: this.successorContact,
      };
      this.addNewMember(payload);
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.name = "";
      this.source = "";
      this.amount = null;
      this.department = "";
      this.contact = null;
      this.startDate = null;
      this.successorName = "";
      this.successorContact = "";
      this.$router.push(`/membership`);
      //   this.$refs.detailsValidation.validate();

      //   this.$refs.detailsValidation.validate().then((success) => {
      //     if (success) {
      //       this.$router.push(`/membership`);
      //     }
      //   });
    },
  },
};
</script>
