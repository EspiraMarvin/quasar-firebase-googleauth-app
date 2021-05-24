<template>
  <div>
    <template v-if="tab === 'register'">
      <div class="text-center q-mb-lg">Sign up with</div>
    </template>
    <template v-else>
      <div class="text-center q-mb-lg">Sign in with</div>
    </template>
    <div class="flex flex-center">
      <q-btn
        class="flex flex-center q-px-lg q-py-sm q-mb-md"
        size="md"
        label="Google"
        @click="btnLogin"
        color="primary"
      />
    </div>
    <template v-if="tab === 'register'">
      <p class="text-center">Sign up with credentials</p>
    </template>
    <template v-else>
      <p class="text-center">Sign in with credentials</p>
    </template>

    <q-form>
      <q-input
        v-model="formData.email"
        outlined
        class="q-mb-md"
        type="email"
        label="Email" />
      <q-input
        v-model="formData.password"
        outlined
        class="q-mb-md"
        type="password"
        label="Password" />
      <div class="row">
        <q-space />
        <q-btn
          type="submit"
          color="primary"
          :label="tab" />
      </div>
    </q-form>
    <div class="text-center q-my-md">
      <q-btn
        v-if="tab !== 'register'"
        flat
        @click="forgotPassword"
        label="Forgot Password?"
        color="green"
        class="text-capitalize rounded-borders"
      />
    </div>
    <q-dialog v-model="resetPwdDialog">
      <ForgotPassword />
    </q-dialog>
  </div>
</template>

<script>
import ForgotPassword from "components/ForgotPassword";
export default {
  name: "AuthComponent",
  props: ['tab'],
  components: { ForgotPassword },
  data (){
    return {
      formData: {
        email: '',
        password: ''
      },
      resetPwdDialog: false
    }
  },
  methods: {
    btnLogin () {
      console.log('jahaha')
    },
    forgotPassword () {
      this.resetPwdDialog = true
    }
  }
}
</script>

<style scoped>

</style>
