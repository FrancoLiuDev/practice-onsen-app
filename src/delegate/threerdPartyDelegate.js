/**
 * 第三方綁定/解綁
 */

export default {
    computed: {
        //第三方綁定api狀態 none post err
        userBind3rdApiState() {
            return this.$store.state.restPass.regCodeApiState
        },
        //第三方綁定api 錯誤碼
        userBind3rdApErrCode() {
            return this.$store.state.restPass.userBind3rdApErrCode
        },
        //第三方解綁api none post err
        userUnbind3rdApiState() {
            return this.$store.state.restPass.userUnbind3rdApiState
        },
        //第三方解綁api 錯誤碼
        userUnbind3rdApErrCode() {
            return this.$store.state.restPass.userUnbind3rdApErrCode
        }
    },
    methods: {
        /**
         * 綁定第三方
         * @param {*} data
         * {
            "thirdtype": "QQ",
            "thirddata": {
                "nickname": "leedian",
                "gender": "男",
                "figureurl_qq_2": "http://q.qlogo.cn/qqapp/101433409/C6EDC111EBB8F21F40527207EF34002F/100",
                "openid": "C6EDC111EBB8F21F40527207EF34002F",
                "thirdtype": "QQ"
            }
            }
         */
        userBind3rd(data) {
            this.$store.dispatch('threerdParty/userBind3rd', data)
        },
        /**
         * 解榜第三方
         * @param {*} data
         * {
            "thirdtype": "qq"
            }
         */
        userUnBind3rd(data) {
            this.$store.dispatch('threerdParty/userUnBind3rd', data)
        }
    }
}
