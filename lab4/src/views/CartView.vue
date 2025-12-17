<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
</script>

<template>
  <div class="page">
    <h1>{{ $t('cart.title') }}</h1>

    <div v-if="cart.items.length === 0">{{ $t('cart.empty') }}</div>

    <div v-else>
      <div v-for="item in cart.items" :key="item.id" class="cart-item">
        <span>{{ item.title }} (x{{ item.qty }})</span>
        <span>{{ item.price * item.qty }} $</span>
        <button @click="cart.removeItem(item.id)">{{ $t('buttons.remove') }}</button>
      </div>

      <hr />
      <h3>{{ $t('cart.total') }} {{ cart.totalPrice }} $</h3>
      <button @click="cart.clearCart()" class="clear-btn">{{ $t('buttons.clear') }}</button>
    </div>
  </div>
</template>

<style scoped>
.page {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  background: #f9f9f9;
}
.clear-btn {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}
</style>
