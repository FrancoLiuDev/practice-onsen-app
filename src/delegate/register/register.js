import registerDelegate from '@Delegate/registerDelegate'

export default {
    mixins: [registerDelegate],
    watch: {
        registerPassState(val, lastVal) {
            let cb = {
                succcess: () => {
                    this.nextStep()
                },
                err: () => {
                    this.notifyLastErr(this.registerPassErrCode)
                    this.showError(this.registerPassErrCode)
                }
            }
            this.notifyApiState(val, lastVal, cb)
        },
        registerState(val, lastVal) {
            let cb = {
                succcess: () => {
                    this.onSuccessSendOtp()
                },
                err: () => {
                    this.notifyLastErr(this.registerErrCore)
                    this.showError(this.registerErrCore)
                }
            }
            this.notifyApiState(val, lastVal, cb)
        },
        verificationState(val, lastVal) {
            let cb = {
                succcess: () => {
                    this.nextStep()
                },
                err: () => {
                    this.notifyLastErr(this.verificationErrCode)
                    this.showError(this.verificationErrCode)
                }
            }
            this.notifyApiState(val, lastVal, cb)
        },
        register3ThState(val, lastVal) {
            let cb = {
                succcess: () => {
                    this.nextStep()
                },
                err: () => {
                    this.notifyLastErr(this.register3ThErrCode)
                    this.showError(this.register3ThErrCode)
                }
            }
            this.notifyApiState(val, lastVal, cb)
        }
    },
    methods: {
        doActionRegister() {
            var self = this
            if (this.registerStep == 0) {
                if (!this.chkOneTimePwdFormat()) return
            } else if (this.registerStep == 1) {
                if (!this.chkPasswordFormat()) return

            }
            if (!this.regModel.agrremnt) {
                this.setWarnOptions({
                    id: this.pageId,
                    msg: this.$t('STR_NOT_AGREE_YET'),
                    option1: this.$t('STR_CLOSE')
                })
                return
            }
            if (this.registerStep == 0) {
                this.doAuthOneTimePwd()
            } else if (this.registerStep == 1) {
                this.doResetPassWord()
            }
        },
        doAuthOneTimePwd() {
            this.userVerification({
                countrycode: 'CN',
                phone: this.regModel.phone,
                code: this.regModel.otp
            })
        },
        doResetPassWord() {
            this.registerPass({
                countrycode: 'CN',
                phone: this.regModel.phone,
                code: this.regModel.otp,
                pwd: this.regModel.pwd
            })
        },
        goNextRegister() {
            if (this.registerStep == 0) {
                this.registerStep += 1
            } else if (this.registerStep == 1) {
                this.navigatePage('LoginView', {}, true)
            }
        }
    }
}