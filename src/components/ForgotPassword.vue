<template>
  <div class="flex flex-center">
    <q-card style="width: 500px; max-width: 80vw;">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">
          Reset Password
        </div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>
      <q-card-section class="q-pt-md">
        <q-form ref="resetPasswordForm">
          <q-input
            type="email"
            v-model="form.email"
            label="Email *"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Please type your email']"
          />
        </q-form>
        <q-card-actions align="right">
          <div class="row q-mt-xs">
            <q-btn
              class="q-pl-md q-pr-md q-mr-md text-capitalize rounded-borders"
              label="Submit"
              color="primary"
              @click="resetPassword"
            />
          </div>
        </q-card-actions>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "ForgotPassword",
  data (){
    return {
      form: {
        email: ''
      }
    }
  },
  methods: {
    resetPassword () {
      firebase.auth().sendPasswordResetEmail(this.form.email)
        .then(() => {
          this.form = {}
          this.$q.notify({message: 'Check you email and reset your password.'})
        })
        .catch(error => { console.log(error)})
    }
  }
}
</script>

<style scoped>

</style>
