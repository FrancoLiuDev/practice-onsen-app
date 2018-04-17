import validator from '@Script/validator'
import stringUtil from '@Script/stringtool'

export default {
    methods: {
        checkLoginFormat(userpwd) {
            if (!this.checkMobileNumber(userpwd.phone)) {
                return {
                    pass: false,
                    msg: this.$t('STR_FORMATERR_PHONE')
                }
            }
            if (!this.checkPasswordNumber(userpwd.pwd)) {
                return {
                    pass: false,
                    msg: this.$t('STR_FORMATERR_PWD')
                }
            }
            return {
                pass: true
            }
        },
        checkConfirmPwd(pwdData) {
            if (pwdData.pwd != pwdData.pwd2) return {
                pass: false,
                msg: this.$t('STR_PASSWORD_NOT_QUR')
            }
            return {
                pass: true
            }
        },
        checkOTPFormat(regData) {
            if (!this.checkMobileNumber(regData.phone)) {
                return {
                    pass: false,
                    msg: this.$t('STR_FORMATERR_PHONE')
                }
            }
            return {
                pass: true
            }
        },
        checkMobileNumber(phone) {
            if (!(/^(?=\d{11}$)^1(?:(?:3(?!49)[4-9\D]|47|5[012789]|78|8[234578]|98)\d{8}$|(?:70[356])\d{7}$)/.test(phone))) {
                return false;
            }
            return true
        },
        checkPasswordNumber(pwd) {
            var exLen = stringUtil.equalLenRange(pwd, 6, 8)
            if (exLen != 0)
                return false
            return true
        }

    }
}