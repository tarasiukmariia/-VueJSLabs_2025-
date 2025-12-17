<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import PricingSection from '@/components/PricingSection.vue'
import FaqSection from '@/components/FaqSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import Toast from 'primevue/toast'
</script>

<template>
  <Toast />
  <AppHeader />
  <main>
    <HeroSection />
    <FeaturesSection />
    <PricingSection />
    <FaqSection />
    <ContactSection />
  </main>
  <footer class="footer">
    <p>© 2025 TaskFlow Inc. | Created with Vue 3 & PrimeVue</p>
  </footer>
</template>

<style scoped>
.footer {
  padding: 2rem;
  text-align: center;
  background: var(--p-surface-900);
  color: var(--p-surface-0);
  margin-top: auto;
}
</style>
