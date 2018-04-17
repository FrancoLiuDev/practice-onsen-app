import resetPwdDelegate from '@Delegate/resetPwdDelegate'

export default {
    mixins: [resetPwdDelegate],
    watch: {
        regCodeApiState(val, lastVal) {
            let cb = {
                succcess: () => {
                    this.nextStep()
                },
                err: () => {
                    this.notifyLastErr(this.regCodeApiErrCode)
                    this.showError(this.regCodeApiErrCode)
                }
            }
            this.notifyApiState(val, lastVal, cb)
        },
        regPwdApiState(val, lastVal) {
            let cb = {
                succcess: () => {
                    this.nextStep()
                },
                err: () => {
                    this.notifyLastErr(this.regPwdApiErrCode)
                    this.showError(this.regPwdApiErrCode)
                }
            }
            this.notifyApiState(val, lastVal, cb)
        }
    },
    methods: {
        doActionResetPassword() {
            var self = this
            if (this.registerStep == 0) {
                if (!this.chkOneTimePwdFormat()) return
            } else if (this.registerStep == 1) {
                if (!this.chkPasswordFormat()) return
            }
            if (this.registerStep == 0) {
                this.doResetPwdCode()
            } else if (this.registerStep == 1) {
                this.doReAuthPassWord()
            }
        },
        doResetPwdCode() {
            this.resetPwdCode({
                countrycode: 'CN',
                phone: this.regModel.phone,
                code: this.regModel.otp
            })
        },
        doReAuthPassWord() {
            this.resetPassword({
                countrycode: 'CN',
                phone: this.regModel.phone,
                code: this.regModel.otp,
                pwd: this.regModel.pwd
            })
        },
        goNextResetPassword() {
            if (this.registerStep == 0) {
                this.registerStep += 1
            } else if (this.registerStep == 1) {
                this.navigatePage('LoginView', {}, true)
            }
        }
    }
}