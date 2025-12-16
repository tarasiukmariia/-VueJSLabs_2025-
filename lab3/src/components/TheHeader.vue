<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
}

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark-theme')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark-theme')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  isDark.value = savedTheme === 'dark'
  updateTheme()
})
</script>

<template>
  <header class="header">
    <div class="logo">MyNews</div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <button @click="toggleTheme" class="theme-btn">
      {{ isDark ? '🌞 Light' : '🌙 Dark' }}
    </button>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--bg-header);
  border-bottom: 1px solid var(--border-color);
  transition: background-color 0.3s;
}

.logo {
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--text-primary);
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
}

nav a.router-link-active {
  color: var(--accent-color);
  border-bottom: 2px solid var(--accent-color);
}

.theme-btn {
  padding: 5px 10px;
  border: 1px solid var(--border-color);
  background: transparent;
  color: var(--text-primary);
  cursor: pointer;
  border-radius: 4px;
}
</style>
