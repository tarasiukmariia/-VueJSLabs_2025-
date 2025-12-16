<script setup lang="ts">
import { ref, computed } from 'vue'
import AuthLayout from '../components/AuthLayout.vue'
import BaseInput from '../components/BaseInput.vue'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const router = useRouter()

const passwordsMatch = computed(() => password.value === confirmPassword.value)
const isValid = computed(() => name.value && email.value && password.value && passwordsMatch.value)

const handleRegister = () => {
  if (isValid.value) {
    alert('Реєстрація успішна! Увійдіть.')
    router.push('/login')
  }
}
</script>

<template>
  <AuthLayout>
    <h1>Реєстрація</h1>
    <form @submit.prevent="handleRegister">
      <BaseInput label="Ім'я" v-model="name" />
      <BaseInput label="Email" v-model="email" type="email" />
      <BaseInput label="Пароль" v-model="password" type="password" />
      <BaseInput 
        label="Повторіть пароль" 
        v-model="confirmPassword" 
        type="password"
        :error="!passwordsMatch && confirmPassword ? 'Паролі не співпадають' : ''"
      />
      <button type="submit" class="btn" :disabled="!isValid">Зареєструватися</button>
    </form>
    <p><router-link to="/login">Вже є акаунт?</router-link></p>
  </AuthLayout>
</template>

<style scoped>
.btn { width: 100%; padding: 10px; background: #35495e; color: white; border: none; border-radius: 4px; cursor: pointer; }
.btn:disabled { background: #ccc; cursor: not-allowed; }
h1 { text-align: center; margin-bottom: 1.5rem; }
p { text-align: center; margin-top: 1rem; }
</style>