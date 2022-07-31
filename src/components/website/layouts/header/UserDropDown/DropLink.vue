<template>
  <NuxtLink :to="localePath(path)">
    <div class="w-full flex items-center">
      <span>
        <!-- slot for icon   -->
        <slot />
      </span>
      <p class="ms-3">
        {{ title }}
      </p>
    </div>
  </NuxtLink>
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
  },
};
</script>
