<template>
  <q-page class="flex q-pa-md">
    <q-card class="full-width">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="Login" />
        <q-tab name="register" label="Register" />
      </q-tabs>


      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <AuthComponent :tab="tab" />
        </q-tab-panel>

        <q-tab-panel name="register">
          <AuthComponent :tab="tab"/>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
import AuthComponent from "components/AuthComponent";
export default {
  components: { AuthComponent },
  data () {
    return {
      tab: 'login',
      form: {
        email: '',
        password: ''
      },
      userAccountDialog: false,
      resetPwdDialog: false,
      dialogTitle: '',
      method: ''
    }
  },
  methods: {
    btnLogin() {
      this.userAccountDialog = true
      this.method = 'sign in'
      this.dialogTitle = 'Login Account'
    }
  }
}
</script>
