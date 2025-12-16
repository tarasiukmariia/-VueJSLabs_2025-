export interface NewsItem {
  id: number
  title: string
  description: string
  content: string
  date: string
  image: string
}

export const newsList: NewsItem[] = [
  {
    id: 1,
    title: 'Vue 3.5 Released',
    description: 'Нові можливості та оптимізація продуктивності.',
    content: "Vue 3.5 приносить покращення реактивності та зменшення споживання пам'яті...",
    date: '2025-02-20',
    image: 'https://vuejs.org/images/logo.png',
  },
  {
    id: 2,
    title: 'TypeScript in 2025',
    description: 'Чому типізація стає стандартом.',
    content: 'Все більше розробників переходять на TS через його надійність...',
    date: '2025-02-18',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
  },
  {
    id: 3,
    title: 'CSS Modules vs Scoped',
    description: 'Що обрати для вашого проекту?',
    content: 'Розглянемо переваги та недоліки різних підходів до стилізації...',
    date: '2025-02-15',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
  },
]
