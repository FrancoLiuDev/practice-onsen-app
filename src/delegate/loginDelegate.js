//登入資料都會緩存
export default {
    computed: {
        //登入API狀態 none post err
        userLoginApiState() {
            return this.$store.state.login.userLoginApiState
        },
        //登入API錯誤碼
        userLoginApiErrCode() {
            return this.$store.state.login.userLoginApiErrCode
        },
        //紀錄登入表單 (一旦紀錄 為了安全 pwd 欄位只會紀錄md5後的)
        loginInfo() {
            return this.$store.state.login.loginInfo
        },
        //登入返回
        userLoginRes() {
            return this.$store.state.login.userLoginRes
        },
        //是否登入中
        isLogin() {
            return this.userLoginRes ? true : false
        },
        //第三方登入API 狀態 none post err
        user3ThLoginApiState() {
            return this.$store.state.login.user3ThLoginApiState
        },
        //第三方登入API 錯誤代碼
        user3ThLoginApiErrCode() {
            return this.$store.state.login.user3ThLoginApiErrCode
        },
        //qq登入狀態 none post err
        loginQQState() {
            return this.$store.state.login.loginQQState
        },
        //qq登入訊息
        qqSsoLoginInfo() {
            return this.$store.state.login.qqSsoLoginInfo
        },
        //qq錯誤 0 1沒有安裝qq 2 qq登入失敗 3 qq取回個資失敗
        qqErrCode() {
            return this.$store.state.login.qqErrCode
        },
        //qq登入失敗訊息
        qqSsoLoginErr() {
            return this.$store.state.login.qqSsoLoginErr
        },
        //目前有的登入資料 緩存的data
        loginType() {
            return {
                pone: this.loginInfo ? true : false,
                qq: this.qqSsoLoginInfo ? true : false,
                wechat: false
            }
        },
        //最後登入號碼，表單記憶用
        lastLoginPone() {
            return this.$store.state.login.lastLoginPone
        }
    },
    methods: {
        /**
         * 登入
         * @param {*} data
         * {
            "user": "leedian@leediancn.com",
            "pwd": "string" (不用加密)
            }
         */
        userLogin(data) {
            this.$store.dispatch('login/userLogin', data)
        },
        /**
         * 登入
         */
        userLogout() {
            this.$store.dispatch('login/userLogout')
        },
        /**
         * 更新密碼到緩存，修改密碼時會用，請見 resetPwdController
         * @param {*} pwd
         */
        resetPwd(pwd) {
            this.$store.commit('login/resetPwd', resetPwd)
        },
        /**
         * qq 登入
         */
        qqlogin() {
            this.$store.dispatch('login/loginQQ')
        }
    }
}