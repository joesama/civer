import { InertiaApp } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VueTailwind from 'vue-tailwind'
import FormTheme from './form.js'

Vue.use(InertiaApp)
Vue.use(VueI18n)
Vue.use(VueTailwind, {
  theme: FormTheme
})

Vue.component('v-icon', Icon)

const app = document.getElementById('app')

Vue.prototype.$route = (...args) => route(...args).url()

Vue.mixin(require('./base'))

new Vue({
  render: h => h(InertiaApp, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
    },
  }),
}).$mount(app)