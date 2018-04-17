/**
 * 修改密碼相關
 */
export default {
    computed: {
        //使用驗證碼驗證手機，同時重置密碼API狀態 none post err
        regCodeApiState() {
            return this.$store.state.restPass.regCodeApiState
        },
        //使用驗證碼驗證手機，同時重置密碼API 錯誤碼
        regCodeApiErrCode() {
            return this.$store.state.restPass.regCodeApiErrCode
        },
        //修改密碼API狀態 none post err
        regPwdApiState() {
            return this.$store.state.restPass.regPwdApiState
        },
        //修改密碼API 錯誤碼
        regPwdApiErrCode() {
            return this.$store.state.restPass.regPwdApiErrCode
        },
        //通過舊密碼更改密碼API狀態 none post err
        changePwdApiState() {
            return this.$store.state.restPass.changePwdApiState
        },
        //通過舊密碼更改密碼API 錯誤碼
        changePwdApiErrCode() {
            return this.$store.state.restPass.changePwdApiErrCode
        },
        //跟新後的新密碼
        resetNewPwd() {
            return this.$store.state.restPass.resetNewPwd
        }
    },
    methods: {
        /**
         * 使用驗證碼驗證手機，同時重置密碼API
         * @param {*} data
         * {
            "countrycode": "CN",
            "phone": "137456789",
            "code": "string"
            }
         */
        resetPwdCode(data) {
            this.$store.dispatch('restPass/resetPwdCode', data)
        },
        /**
         * 修改密碼API
         * @param {*} data
         * {
            "countrycode": "CN",
            "phone": "137456789",
            "code": "string",
            "pwd": "71W7faZqSbLOBzFdMTL6kpoYTM1UH+odEBmYJwqxEq19RlAbr8GVYA=="
            }
         */
        resetPassword(data) {
            this.$store.dispatch('restPass/resetPassword', data)
        },
        /**
         * 通過舊密碼更改密碼API
         * @param {*} data
         * {
            "opwd": "string",
            "npwd": "string"
            }
         */
        changePwd(data) {
            this.$store.dispatch('restPass/changePwd', data)
        }
    }
}
