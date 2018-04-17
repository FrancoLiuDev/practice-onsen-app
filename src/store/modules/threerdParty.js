/**
 * 第三方綁定相關
 */
import API from '@/models/api'
import axios from 'axios'
export default {
    namespaced: true,
    state: {
        userBind3rdApiState: 'none', //第三方綁定api狀態 none post err
        userBind3rdApErrCode: '', //第三方綁定api 錯誤碼
        userUnbind3rdApiState: 'none', //第三方解綁api none post err
        userUnbind3rdApErrCode: '' //第三方解綁api 錯誤碼
    },
    mutations: {
        setUserBind3rdApiPost(state) {
            state.userBind3rdApErrCode = ''
            state.userBind3rdApiState = 'post'
        },
        userBind3rdApiStateErr(state, err = null) {
            if (err) {
                state.userBind3rdApErrCode = err.headers.code
                state.userBind3rdApiState = 'err'
            } else {
                state.userBind3rdApErrCode = ''
                state.userBind3rdApiState = 'none'
            }
        },
        setUserUnbind3rdApiStatePost(state) {
            state.userUnbind3rdApErrCode = ''
            state.userUnbind3rdApiState = 'post'
        },
        userUnBind3rdApiStateErr(state, err = null) {
            if (err) {
                state.userUnbind3rdApErrCode = err.headers.code
                state.userUnbind3rdApiState = 'err'
            } else {
                state.userUnbind3rdApErrCode = ''
                state.userUnbind3rdApiState = 'none'
            }
        }
    },
    actions: {
        async userBind3rd({ commit }, data) {
            commit('setUserBind3rdApiPost')
            try {
                await axios.post(API.ROOT + API.USER_BIND_3RD, data)
                commit('userBind3rdApiStateErr')
            } catch (err) {
                commit('userBind3rdApiStateErr', err.response)
            }
        },
        async userUnBind3rd({ commit }, data) {
            commit('setUserUnbind3rdApiStatePost')
            try {
                await axios.post(API.ROOT + API.USER_UNBIND_3RD, data)
                commit('userUnBind3rdApiStateErr')
            } catch (err) {
                commit('userUnBind3rdApiStateErr', err.response)
            }
        }
    }
}
