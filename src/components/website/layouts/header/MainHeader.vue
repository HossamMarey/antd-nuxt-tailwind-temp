<template>
  <header class="w-full shadow-md bg-bg-dark">
    <div class="container">
      <div class="py-1 lg:py-2 flex items-center justify-between">
        <div class="flex items-center">
          <!-- mobile side drawer & menu icon  -->
          <div class="me-5 flex lg:hidden">
            <MobileHeader />
          </div>
          <!-- wensite logo  -->
          <Logo />
        </div>
        <!-- nav menu only large screens  -->
        <div class="hidden lg:flex">
          <Menu />
        </div>
        <!-- side icons  -->
        <div class="flex items-center">
          <!-- langauage changer upve tablet screens  -->
          <div class="hidden md:flex me-4 md:me-6">
            <LangaugeDropDown />
          </div>

          <!-- login btn  -->
          <Button v-if="!isAuth" type="primary" size="large" class="text-base">
            <NuxtLink :to="localePath('/login')">{{ $t('HEADER_MENU_LOGIN') }}</NuxtLink>
          </Button>
          <!-- user dropdown if auth  -->
          <div v-else class="hidden lg:flex">
            <UserDropDown />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>


<script>
import { Button } from 'ant-design-vue'
import Logo from './Logo.vue'
import Menu from './Menu.vue'
import LangaugeDropDown from './LangaugeDropDown.vue'
import MobileHeader from './MobileHeader.vue'
import UserDropDown from './UserDropDown/index.vue'
export default {
  components: {
    Button,
    Logo,
    Menu,
    LangaugeDropDown,
    MobileHeader,
    UserDropDown,
  },
  data() {
    return {
      isAuth: false,
    }
  },
}
</script>