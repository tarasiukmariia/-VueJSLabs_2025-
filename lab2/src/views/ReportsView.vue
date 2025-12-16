<script setup lang="ts">
const reports = [
  { id: 1, title: 'Annual Report', status: 'Done' },
  { id: 2, title: 'Sales Q3', status: 'Pending' },
  { id: 3, title: 'Marketing', status: 'In Progress' },
]
</script>

<template>
  <div>
    <h2>Reports</h2>
    <ul class="report-list">
      <li v-for="item in reports" :key="item.id" class="report-item">
        <slot name="row" :item="item">
          <span>{{ item.title }} - {{ item.status }}</span>
        </slot>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.report-item { padding: 10px; border-bottom: 1px solid #eee; }
</style>