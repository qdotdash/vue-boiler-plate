<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

import Header from '@/components/Header.vue'
import SideBar from '@/components/SideBar.vue'

import { getProtectedApi } from './api'

const { data, isError, makeCall: getProtected } = getProtectedApi()

onMounted(async () => {
  await getProtected()

  if (!isError) {
    console.log(data.value?.data)
  }
})
</script>

<template>
  <div class="pt-12 pl-8 h-screen">
    <Header />
    <SideBar />
    <div>
      <RouterView />
    </div>
  </div>
</template>
