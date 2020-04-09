<template>
  <nav class="px-2 pt-2 pb-4 sm:flex sm:flex-shrink-0 sm:p-0 sm:p-r-4 leading-relaxed" v-on-clickaway="away">
    <div class="relative px-2 pr-4 sm:min-w-0 " v-for="(link,path) in menu" :key="path">
      <div class="py-1" v-if="link.sub === undefined" > 
        <inertia-link class="py-1" @click="addOpen(path)" :href="link.path" method="get">
          <v-icon class="civer-gold fill-current" :name="(link.icon !== undefined) ? link.icon : 'link'" :label="link.title"/>
          {{ link.title }}
        </inertia-link>
      </div>
      <div v-else>
        <button class="py-1" @click="addOpen(path)">
          <v-icon class="civer-gold fill-current" :name="(link.icon !== undefined) ? link.icon : 'angle-right'" :label="link.title"/>
          {{ link.title }}
        </button>
        <div :class="(currentOpen === path) ? 'block' : 'hidden'">
          <menu-link v-bind="getTextLink(link.sub)"/>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import MenuLink from "./TextLink";
import { directive as onClickaway } from 'vue-clickaway';

export default {
  directives: {
    onClickaway: onClickaway,
  },
  props: {
    stylus: Object,
    nav: [Array, Object]
  },
  components: {
    MenuLink
  },
  data: function() {
    return {
      menu: this.nav,
      currentOpen: null,
    };
  },
  methods: {
    away: function(){
      this.currentOpen = null
    },
    addOpen: function(item){
      this.currentOpen = (this.currentOpen === item) ? false : item;
    },
    getTextLink: function(menu) {
      return {
        stylus: {
          container:
            "sm:absolute top-0 list-reset sm:flex-1 items-center sm:mt-12 sm:w-56 rounded-b-lg",
          li: "py-2 px-2 bg-civer-gold text-sm leading-tight"
        },
        nav: menu
      };
    }
  }
};
</script>
