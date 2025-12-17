<script setup lang="ts">
import { useProductsStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'

const productStore = useProductsStore()
const cartStore = useCartStore()
</script>

<template>
  <div class="page">
    <h1>{{ $t('nav.products.snake') }}</h1>

    <div class="grid">
      <div v-for="product in productStore.products" :key="product.id" class="card">
        <h3>{{ product.title }}</h3>
        <p>{{ product.price }} $</p>
        <button @click="cartStore.addItem(product)">{{ $t('buttons.add') }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
.card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}
button {
  background: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
}
</style>
