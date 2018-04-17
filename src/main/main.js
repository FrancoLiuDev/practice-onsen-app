// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css'
import '@/assets/onsen-css-components.min.css'

/* global css */
import '@/assets/global.less'
import '@/assets/vue-transition.less'
import '@/assets/style.css'
import VueFactory from 'vue-factory'
import vuexI18n from 'vuex-i18n'
import Vue from 'vue'
import VueOnsen from 'vue-onsenui'
import store from '@/store/store'
import './regcomponent'
import Navigator from '../Navigator.vue'
import pages from './pages'
import messages from './locale'

import CordovaState from '@/main/cordovaState'

Vue.config.productionTip = false
Vue.use(VueFactory)
Vue.use(VueOnsen)
Vue.use(vuexI18n.plugin, store)
Vue.i18n.add('en', messages.en)
Vue.i18n.add('ch', messages.fn)
Vue.i18n.set('ch')
Vue.factory.register({
    pages: pages
})
/* 自訂義組件 */
// import FoInput from '@/components/Fo-Input'
// Vue.component('Fo-Input', FoInput)
/* eslint-disable no-new */
let vm = new Vue({
    el: '#app',
    render: h => h(Navigator),
    store
})

//退出詢問
vm.$ons.ready(() => {
    var appNavigator = document.getElementById('appNavi')
    vm.$ons.setDefaultDeviceBackButtonListener(event => {
        vm.$ons.notification
            .confirm('是否退出?') // Ask for confirmation
            .then(index => {
                if (index === 1) {
                    navigator.app.exitApp() // Close the app
                }
            })
    })
})

/* Cordova State 處理 */
const cordovaState = new CordovaState(vm)
