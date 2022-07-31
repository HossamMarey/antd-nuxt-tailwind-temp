<template>
  <!-- FOR WEBSIE PAGES  -->
  <div class="dark min-h-screen">
    <MainHeader />
    <main>
      <Nuxt />
    </main>MainFooter
  </div>
</template>

<script>
import { handleLangaugeChange } from '@/utils/langaugeChanger'
import { initDarkMode } from '@/utils/handleDarkMode'

import MainHeader from '@/components/website/layouts/header/MainHeader.vue'

export default {
  components: { MainHeader },
  data() {
    return {}
  },
  beforeCreate() {
    if (process.client) {
      const lang = localStorage?.getItem('lang') || this?.$i18n?.locale || 'ar'
      handleLangaugeChange(this, lang)
      initDarkMode(true)
    }
  },
}
</script>
