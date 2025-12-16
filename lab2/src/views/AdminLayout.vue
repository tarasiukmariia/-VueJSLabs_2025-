<script setup lang="ts">
import { provide, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const user = ref({ name: 'Admin User', role: 'admin' })
provide('userData', user)

const logout = () => {
  localStorage.removeItem('isAuthenticated')
  router.push('/login')
}
</script>

<template>
  <div class="admin-layout">
    <aside class="sidebar">
      <slot name="sidebar">
        <nav>
          <router-link to="/admin/dashboard">Dashboard</router-link>
          <router-link to="/admin/users">Users</router-link>
          <router-link to="/admin/reports">Reports</router-link>
        </nav>
      </slot>
    </aside>
    
    <main class="content">
      <header>
        <span>Welcome, {{ user.name }}</span>
        <button @click="logout">Logout</button>
      </header>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.admin-layout { display: flex; min-height: 100vh; }
.sidebar { width: 250px; background: #2c3e50; padding: 20px; color: white; }
.sidebar a { display: block; color: #aec0d0; text-decoration: none; padding: 10px; margin-bottom: 5px; }
.sidebar a.active-link { color: white; background: #3e5871; border-radius: 4px; }
.content { flex: 1; padding: 20px; }
header { display: flex; justify-content: space-between; margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 10px; }
</style>