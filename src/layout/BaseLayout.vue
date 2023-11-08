<script setup lang="ts">
import { RouterView } from 'vue-router'

import Header from '@/components/Header.vue'
import SideBar from '@/components/SideBar.vue'
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
