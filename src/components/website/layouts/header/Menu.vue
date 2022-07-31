<template>
  <ul class="flex flex-col lg:flex-row lg:items-center text-md font-medium text-gray-header">
    <MenuLink path="/" :title="$t('HEADER_MENU_HOME')" @closeDrawer="$emit('closeDrawer')" />
    <MenuLink path="/about" :title="$t('HEADER_MENU_ABOUT')" @closeDrawer="$emit('closeDrawer')" />
    <MenuLink
      path="/courses"
      :title="$t('HEADER_MENU_COURSES')"
      @closeDrawer="$emit('closeDrawer')"
    />
    <!-- <MenuLink path="/" :title="$t('HEADER_MENU_ACTIVITIES')" @closeDrawer="$emit('closeDrawer')" /> -->
    <MenuLink path="/blog" :title="$t('HEADER_MENU_BLOG')" @closeDrawer="$emit('closeDrawer')" />
    <!-- <MenuLink
      path="/contact"
      :title="$t('HEADER_MENU_CONTACT_US')"
      @closeDrawer="$emit('closeDrawer')"
    />-->
    <MenuLink
      v-if="!isAuth"
      path="/login"
      :title="$t('HEADER_MENU_LOGIN')"
      class-name="lg:hidden"
      @closeDrawer="$emit('closeDrawer')"
    />
  </ul>
</template>

<script>
import MenuLink from './MenuLink.vue';

export default {
  components: {
    MenuLink,
  },
  data() {
    return {
      isAuth: false,
    };
  },
};
</script>
