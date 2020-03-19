<template>
  <ul :class="stylus.container">
    <li :class="stylus.li" v-for="(link,index) in menu" :key="index">
      <inertia-link href="/logout" method="post">Logout</inertia-link>
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
  data: function() {
    return {
      menu: this.nav
    };
  }
};
</script>
