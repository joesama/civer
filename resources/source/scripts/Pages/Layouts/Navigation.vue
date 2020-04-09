<template>
  <div class="inset-x-0 top-0 fixed bg-civer-dark-blue border-gold border-b-8 sm:flex sm:justify-between sm:items-between sm:px-4 sm:py-3 w-full z-30">
    <div style="min-width:48;max-width: 120px; max-height: 36px;" class="pr-4 text-center">
    <img
      v-if="$page.site.logo !== undefined"
      :src="$page.site.logo"
      class="object-center object-fill h-full"
    />
    </div>
    <nav-link :class="isOpen ? 'block' : 'hidden'" v-bind:nav="$page.nav.menu" />
    <div class="flex-1 items-center justify-end px-3 py-2 sm:p-0">
      <div class="sm:hidden">
        <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>
    <profile v-show="$page.nav.user !== null" />
  </div>
</template>

<script>
import Profile from './Profile'
import NavLink from './../Links/NavLink'

export default {
  components: {
      Profile,
      NavLink
  },
  props: {},
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
  }
}
</script>