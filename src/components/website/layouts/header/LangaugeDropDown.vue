<template>
  <div>
    <div
      v-if="locale === 'ar'"
      class="flex items-center cursor-pointer hover:text-secondary"
      @click="changeLang('en')"
    >
      <strong class="font-Cairo">العربية</strong>
    </div>
    <div
      v-if="locale === 'en'"
      class="flex items-center cursor-pointer hover:text-secondary"
      @click="changeLang('ar')"
    >
      <strong class="font-Poppins">English</strong>
    </div>
  </div>
</template>

<script>
import { handleLangaugeChange } from '@/utils/langaugeChanger';
export default {
  computed: {
    locale() {
      return this.$i18n.locale;
    },
  },
  methods: {
    changeLang(lang) {
      handleLangaugeChange(this, lang);
    },
  },
};
</script>
