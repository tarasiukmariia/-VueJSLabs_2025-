<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useSettingsStore } from '@/stores/settings'
import { useCartStore } from '@/stores/cart'

const settings = useSettingsStore()
const cart = useCartStore()
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">{{ $t('nav.products') }}</RouterLink>
        <RouterLink to="/cart">{{ $t('nav.cart', { count: cart.totalCount }) }}</RouterLink>
        <RouterLink to="/profile">{{ $t('nav.profile') }}</RouterLink>
      </nav>

      <div class="lang-switch">
        <button @click="settings.setLocale('ua')" :class="{ active: settings.locale === 'ua' }">
          UA
        </button>
        <button @click="settings.setLocale('en')" :class="{ active: settings.locale === 'en' }">
          EN
        </button>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background: #333;
  padding: 1rem;
  color: white;
  margin-bottom: 20px;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
}
nav a {
  color: white;
  margin-right: 15px;
  text-decoration: none;
}
nav a.router-link-active {
  font-weight: bold;
  color: #42b983;
}
.lang-switch button {
  background: none;
  border: 1px solid white;
  color: white;
  margin-left: 5px;
  cursor: pointer;
}
.lang-switch button.active {
  background: #42b983;
  border-color: #42b983;
}
</style>
