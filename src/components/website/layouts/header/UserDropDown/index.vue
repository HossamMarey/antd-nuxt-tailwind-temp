<template>
  <div class="header-user-dropdown">
    <Dropdown placement="bottomRight">
      <div class="cursor-pointer">
        <img
          v-if="loggedInUser.picture"
          :src="loggedInUser.picture"
          alt
          class="rounded-full object-cover w-7 h-7 shadow"
        />
        <Avatar v-else :size="28" icon="user" />
      </div>
      <Menu slot="overlay">
        <MenuItem key="m0" class="p-0 hover:bg-white">
          <div class="py-4 hover:bg-white flex">
            <Avatar shape="square" size="large" icon="user" />
            <div class="ms-3 fex items-center">
              <h3 class="text-base">{{ loggedInUser.name }}</h3>
              <p class="text-sm">{{ loggedInUser.email }}</p>
            </div>
          </div>
        </MenuItem>
        <MenuDivider />

        <MenuItem key="m2">
          <DropLink path="/account/courses" :title="$t('HEADER_DROPDOWN_COURSES')">
            <UilBookOpen size="16px" />
          </DropLink>
        </MenuItem>

        <MenuItem key="m3">
          <DropLink path="/account/wishlist" :title="$t('HEADER_DROPDOWN_WISHLIST')">
            <UilHeart size="16px" />
          </DropLink>
        </MenuItem>

        <MenuDivider />

        <MenuItem key="m9">
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
    </Dropdown>
  </div>
</template>

<script>
import { Dropdown, Avatar, Menu } from 'ant-design-vue';

import DropLink from './DropLink.vue';

export default {
  components: {
    DropLink,
    Dropdown,
    Avatar,
    Menu,
    MenuItem: Menu.Item,
    MenuDivider: Menu.Divider,
  },
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
.header-user-dropdown .ant-dropdown-menu-item {
  padding: 0 !important;
}
</style>
