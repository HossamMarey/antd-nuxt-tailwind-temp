<template>
  <div
    class="py-4 hover:bg-white flex w-min"
    :class="!mb && 'ps-4'"
    :dir="mb && 'ltr'"
  >
    <Avatar shape="square" size="large" icon="user" class="flex-shrink-0" />
    <div class="ms-3 fex items-center">
      <h3
        class="
          text-base
          break-all
          whitespace-nowrap
          verflow-hidden
          overflow-ellipsis
        "
      >
        {{ user.name }}
      </h3>
      <p
        class="
          text-xs
          lg:text-sm
          w-28
          lg:w-full
          overflow-hidden overflow-ellipsis
          whitespace-nowrap
        "
      >
        {{ user.email }}
      </p>
    </div>
  </div>
</template>
<script>
import { Avatar } from 'ant-design-vue';
export default {
  components: {
    Avatar,
  },
  props: {
    user: {
      type: Object,
      default: () => {},
    },
    mb: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
