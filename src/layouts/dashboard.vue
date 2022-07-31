<template>
  <!-- FOR DASHBOARD PAGES  -->
  <div class="dark">
    dash layout
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import { handleLangaugeChange } from '@/utils/langaugeChanger'
import { initDarkMode } from '@/utils/handleDarkMode'

export default {
  components: {},
  // middleware: 'protected',
  data() {
    return {}
  },
  beforeCreate() {
    if (process.client) {
      const lang = localStorage?.getItem('lang') || this?.$i18n?.locale || 'ar'
      handleLangaugeChange(this, lang)
      initDarkMode()
    }
  },
}
</script>
