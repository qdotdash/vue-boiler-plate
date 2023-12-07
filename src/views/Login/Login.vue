<script setup lang="ts">
import { computed, ref } from 'vue'

import router from '@/router'
import { useAuthStore } from '@/stores/authStore'
import InputField from '@/components/InputField.vue'
import CustomButton from '@/components/CustomButton.vue'
import { ROUTES } from '@/constants/routes'

import { login } from './api'


const authStore = useAuthStore()

const SAMPLE_LOGIN_CREDENTIALS = {
  username: 'user1',
  password: 'password123'
}

const { data, isError, makeCall: loginUser } = login()

const username = ref(SAMPLE_LOGIN_CREDENTIALS.username)
const password = ref(SAMPLE_LOGIN_CREDENTIALS.password)
const hasLoginError = computed(() => isError.value)

const handleLoginPress = async () => {
  await loginUser({ username: username.value, password: password.value })

  const authResponse = data.value

  if (authResponse) {
    authStore.setAuthToken(authResponse.authToken)
    router.push(ROUTES.DEFAULT)
  }
}
</script>

<template>
  <div class="h-screen">
    <div class="flex h-full justify-center items-center">
      <div class="bg-slate-100 h-[300px] w-[300px] rounded-lg p-4 flex flex-col">
        <div class="self-center font-bold">Login</div>
        <div class="flex-1 justify-center items-center flex flex-col">
          <InputField label="Username" v-model:input-value="username" :error="hasLoginError" />
          <InputField
            label="Password"
            class="mt-4"
            v-model:input-value="password"
            :error="hasLoginError"
          />
          <CustomButton label="Login" class="mt-4" @click="handleLoginPress" />
        </div>
      </div>
    </div>
  </div>
</template>
