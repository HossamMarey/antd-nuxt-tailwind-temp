<template>
  <Nuxt />
</template>

<script>
import { handleLangaugeChange } from '@/utils/langaugeChanger'
import { initDarkMode } from '@/utils/handleDarkMode'

export default {
  data() {
    return {}
  },
  created() {
    if (process.client) {
      initDarkMode()
      const lang = localStorage?.getItem('lang') || this?.$i18n?.locale || 'ar'
      handleLangaugeChange(this, lang)
    }
  },
}
</script>
