<template>
  <div>
    <div class="flex hover:text-secondary text-lg cursor-pointer" @click="showDrawer">bars</div>

    <Drawer
      :body-style="{ padding: 0 }"
      :placement="locale === 'ar' ? 'right' : 'left'"
      :visible="visible"
      :destroyOnClose="true"
      @close="onClose"
    >
      <div class="w-full flex flex-col min-h-screen bg-bg-dark">
        <div class="p-6 border-b border-border" dir="ltr">
          <Logo />
        </div>
        <div class="flex-1 flex flex-col">
          <div class="flex-1">
            <HeaderMenu @closeDrawer="onClose" />
          </div>
          <div class="w-full p-4 mt-4 border-t border-border flex md:hidden">
            <langauge-drop-down />
          </div>
        </div>
      </div>
    </Drawer>
  </div>
</template>

<script>
import { Drawer } from 'ant-design-vue'

import Logo from './Logo.vue'
import HeaderMenu from './Menu.vue'
import LangaugeDropDown from './LangaugeDropDown.vue'

export default {
  components: {
    Logo,
    HeaderMenu,
    LangaugeDropDown,
    Drawer,
  },
  data() {
    return {
      visible: false,
    }
  },
  computed: {
    locale() {
      return this.$i18n.locale
    },
  },
  methods: {
    showDrawer() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
  },
}
</script>
