<template>
  <div class="gradient-blue civer h-screen w-screen">
    <div class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
      <div
        class="block rounded-lg outline-no shadow-lg w-3/4 bg-white py-8"
      >
        <div
          class="font-medium subpixel-antialiased tracking-wider leading-tight text-center mx-6 mb-6 font-bold"
        >
          <img src="/images/CIVER.png"
            class="oobject-cover m-auto object-center mb-2"
          />
          <span class="block text-2xl font-hairline">{{ __('input.setup.title') }}</span>
        </div>
        <form class="form-horizontal w-full px-4" method="POST" @submit.prevent="submit">
          <div class="civer-form-grid">
            <div class="civer-form-divider rounded-t-lg">
              {{ __('input.setup.org.info') }}
            </div>
            <div class="civer-form-desc">{{ __('input.setup.org.name') }}</div>
            <div class="civer-form-input">
              <t-input v-if="system === null"
                    v-model="setup.name"
                    :placeholder="__('input.setup.org.name')"
                    name="setup-name"
                  />
              <span v-else class="w-full leading-loose p-4">{{ system.name }}</span>
            </div>
            <div class="civer-form-desc">{{ __('input.setup.org.code') }}</div>
            <div class="civer-form-input">
              <t-input v-if="system === null"
                    v-model="setup.code"
                    :placeholder="__('input.setup.org.code')"
                    name="setup-code"
                  />
              <span v-else class="w-full leading-loose p-4">{{ system.code }}</span>
            </div>
            <div class="civer-form-divider">
              {{ __('input.setup.admin.info') }}
            </div>
            <div class="civer-form-desc">{{ __('input.setup.admin.name') }}</div>
            <div class="civer-form-input">
              <t-input v-if="system === null"
                    v-model="setup.admin"
                    :placeholder="__('input.setup.admin.name')"
                    name="setup-admin"
                  />
              <span v-else class="w-full leading-loose p-4">{{ system.admin }}</span>
            </div>
            <div class="civer-form-desc">{{ __('input.setup.admin.email') }}</div>
            <div class="civer-form-input">
              <t-input v-if="system === null"
                    v-model="setup.email"
                    :placeholder="__('input.setup.admin.email')"
                    name="setup-email"
                  />
              <span v-else class="w-full leading-loose p-4">{{ system.email }}</span>
            </div>
          </div>
          <div class="civer-form-footer">
            <form-button v-if="system === null" btn-icon-right="save" btn-label="input.button.save" />
            <inertia-link  v-else href="/">
              <form-button btn-icon-right="home" btn-label="input.button.home" />
            </inertia-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import FormButton from "./Shared/Buttons/ButtonWithIcon";

export default {
  components: {
    FormButton
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
      this.$inertia.post("/setup", this.setup);
    }
  }
};
</script>
