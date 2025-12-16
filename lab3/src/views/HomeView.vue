<script setup lang="ts">
import { newsList } from '../data/news'
</script>

<template>
  <div class="home">
    <h1>Останні новини</h1>
    <div class="news-grid">
      <div v-for="news in newsList" :key="news.id" class="temp-card">
        <h3>{{ news.title }}</h3>
        <p>{{ news.description }}</p>
        <router-link :to="'/article/' + news.id">Читати далі...</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
.temp-card {
  padding: 1rem;
  border: 1px solid var(--border-color);
  background: var(--card-bg);
  border-radius: 8px;
}
</style>
