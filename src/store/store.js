import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import navigator from './modules/navigator'
import pageResult from './modules/pageResult'
import warnBox from './modules/warnBox'
import register from './modules/register'
import login from './modules/login'
import restPass from './modules/restPass'
import threerdParty from './modules/threerdParty'
import axios from 'axios'
import API from '@/models/api.json'
axios.defaults.baseURL = process.env.API_ROOT
axios.defaults.headers.common['k-token'] = API.K_TOOKEN
import mock from './modules/moke'

Vue.use(Vuex)
export default new Vuex.Store({
    plugins: [
        createPersistedState({
            key: 'fofadon',
            paths: [
                'uid',
                'login.loginInfo',
                'login.userLoginRes',
                'login.qqSsoLoginInfo',
                'mock'
            ]
        })
    ],
    state: {
        loadingNum: 0, //全局loading
        uid: '',
        cordovaState: 'init', //cordova 生命週期
        networkState: 'init' //網路狀態
    },
    getters: {
        loading({ loadingNum }) {
            return loadingNum === 0 ? false : true
        },
        netOnLine({ networkState }) {
            return networkState === 'none' ? false : true
        }
    },
    mutations: {
        setLoading(state, num) {
            state.loadingNum += num ? 1 : -1
        },
        setUid(state, uid) {
            state.uid = uid
        },
        setCordovaState(state, cordovaState) {
            state.cordovaState = cordovaState
        },
        setNetworkState(state, networkState) {
            state.networkState = networkState
        }
    },
    modules: {
        navigator,
        pageResult,
        warnBox,
        register,
        mock,
        login,
        restPass,
        threerdParty
    }
})
