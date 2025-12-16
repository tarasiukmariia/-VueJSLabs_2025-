<script setup lang="ts">
import { newsList } from '../data/news'
import NewsCard from '../components/NewsCard.vue'
</script>

<template>
  <div class="home">
    <h1>Останні новини</h1>
    <div class="news-grid">
      <NewsCard v-for="news in newsList" :key="news.id" :news="news" />
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
</style>
