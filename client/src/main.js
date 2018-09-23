// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'

Vue.use(BootstrapVue);
Vue.config.productionTip = false

Vue.use(Vuetify)

sync(store, router)


new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})