<template>
  <layout>
      <div class="p-2">
          <div class="block float-right w-36">
            <inertia-link v-show="system !== null"  href="/">
                <form-button btn-icon-right="key" btn-label="input.acl.syn" />
            </inertia-link>
          </div>
      </div>
  </layout>
</template>

<script>
import Layout from "./../Layouts/Layout";
import FormButton from "./../Shared/Buttons/ButtonWithIcon";

export default {
  components: {
    FormButton,
    Layout
  },
  props: {
    system: Object
  },
  data: function() {
    return {
      setup: {
        name: null,
        code: null,
        admin: null,
        email: null
      }
    };
  },
  methods: {
    submit() {
      this.$inertia.post("/acl/save", this.setup);
    }
  }
};
</script>
