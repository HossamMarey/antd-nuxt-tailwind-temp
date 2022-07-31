<template>
  <li class="lg:mx-3" @click="$emit('closeDrawer')">
    <NuxtLink
      :to="localePath(path)"
      :class="className"
      class="hover:text-bg-dark lg:hover:text-primary p-4 lg:py-2 lg:px-2 hover:bg-primary-light lg:hover:bg-transparent block lg:inline-block font-medium border-b lg:border-0 lg:border-b-2 border-border lg:border-transparent lg:hover:border-primary-light"
    >{{ title }}</NuxtLink>
  </li>
</template>
<script>
export default {
  props: {
    path: {
      type: String,
      default: '/',
    },
    title: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
  },
}
</script>
