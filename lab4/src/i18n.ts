/* eslint-disable @typescript-eslint/no-explicit-any */
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ua from './locales/ua.json'

const snakeModifier = (str: any) => {
  if (typeof str === 'string') {
    return str.split(' ').join('_').toUpperCase()
  }
  return str
}

export default createI18n({
  legacy: false,
  locale: 'ua',
  fallbackLocale: 'en',
  messages: { en, ua },
  modifiers: {
    snake: snakeModifier,
  },
})
