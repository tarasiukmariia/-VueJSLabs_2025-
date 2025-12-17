import type { App } from 'vue'

export default {
  install: (app: App) => {
    const copyFn = async (text: string) => {
      try {
        await navigator.clipboard.writeText(text)
        return true
      } catch (err) {
        console.error('Failed to copy:', err)
        return false
      }
    }

    app.config.globalProperties.$copyToClipboard = copyFn

    app.provide('copyToClipboard', copyFn)
  },
}
