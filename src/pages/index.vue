<template>
  <div>
    <h1>Hello</h1>
    <div class="w-12 h-12 bg-gray-500"></div>
    <Button type="primary" @click="toggleDarkMode">OKK</Button>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue';
import { toggleDarkMode } from '@/utils/handleDarkMode';
export default {
  name: 'IndexPage',
  components: {
    Button,
  },
  methods: {
    toggleDarkMode()  {toggleDarkMode()}
  }
};
</script>
