<template>
  <div class="container py-10 flex items-center justify-center min-h-screen">
    <!-- 404 error  -->
    <div
      v-if="statusCode === 404"
      class="text-center w-full md:w-3/5 xl:w-2/5 flex flex-col items-center justify-center"
    >
      <!-- <img
        src="@/assets/img/error/error-notfound.svg"
        alt="404 icon"
        class="w-full h-72 object-contain"
      />-->
      <h1 class="text-lg lg:text-xl mt-4 md:mt-6">{{ $t('ERROR_PAGE_404_TITLE') }}</h1>
      <p class="text-base mt-1 lg:mt-2">{{ $t('ERROR_PAGE_404_SUB_TITLE') }}</p>

      <Button type="primary" size="large" class="w-auto md:w-60 lg:w-72 mt-4 md:mt-6">
        <NuxtLink :to="localePath(`/`)">{{ $t('ERROR_PAGE_404_BUTTON') }}</NuxtLink>
      </Button>
    </div>

    <!-- other error  -->
    <div
      v-else
      class="text-center w-full md:w-3/5 xl:w-2/5 flex flex-col items-center justify-center"
    >
      <!-- <img
        src="@/assets/img/error/error-server.svg"
        alt="server error icon"
        class="w-full md:w-11/12 lg:w-3/4 object-contain"
      />-->
      <h1 class="text-lg lg:text-xl mt-4 md:mt-6">{{ $t('ERROR_PAGE_SERVER_TITLE') }}</h1>
      <p class="text-base mt-1 lg:mt-2">{{ $t('ERROR_PAGE_SERVER_SUB_TITLE') }}</p>

      <Button type="primary" size="large" class="w-auto md:w-60 lg:w-72 mt-4 md:mt-6">
        <NuxtLink :to="localePath(`/`)">{{ $t('ERROR_PAGE_SERVER_BUTTON') }}</NuxtLink>
      </Button>
    </div>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'
import { handleLangaugeChange } from '@/utils/langaugeChanger'
import { initDarkMode } from '@/utils/handleDarkMode'
export default {
  // you can set a custom layout for the error page
  components: { Button },
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      statusCode: 404,
    }
  },
  created() {
    if (process.client) {
      initDarkMode()
      const lang = localStorage?.getItem('lang') || this?.$i18n?.locale || 'ar'
      handleLangaugeChange(this, lang)
    }
    if (this.$route && this.$route.path.includes('/sorry')) {
      this.statusCode = 500
    } else if (this.error && this.error.statusCode) {
      this.statusCode = this.error.statusCode
    }
  },
}
</script>
