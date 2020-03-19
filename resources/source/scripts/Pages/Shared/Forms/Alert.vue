<template>
  <div
    v-if="Object.keys($page.errors).length > 0"
    class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-2"
    role="alert"
  >
    <p>{{ $page.errors[Object.keys($page.errors)[0]][0] }}</p>
  </div>
</template>
<script>
export default {
  name: "Alert",
  props: {},
  data() {
    return {};
  }
};
</script>
