export default {
    methods: {
        doActionBindReg() {
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
                this.doThirdRegister()
            }
        },
        doThirdRegister() {
            this.data['th3ddta'].meta['thirdtype'] = this.data['th3ddta'].type
            this.register3rd({
                countrycode: 'CN',
                phone: this.regModel.phone,
                code: this.regModel.otp,
                thirdtype: this.data['th3ddta'].type,
                thirddata: this.data['th3ddta'].meta
            })
        },
        goNextBindReg() {
            if (this.registerStep == 0) {
                this.navigatePage('LoginView', {}, true)
            }
        }
    }


}