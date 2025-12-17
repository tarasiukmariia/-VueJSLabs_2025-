<script setup lang="ts">
import { ref, computed } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'

const userCount = ref(1)
const basePrice = 100

const estimatedCost = computed(() => userCount.value * basePrice)

const plans = [
  {
    name: 'Start',
    price: '0',
    features: ['1 Користувач', '5 Проектів', 'Базова підтримка'],
    icon: 'pi pi-user',
  },
  {
    name: 'Team',
    price: '400',
    features: ['До 10 користувачів', 'Необмежені проекти', 'Аналітика'],
    icon: 'pi pi-users',
  },
  {
    name: 'Pro',
    price: '1000',
    features: ['Безліміт', 'Пріоритетна підтримка', 'API доступ'],
    icon: 'pi pi-star-fill',
  },
]
</script>

<template>
  <section id="pricing" class="pricing-section">
    <h2>Тарифи</h2>
    <div class="plans-grid">
      <Card v-for="plan in plans" :key="plan.name" class="plan-card">
        <template #title>
          <i :class="plan.icon" style="font-size: 2rem"></i><br />
          {{ plan.name }}
        </template>
        <template #subtitle>{{ plan.price }} грн/міс</template>
        <template #content>
          <ul>
            <li v-for="feature in plan.features" :key="feature">
              <i class="pi pi-check" style="color: green"></i> {{ feature }}
            </li>
          </ul>
        </template>
        <template #footer>
          <Button label="Обрати план" class="w-full" />
        </template>
      </Card>
    </div>

    <div class="calculator">
      <h3>Калькулятор вартості (Enterprise)</h3>
      <div class="calc-row">
        <label>Кількість користувачів:</label>
        <InputNumber v-model="userCount" showButtons :min="1" :max="1000" />
      </div>
      <p class="total">
        Орієнтовна вартість: <strong>{{ estimatedCost }} грн/міс</strong>
      </p>
    </div>
  </section>
</template>

<style scoped>
.pricing-section {
  padding: 4rem 2rem;
  background: var(--p-surface-50);
}
h2,
h3 {
  text-align: center;
  margin-bottom: 2rem;
}
.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 3rem;
}
.plan-card ul {
  list-style: none;
  padding: 0;
}
.plan-card li {
  margin-bottom: 0.5rem;
}
.calculator {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: var(--p-card-shadow);
  text-align: center;
}
.calc-row {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.total {
  font-size: 1.2rem;
  margin-top: 1rem;
  color: var(--p-primary-color);
}
</style>
