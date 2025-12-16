import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface CartItem {
  id: number
  title: string
  price: number
  qty: number
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])

  const totalCount = computed(() => items.value.reduce((acc, item) => acc + item.qty, 0))
  const totalPrice = computed(() =>
    items.value.reduce((acc, item) => acc + item.price * item.qty, 0),
  )

  function addItem(product: { id: number; title: string; price: number }) {
    const existing = items.value.find((i) => i.id === product.id)
    if (existing) {
      existing.qty++
    } else {
      items.value.push({ ...product, qty: 1 })
    }
  }

  function removeItem(id: number) {
    items.value = items.value.filter((i) => i.id !== id)
  }

  function clearCart() {
    items.value = []
  }

  return { items, totalCount, totalPrice, addItem, removeItem, clearCart }
})
