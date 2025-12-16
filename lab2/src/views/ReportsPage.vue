<script setup lang="ts">
import ReportsView from './ReportsView.vue';
</script>

<template>
  <ReportsView>
    <template #row="{ item }">
      <strong>{{ item.title }}</strong> 
      <span :style="{ color: item.status === 'Done' ? 'green' : 'orange' }">
        ({{ item.status }})
      </span>
    </template>
  </ReportsView>
</template>