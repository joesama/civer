<template>
  <div class="inset-x-0 top-0 fixed bg-civer-dark-blue border-gold border-b-8 sm:flex sm:justify-between sm:items-between sm:px-4 sm:py-3 w-full z-30">
    <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0 sm:p-r-4">
      <a href="#" class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">List your property</a>
      <a href="#" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Trips</a>
      <a href="#" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Messages</a>
    </nav>
    <div class="flex-1 items-center justify-end px-4 py-3 sm:p-0">
      <div class="sm:hidden">
        <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>
    <profile v-show="$page.nav !== null" />
  </div>
</template>

<script>
import Profile from './Profile'

export default {
  components: {
      Profile
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