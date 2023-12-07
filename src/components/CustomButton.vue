<script setup lang="ts">
defineProps<{
  label: string
}>()

const emits = defineEmits(['click'])

const onClick = () => {
  emits('click')
}
</script>

<template>
  <div class="w-full">
    <button @click="onClick" class="bg-slate-500 rounded-md p-2 text-white w-full">Login</button>
  </div>
</template>
