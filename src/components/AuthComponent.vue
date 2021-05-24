<template>
  <div>
    <div class="text-center q-mb-lg">Sign in with</div>
    <div class="flex flex-center">
      <q-btn
        class="flex flex-center q-px-lg q-py-sm q-mb-md"
        size="md"
        label="Google"
        @click="btnLogin"
        color="primary"
      />
    </div>
    <template  v-if="tab === 'register'">
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
  </div>
</template>

<script>
export default {
  name: "AuthComponent",
  props: ['tab'],
  data (){
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    btnLogin () {
      console.log('jahaha')
    }
  }
}
</script>

<style scoped>

</style>
