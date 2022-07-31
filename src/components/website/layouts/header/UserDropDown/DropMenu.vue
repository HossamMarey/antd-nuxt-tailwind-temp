<template>
  <Menu slot="overlay" class="mb-side-menu">
    <MenuItem key="m0" class="p-0 hover:bg-white h-auto">
      <UserInfo :user="loggedInUser" :mb="true" />
    </MenuItem>
    <MenuDivider />

    <MenuItem key="m2" @click="$emit('closeDrawer')">
      <DropLink path="/account/courses" :title="$t('HEADER_DROPDOWN_COURSES')">
        <UilBookOpen size="16px" />
      </DropLink>
    </MenuItem>

    <MenuItem key="m3" @click="$emit('closeDrawer')">
      <DropLink path="/account/wishlist" :title="$t('HEADER_DROPDOWN_WISHLIST')">
        <UilHeart size="16px" />
      </DropLink>
    </MenuItem>

    <MenuDivider />

    <MenuItem key="m9" @click="$emit('closeDrawer')">
      <div class="cursor-pointer" @click="logout">
        <div class="w-full flex items-center">
          <span>
            <UilSignOutAlt size="16px" />
          </span>
          <p class="ms-3">{{ $t('HEADER_MENU_LOGOUT') }}</p>
        </div>
      </div>
    </MenuItem>
  </Menu>
</template>

<script>
import { Menu } from 'ant-design-vue';

import DropLink from './DropLink.vue';
import UserInfo from './UserInfo.vue';

export default {
  components: {
    DropLink,
    UserInfo,
    Menu,
    MenuItem: Menu.Item,
    MenuDivider: Menu.Divider,
  },
  // data() {
  //   return {
  //     links: [
  //       {
  //         path: '/',
  //         title: 'Home',
  //         icon: UilSignOutAlt,
  //       },
  //     ],
  //   }
  // },

  computed: {
    children() {
      return this.$store.getters['service/children'];
    },
    loggedInUser() {
      return this.$store.getters['service/user'];
    },
    user() {
      return this.$store.state.auth.user;
    },
    dir() {
      return this.$i18n.locales.find((x) => x.code === this.$i18n.locale)?.dir;
    },
  },
  created() {
    // this.$store.dispatch('parent/fetch');
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$store.dispatch('service/setParentServices');
      localStorage.removeItem('child');
      location.reload();
    },
    // openInvite() {
    //   this.$modal.show('invite')
    // },
    // submitInvite(email) {
    //   this.$modal.hide('invite')
    // },
    switchChild(id, role) {
      if (role === 'student') {
        localStorage.setItem(
          'child',
          JSON.stringify(this.children.find((c) => c.id === id))
        );
      } else {
        localStorage.removeItem('child');
      }
      location.reload();
    },
  },
};
</script>

<style>
@media screen and (max-width: 640px) {
  .mb-side-menu .ant-menu-item {
    height: auto !important;
  }
}
</style>
