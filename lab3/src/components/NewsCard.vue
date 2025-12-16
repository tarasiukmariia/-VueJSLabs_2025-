<script setup lang="ts">
import type { NewsItem } from '../data/news'
import classes from './NewsCard.module.css'

defineProps<{ news: NewsItem }>()
</script>

<template>
  <div :class="classes.card">
    <img :src="news.image" alt="news image" :class="classes.image" />
    <div :class="classes.content">
      <h3 :class="classes.title">{{ news.title }}</h3>
      <p :class="classes.date">{{ news.date }}</p>
      <p>{{ news.description }}</p>
      <router-link :to="`/article/${news.id}`" class="read-more">Читати...</router-link>
    </div>
  </div>
</template>

<style scoped>
.read-more {
  display: inline-block;
  margin-top: 10px;
  color: var(--accent-color);
  font-weight: bold;
}
</style>
