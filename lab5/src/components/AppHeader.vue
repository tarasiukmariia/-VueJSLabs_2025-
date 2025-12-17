<script setup lang="ts">
import Menubar from 'primevue/menubar'
import { ref } from 'vue'

const items = ref([
  { label: 'Головна', icon: 'pi pi-home', url: '#hero' },
  { label: 'Переваги', icon: 'pi pi-star', url: '#features' },
  { label: 'Тарифи', icon: 'pi pi-wallet', url: '#pricing' },
  { label: 'Контакти', icon: 'pi pi-envelope', url: '#contact' },
])
</script>

<template>
  <div class="header-wrapper">
    <Menubar :model="items">
      <template #start>
        <span class="logo">TaskFlow</span>
      </template>
      <template #item="{ item, props }">
        <a :href="item.url" v-bind="props.action" class="menu-link">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </template>
    </Menubar>
  </div>
</template>

<style scoped>
.header-wrapper {
  position: sticky;
  top: 0;
  z-index: 1000;
}
.logo {
  font-weight: bold;
  font-size: 1.5rem;
  margin-right: 1rem;
  color: var(--p-primary-color);
}
.menu-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
