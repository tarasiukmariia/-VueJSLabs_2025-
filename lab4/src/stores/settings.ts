/* eslint-disable @typescript-eslint/no-unused-vars */
import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'

export const useSettingsStore = defineStore(
  'settings',
  () => {
    const locale = ref<'ua' | 'en'>('ua')
    const { locale: i18nLocale } = useI18n()

    function setLocale(lang: 'ua' | 'en') {
      locale.value = lang
      i18nLocale.value = lang
    }

    if (locale.value) {
      i18nLocale.value = locale.value
    }

    return { locale, setLocale }
  },
  {
    persist: {
      key: 'lab4-settings-store',
      pick: ['locale'],
    },
  },
)
