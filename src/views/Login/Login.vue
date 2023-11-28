<script setup lang="ts">
import { watchEffect } from 'vue'
import { login } from './api'

const { data, isError } = login({
  username: 'user1',
  password: 'password123'
})

watchEffect(() => {
  console.log('In login', data, isError)
})
</script>

<template>
  <div>Login</div>
</template>
