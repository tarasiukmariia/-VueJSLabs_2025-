<script setup lang="ts">
defineProps<{ isOpen: boolean }>()
defineEmits(['close'])
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-backdrop" @click="$emit('close')">
        <div class="modal-content" @click.stop>
          <h2>Спеціальна пропозиція!</h2>
          <p>Купуйте курси Vue.js зі знижкою 50%!</p>
          <button @click="$emit('close')">Закрити</button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background: var(--card-bg);
  color: var(--text-primary);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  width: 300px;
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
