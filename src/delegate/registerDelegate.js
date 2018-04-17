export default {
    computed: {
        //註冊API狀態 none post err
        registerState() {
            return this.$store.state.register.registerState
        },
        //最後註冊資料
        userRegisterInfo() {
            return this.$store.state.register.registerInfo
        },
        //註冊API狀態 錯誤碼
        registerErrCore() {
            return this.$store.state.register.registerErrCore
        },
        //驗證碼驗證API情況 none post err
        verificationState() {
            return this.$store.state.register.verificationState
        },
        //驗證碼驗證API錯誤碼
        verificationErrCode() {
            return this.$store.state.register.verificationErrCode
        },
        //註冊密碼狀態 none post err
        registerPassState() {
            return this.$store.state.register.registerPassState
        },
        //註冊密碼API錯誤碼
        registerPassErrCode() {
            return this.$store.state.register.registerPassErrCode
        },
        //第三方註冊狀態 none post err
        register3ThState() {
            return this.$store.state.register.register3ThState
        },
        //第三方註冊PI錯誤碼
        register3ThErrCode() {
            return this.$store.state.register.register3ThErrCode
        }
    },
    methods: {
        /**
         * 註冊
         * @param Object userRegisterInfo { countrycode: "CN",phone: "137456789"}
         */
        userRegister(userRegisterInfo) {
            this.$store.dispatch('register/userRegister', userRegisterInfo)
        },
        /**
         * 驗證驗證碼
         * @param {*} data {countrycode: 'CN',phone: '18518390186',code: 'xxxx'}
         */
        userVerification(data) {
            this.$store.dispatch('register/userVerification', data)
        },
        /**
         * 註冊密碼
         * @param {*} data
         * {
            "countrycode": "CN",
            "phone": "137456789",
            "code": "string",
            "pwd": "密碼" (這裡不須加密)
            }
         */
        registerPass(data) {
            this.$store.dispatch('register/registerPass', data)
        },
        /**
         * 第三方註冊
         * @param {*} data
         * {
                "countrycode": "CN",
                "phone": "137456789",
                "code": "string",
                "thirdtype": "string",
                "thirddata": {
                    "nickname": "leedian",
                    "gender": "男",
                    "figureurl_qq_2": "http://q.qlogo.cn/qqapp/101433409/C6EDC111EBB8F21F40527207EF34002F/100",
                    "openid": "C6EDC111EBB8F21F40527207EF34002F",
                    "thirdtype": "QQ"
                }
            }
         */
        register3rd(data) {
            this.$store.dispatch('register/register3rd', data)
        }
    }
}
