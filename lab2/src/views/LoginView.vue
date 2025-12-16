<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthLayout from '../components/AuthLayout.vue'
import BaseInput from '../components/BaseInput.vue'

const email = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = () => {
  if (email.value && password.value) {
    localStorage.setItem('isAuthenticated', 'true')
    router.push('/admin/dashboard')
  } else {
    alert('Заповніть всі поля!')
  }
}
</script>

<template>
  <AuthLayout>
    <h1>Вхід</h1>
    <form @submit.prevent="handleLogin">
      <BaseInput label="Email" v-model="email" type="email" />
      <BaseInput label="Password" v-model="password" type="password" />
      <button type="submit" class="btn">Увійти</button>
    </form>
    <p><router-link to="/register">Зареєструватися</router-link></p>
  </AuthLayout>
</template>

<style scoped>
.btn { width: 100%; padding: 10px; background: #42b983; color: white; border: none; border-radius: 4px; cursor: pointer; }
h1 { text-align: center; margin-bottom: 1.5rem; }
p { text-align: center; margin-top: 1rem; }
</style>