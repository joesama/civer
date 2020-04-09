<template>
  <ul :class="stylus.container">
    <li :class="stylus.li + (lastTab(path) ? ' sm:rounded-b-lg' : '')" v-for="(link,path) in menu" :key="path">
      <inertia-link :href="link.path" class="flex" :method="(link.method === undefined) ? 'get' : link.method">
        <v-icon :name="(link.icon !== undefined) ? link.icon : 'angle-double-right'" class="w-1/6"/>
        {{ link.title }}
      </inertia-link>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    stylus: Object,
    nav: [Array, Object]
  },
  components: {
  },
  methods: {
    lastTab : function (path) {
      return Object.keys(this.nav)[Object.keys(this.nav).length-1] === path
    }
  },
  data: function() {
    return {
      menu: this.nav
    };
  }
};
</script>
