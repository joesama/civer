<template>
  <div class="gradient-blue civer h-screen w-screen">
    <div class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
      <div
        class="flex rounded-lg outline-no shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0"
        style="height: 500px"
      >
        <div class="hidden md:block md:w-1/2 rounded-l-lg">
          <img :src="$page.site.login" class="civer-login-img"/>
        </div>
        <div class="flex flex-col w-full md:w-3/4 p-2">
          <div class="flex flex-col flex-1 justify-center mb-4">
            <div class="civer-login-logo-container">
              <img
                v-if="$page.site.logo !== undefined"
                :src="$page.site.logo"
                class="civer-login-logo w-48 max-w-4x"
              />
              <h1
                v-if="$page.site.logo === undefined"
                class="text-4xl text-center font-bold"
              >{{ $page.site.code }}</h1>
            </div>
            <div class="w-full">
              <div class="font-medium tracking-wider leading-relaxed text-center mt-3 mb-5">{{ __($page.site.name) }}</div>
              <form class="form-horizontal w-full mx-auto px-4 py-2" method="POST" v-on:submit.prevent="submit">
                <alert />
                <icon-input
                  input-icon="user"
                  input-name="email"
                  v-model="username"
                  input-placeholder="input.login.username"
                />
                <icon-input
                  input-icon="key"
                  input-name="password"
                  input-type="password"
                  v-model="password"
                  input-placeholder="input.login.password"
                />
                <form-button btn-icon-right="arrow-right" btn-label="input.login.login" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconInput from "./Shared/Forms/InputWithIconLeft";
import Alert from "./Shared/Forms/Alert";
import FormButton from "./Shared/Buttons/ButtonWithIcon";

export default {
  components: {
    IconInput,
    FormButton,
    Alert
  },
  props: {
    site: Object
  },
  data: function() {
    return {
      system: this.site,
      username: null,
      password: null
    };
  },
  methods: {
    submit() {
      this.$inertia.post('/login', { username: this.username,  password: this.password})
    },
  },
};
</script>
