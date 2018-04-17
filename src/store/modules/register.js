/**
 * 註冊
 */
import axios from 'axios'
import API from '@/models/api'
import { md5, getEncrypt } from '@/plugin/toolskit'
export default {
    namespaced: true,
    state: {
        registerState: 'none',
        registerInfo: null,
        registerErrCode: '',
        verificationState: 'none',
        verificationErrCode: '',
        registerPassState: 'none',
        registerPassErrCode: '',
        register3ThState: 'none',
        register3ThErrCode: ''
    },
    mutations: {
        setRegisterState(state, val) {
            state.registerState = val
        },
        setRegisterInfo(state, info) {
            state.registerInfo = info
        },
        setErr(state, err = null) {
            state.registerErrCode = err ? err.headers.code : ''
        },
        setVerificationState(state, val) {
            state.verificationState = val
        },
        setVerificationErr(state, err = null) {
            state.verificationErrCode = err ? err.headers.code : ''
        },
        setRegisterPassState(state, val) {
            state.registerPassState = val
        },
        setRegisterPassErr(state, err = null) {
            state.registerPassErrCode = err ? err.headers.code : ''
        },
        setRegister3ThState(state, val) {
            state.register3ThState = val
        },
        setRegister3ThErr(state, err = null) {
            state.register3ThErrCode = err ? err.headers.code : ''
        }
    },
    actions: {
        async userRegister({ commit }, userRegisterInfo) {
            commit('setRegisterState', 'post')
            try {
                let res = await axios.post(
                    API.ROOT + API.USER_RESGISTER,
                    userRegisterInfo
                )
                commit('setRegisterInfo', userRegisterInfo)
                commit('setRegisterState', 'none')
            } catch (err) {
                commit('setErr', err.response)
                commit('setRegisterState', 'err')
            }
        },
        async userVerification({ commit }, data) {
            commit('setVerificationState', 'post')
            try {
                let res = await axios.post(
                    API.ROOT + API.USER_USER_RESGISTER_CODE,
                    data
                )
                commit('setVerificationState', 'none')
            } catch (err) {
                commit('setVerificationErr', err.response)
                commit('setVerificationState', 'err')
            }
        },
        //註冊密碼
        async registerPass({ commit }, data) {
            commit('setRegisterPassState', 'post')
            try {
                //密碼加密傳輸
                let res = await axios.post(API.ROOT + API.USER_RESGISTER_PASS, {
                    ...data,
                    pwd: getEncrypt(md5(data.pwd), API.Encrypt_Key) //密碼加密傳輸
                })
                commit('setRegisterPassState', 'none')
            } catch (err) {
                commit('setRegisterPassErr', err.response)
                commit('setRegisterPassState', 'err')
            }
        },
        //註冊第三方
        async register3rd({ commit }, data) {
            commit('setRegister3ThState', 'post')
            try {
                let res = await axios.post(
                    API.ROOT + API.USER_RESGISTER_3RD,
                    data
                )
                commit('setRegister3ThState', 'none')
            } catch (err) {
                commit('setRegister3ThErr', err.response)
                commit('setRegister3ThState', 'err')
            }
        }
    }
}
