<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref, inject } from 'vue'
import DashboardOverview from '../components/DashboardOverview.vue'
import DashboardActivity from '../components/DashboardActivity.vue'

const user = inject('userData') as any

const currentTab = ref('Overview')
const tabs = {
  Overview: DashboardOverview,
  Activity: DashboardActivity
}
</script>

<template>
  <div>
    <h2>Dashboard</h2>
    <p v-if="user">Role: {{ user.role }}</p>
    
    <div class="tabs">
      <button 
        v-for="(_, tab) in tabs" 
        :key="tab" 
        @click="currentTab = tab"
        :class="{ active: currentTab === tab }"
      >
        {{ tab }}
      </button>
    </div>

    <div class="tab-panel">
      <KeepAlive include="DashboardOverview">
        <component :is="tabs[currentTab]" />
      </KeepAlive>
    </div>
  </div>
</template>

<style scoped>
.tabs button { padding: 10px 20px; margin-right: 5px; cursor: pointer; }
.tabs button.active { background: #42b983; color: white; border-color: #42b983; }
.tab-panel { border: 1px solid #ccc; padding: 20px; margin-top: 10px; }
</style>