<script setup lang="ts">
defineProps<{
  inputValue: string
  label?: string
  error?: boolean
}>()

defineEmits(['update:inputValue'])
</script>

<template>
  <div class="w-full">
    <div v-if="label">{{ label }}</div>
    <input
      class="bg-slate-200 p-2 rounded-lg w-full"
      :value="inputValue"
      @input="$emit('update:inputValue', ($event.target as HTMLInputElement).value)"
      :error="error"
    />
  </div>
</template>
