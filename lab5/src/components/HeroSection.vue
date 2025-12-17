<!-- eslint-disable @typescript-eslint/no-unsafe-function-type -->
<script setup lang="ts">
import Button from 'primevue/button'
import { inject } from 'vue'
import { useToast } from 'primevue/usetoast'

const toast = useToast()
const copyToClipboard = inject<Function>('copyToClipboard')

const promoCode = 'TASK2025'

const copyPromo = async () => {
  if (copyToClipboard) {
    const success = await copyToClipboard(promoCode)
    if (success) {
      toast.add({
        severity: 'success',
        summary: 'Успіх',
        detail: 'Промокод скопійовано!',
        life: 3000,
      })
    }
  }
}
</script>

<template>
  <section id="hero" class="hero">
    <div class="content">
      <h1>Керуйте задачами легко з TaskFlow</h1>
      <p>Підвищіть продуктивність вашої команди вже сьогодні.</p>
      <div class="actions">
        <Button label="Почати безкоштовно" icon="pi pi-check" size="large" />
        <Button
          label="Скопіювати промокод"
          icon="pi pi-copy"
          severity="secondary"
          @click="copyPromo"
        />
      </div>
      <p class="promo-text">
        Промокод: <strong>{{ promoCode }}</strong>
      </p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 5rem 2rem;
  background: var(--p-surface-50);
  border-bottom: 1px solid var(--p-surface-200);
}
.content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--p-text-color);
}
.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}
.promo-text {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--p-text-muted-color);
}
</style>
