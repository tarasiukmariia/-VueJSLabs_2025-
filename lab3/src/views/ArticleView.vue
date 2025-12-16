<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { newsList } from '../data/news'
import AdModal from '../components/AdModal.vue'

const route = useRoute()
const newsId = Number(route.params.id)
const article = newsList.find((n) => n.id === newsId)

const showModal = ref(false)

const bannerColor = ref('#ff9800')
</script>

<template>
  <div v-if="article" class="article-page">
    <div class="banner" @click="showModal = true">Реклама (Клікни мене!)</div>

    <h1>{{ article.title }}</h1>
    <img :src="article.image" class="main-img" />
    <div class="content">{{ article.content }}</div>

    <AdModal :is-open="showModal" @close="showModal = false" />
  </div>
  <div v-else>Новину не знайдено</div>
</template>

<style scoped>
.article-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
.main-img {
  width: 100%;
  border-radius: 8px;
  margin: 1rem 0;
}

.banner {
  background-color: v-bind(bannerColor);
  color: white;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  font-weight: bold;
  margin-bottom: 20px;
}
.banner:hover {
  opacity: 0.9;
}
</style>
