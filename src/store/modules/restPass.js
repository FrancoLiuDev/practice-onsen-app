import axios from 'axios'
import API from '@/models/api'
import { md5, getEncrypt } from '@/plugin/toolskit'
/**
 * 修改密碼API
 */
export default {
    namespaced: true,
    state: {
        regCodeApiState: 'none',
        regCodeApiErrCode: '',
        regPwdApiState: 'none',
        regPwdApiErrCode: '',
        changePwdApiState: 'none',
        changePwdApiErrCode: '',
        resetNewPwd: ''
    },
    mutations: {
        setRegCodeApiStatePost(state) {
            state.regPwdApiErrCode = ''
            state.regCodeApiState = 'post'
        },
        setRegCodeApi(state, err = null) {
            if (err) {
                state.regCodeApiErrCode = err.headers.code
                state.regCodeApiState = 'err'
            } else {
                state.regCodeApiState = 'none'
            }
        },
        setRegPwdApiStatePost(state) {
            state.regPwdApiErrCode = ''
            state.regPwdApiState = 'post'
        },
        setRegPwdApi(state, err = null) {
            if (err) {
                state.regPwdApiErrCode = err.headers.code
                state.regPwdApiState = 'err'
            } else {
                state.regPwdApiState = 'none'
            }
        },
        setChangePwdApiStatePost(state) {
            state.changePwdApiErrCode = ''
            state.changePwdApiState = 'post'
        },
        setChangePwdApi(state, err = null) {
            if (err) {
                state.changePwdApiErrCode = err.headers.code
                state.changePwdApiState = 'err'
            } else {
                state.changePwdApiState = 'none'
            }
        },
        setResetNewPwd(state, newMd5Pwd) {
            state.resetNewPwd = newMd5Pwd
        }
    },
    actions: {
        async resetPwdCode({ commit }, data) {
            commit('setRegCodeApiStatePost')
            try {
                let res = await axios.post(API.ROOT + API.RESET_PASS_CODE, data)
                commit('setRegCodeApi')
            } catch (err) {
                commit('setRegCodeApi', err.response)
            }
        },
        async resetPassword({ commit }, data) {
            commit('setRegPwdApiStatePost')
            let md5Pwd = md5(data.pwd)
            try {
                let res = await axios.post(API.ROOT + API.RESET_PASS_PWD, {
                    ...data,
                    pwd: getEncrypt(md5Pwd, API.Encrypt_Key)
                })
                commit('setRegPwdApi')
                commit('setResetNewPwd', md5Pwd)
            } catch (err) {
                commit('setRegPwdApi', err.response)
            }
        },
        async changePwd({ commit }, data) {
            commit('setChangePwdApiStatePost')
            let md5Pwd = md5(data.npwd)
            try {
                let res = await axios.post(API.ROOT + API.RESET_PASS_CHG, {
                    opwd: getEncrypt(md5(data.opwd), API.Encrypt_Key),
                    npwd: md5Pwd
                })
                commit('setChangePwdApi')
                commit('setResetNewPwd', md5Pwd)
            } catch (err) {
                commit('setChangePwdApi', err.response)
            }
        }
    }
}
