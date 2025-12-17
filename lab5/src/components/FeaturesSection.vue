<script setup lang="ts">
import Card from 'primevue/card'
import Fieldset from 'primevue/fieldset'
</script>

<template>
  <section id="features" class="features-section">
    <h2>Чому TaskFlow?</h2>

    <div class="problem-solution">
      <Fieldset legend="Проблема ❌" :toggleable="true">
        <p>Хаос у задачах, пропущені дедлайни та втрачена комунікація між відділами.</p>
      </Fieldset>
      <Fieldset legend="Рішення ✅" :toggleable="true">
        <p>Єдина платформа для планування, де кожен знає свою роль і терміни.</p>
      </Fieldset>
    </div>

    <div class="grid">
      <Card class="feature-card">
        <template #title><i class="pi pi-sync"></i> Синхронізація</template>
        <template #content>Миттєве оновлення даних на всіх пристроях.</template>
      </Card>
      <Card class="feature-card">
        <template #title><i class="pi pi-chart-line"></i> Аналітика</template>
        <template #content>Детальні звіти про продуктивність команди.</template>
      </Card>
      <Card class="feature-card">
        <template #title><i class="pi pi-shield"></i> Безпека</template>
        <template #content>Шифрування даних за найвищими стандартами.</template>
      </Card>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
h2 {
  text-align: center;
  margin-bottom: 3rem;
}
.problem-solution {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  justify-content: center;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.feature-card {
  text-align: center;
}
.feature-card i {
  font-size: 2rem;
  color: var(--p-primary-color);
  margin-bottom: 1rem;
}
</style>
