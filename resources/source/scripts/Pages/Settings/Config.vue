<template>
  <layout>
      <form
        class="form-horizontal w-full"
        method="POST"
        @submit.prevent="submit"
        enctype="multipart/form-data"
      >
        <div class="civer-form-grid">
          <div class="civer-form-divider rounded-t-lg">{{ __('input.setup.org.info') }}</div>
          <div class="civer-form-desc">{{ __('input.setup.org.name') }}</div>
          <div class="civer-form-input">
            <t-input
              v-model="setup.name"
              :placeholder="__('input.setup.org.name')"
              name="setup-name"
            />
          </div>
          <div class="civer-form-desc">{{ __('input.setup.org.code') }}</div>
          <div class="civer-form-input">
            <t-input
              v-model="setup.code"
              :placeholder="__('input.setup.org.code')"
              name="setup-code"
            />
          </div>
          <div class="civer-form-divider">{{ __('input.setup.admin.info') }}</div>
          <div class="civer-form-desc">{{ __('input.setup.admin.name') }}</div>
          <div class="civer-form-input">
            <t-input
              v-model="setup.admin"
              :placeholder="__('input.setup.admin.name')"
              name="setup-admin"
            />
          </div>
          <div class="civer-form-desc">{{ __('input.setup.admin.email') }}</div>
          <div class="civer-form-input">
            <t-input
              v-model="setup.email"
              :placeholder="__('input.setup.admin.email')"
              name="setup-email"
            />
          </div>
          <div class="civer-form-divider">{{ __('input.setup.app.info') }}</div>
          <div class="civer-form-desc">{{ __('input.setup.app.logo') }}</div>
          <div class="civer-form-input my-auto">
            <file-pond
              name="app-logo"
              ref="logo"
              label-idle="Drop files here..."
              v-bind:allow-multiple="false"
              v-bind:server="logoServer"
              v-bind:files="setup.logo"
              accepted-file-types="image/jpeg, image/png"
            />
          </div>
          <div class="civer-form-desc">{{ __('input.setup.app.login') }}</div>
          <div class="civer-form-input my-auto">
            <file-pond
              name="app-login"
              ref="login"
              label-idle="Drop files here..."
              v-bind:server="loginServer"
              v-bind:allow-multiple="false"
              accepted-file-types="image/jpeg, image/png"
              v-bind:files="setup.login"
            />
          </div>
          <div class="civer-form-footer civer-form-last">
            <form-button btn-icon-right="save" btn-label="input.button.save" />
          </div>
        </div>
      </form>
  </layout>
</template>

<script>
import vueFilePond from "vue-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

import Layout from "./../Layouts/Layout";
import FormButton from "./../Shared/Buttons/ButtonWithIcon";
import { type } from 'os';
import { inspect } from 'util';

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginFileEncode
);

export default {
  components: {
    FormButton,
    Layout,
    FilePond
  },
  props: {
    system: Object
  },
  data: function() {
    return {
      setup: {
        name: this.system.name,
        code: this.system.code,
        admin: this.system.admin,
        email: this.system.email,
        logo: this.system.logo.url,
        login: this.system.login.url
      },
      logo: null,
      login: null,
      logoServer: {
        process: (fieldName, file, metadata, load) => {
          // simulates uploading a file
          setTimeout(() => {
            load(file);
          }, 500);

          this.logo = new File([file], file.name);
        },
        load: (source, load) => {
          // simulates loading a file from the server
          fetch(source)
            .then(res => res.blob())
            .then(load);
        }
      },
      loginServer: {
        process: (fieldName, file, metadata, load) => {
          // simulates uploading a file
          setTimeout(() => {
            load(Date.now());
          }, 500);

          this.login = new File([file], file.name)
        },
        load: (source, load) => {
          // simulates loading a file from the server
          fetch(source)
            .then(res => res.blob())
            .then(load);
        }
      }
    };
  },
  methods: {
    submit() {
      var data = new FormData();

      data.append("name", this.setup.name || "");
      data.append("code", this.setup.code || "");
      data.append("admin", this.setup.admin || "");
      data.append("email", this.setup.email || "");
      data.append("logo", this.logo);
      data.append("login", this.login);

      this.$inertia.post("/config/save", data);

      this.logo = null;
      this.login = null;
    }
  }
};
</script>
