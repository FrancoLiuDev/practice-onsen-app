import { md5, getEncrypt } from '@/plugin/toolskit'
import { hasQQApp, qqSsologin, getQqUser } from '@/plugin/qqTool'
import API from '@/models/api'
import axios from 'axios'
export default {
    namespaced: true,
    state: {
        userLoginApiState: 'none',
        userLoginApiErrCode: '',
        loginInfo: null,
        lastLoginPone: '', //最後登入號碼，表單記憶用
        userLoginRes: null,
        user3ThLoginApiState: 'none', //第三方登入API 狀態 none post err
        user3ThLoginApiErrCode: '', //第三方登入API 錯誤代碼
        loginQQState: 'none', //qq登入狀態 none post err
        qqErrCode: 0, //qq錯誤 0 1沒有安裝qq 2 qq登入失敗 3 qq取回個資失敗
        qqSsoLoginErr: null, //qq登入失敗訊息
        qqSsoLoginInfo: null //qq登入訊息
    },
    mutations: {
        setUserLoginApiState(state, val = 'none') {
            state.userLoginApiState = val
        },
        setUserLoginApiErr(state, err = null) {
            state.userLoginApiErrCode = err ? err.headers.code : ''
        },
        setLoginInfo(state, info = null) {
            if (info) {
                info.pwd = info.pwd.length === 32 ? info.pwd : md5(info.pwd)
                state.lastLoginPone = info.user
            }
            state.loginInfo = info
        },
        resetPwd(state, pwd) {
            if (state.loginInfo) {
                state.loginInfo.pwd = pwd
            }
        },
        setUserLoginRes(state, data = null) {
            state.userLoginRes = data
        },
        setLoginQQState(state, val = 'none') {
            state.loginQQState = val
        },
        setUser3ThLoginApiState(state, val = 'none') {
            state.user3ThLoginApiState = val
        },
        setUser3ThLoginApiErr(state, err = null) {
            state.user3ThLoginApiErrCode = err ? err.headers.code : ''
        },
        setLoginQQState(state, val = 'none') {
            state.loginQQState = val
        },
        setQqErrCode(state, val = 0) {
            state.loginQQState = val
        },
        setQqSsoLoginErr(state, err = null) {
            state.qqSsoLoginErr = err
        },
        setQqSsoLoginInfo(state, val = null) {
            state.qqSsoLoginInfo = val
        }
    },
    actions: {
        async userLogin({ commit, state }, info) {
            commit('setUserLoginApiState', 'post')
            commit('setLoginInfo', info)
            try {
                console.log('userLogin', state.loginInfo)
                console.log(
                    'pwd',
                    getEncrypt(state.loginInfo.pwd, API.Encrypt_Key)
                )

                let res = await axios.post(API.ROOT + API.USER_LOGIN, {
                    ...state.loginInfo,
                    pwd: getEncrypt(state.loginInfo.pwd, API.Encrypt_Key) //密碼加密傳輸
                })

                commit('setUserLoginRes', res.data)
                commit('setUserLoginApiState', 'none')
            } catch (err) {
                commit('setLoginInfo', null)
                commit('setUserLoginRes', null)
                commit('setUserLoginApiErr', err.response)
                commit('setUserLoginApiState', 'err')
            }
        },
        userLogout({ commit, state }) {
            commit('setLoginInfo', null)
            commit('setQqSsoLoginInfo', null)
            if (state.userLoginRes) {
                axios
                    .post(API.ROOT + API.USER_LOGUT, {
                        rsession: state.userLoginRes.data.rsession
                    })
                    .then(() => {})
            }
            commit('setUserLoginRes', null)
        },
        //利用第三方資訊登入 loginQQ 會直接串
        async user3ThLogin({ commit, state }, data) {
            commit('setUser3ThLoginApiErr', null)
            commit('setUser3ThLoginApiState', 'post')
            try {
                let res = await axios.post(API.ROOT + API.USER_LOGIN_3RD, data)
                commit('setUserLoginRes', res.data)
                commit('setUser3ThLoginApiState', 'none')
            } catch (err) {
                commit('setUser3ThLoginApiErr', err.response)
            }
        },
        //利用qq登入
        async loginQQ({ commit, dispatch, state }, data) {
            commit('setQqErrCode', 0)
            commit('setLoginQQState', 'post')
            try {
                await hasQQApp()
                let qqTkn = await qqSsologin()
                let qqUserInfo = await getQqUser(qqTkn, API.QQ_APP_ID)
                let mm = { ...qqUserInfo, ...qqTkn, thirdtype: 'QQ' }
                commit('setQqSsoLoginInfo', mm)
                commit('setLoginQQState', 'none')
                dispatch('user3ThLogin', {
                    //qq登入 微信未處理
                    thirdtype: 'QQ',
                    thirddata: mm
                })
            } catch (error) {
                commit('setQqSsoLoginInfo', null) //清空之前登入資訊
                switch (error) {
                    case 'no_qq':
                        commit('setQqErrCode', 1)
                        break
                    case 'getQqUserInfo_err':
                        commit('setQqErrCode', 3)
                        break
                    default:
                        commit('setQqSsoLoginErr', error.response)
                        commit('setQqErrCode', 2)
                }
                commit('setLoginQQState', 'err')
            }
        }
    }
}
