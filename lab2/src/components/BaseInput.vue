<script setup lang="ts">
const model = defineModel<string>()

defineProps<{
  label: string
  type?: string
  error?: string
}>()
</script>

<template>
  <div class="input-wrapper">
    <label v-if="label">{{ label }}</label>
    <input 
      :type="type || 'text'"
      v-model="model"
      class="input-field"
      :class="{ 'has-error': error }"
    />
    <span v-if="error" class="error-msg">{{ error }}</span>
  </div>
</template>

<style scoped>
.input-wrapper { display: flex; flex-direction: column; margin-bottom: 1rem; }
.input-field { padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
.has-error { border-color: red; }
.error-msg { color: red; font-size: 0.8rem; margin-top: 4px; }
</style>