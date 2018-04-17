import appDelegate from '@/delegate/appDelegate'
import registerDelegate from '@/delegate/registerDelegate'
import loginDelegate from '@/delegate/loginDelegate'
import resetPwdDelegate from '@/delegate/resetPwdDelegate'
import threerdPartyDelegate from '@/delegate/threerdPartyDelegate'
/**
 * 全畫面Loading
 */
export default {
    mixins: [
        appDelegate,
        registerDelegate,
        threerdPartyDelegate,
        resetPwdDelegate,
        loginDelegate
    ],
    watch: {
        registerState(val) {
            switch (val) {
                case 'none':
                    this.loading = false
                    break
                case 'post':
                    this.loading = true
                    break
                case 'err':
                    this.loading = false
                    break
                default:
            }
        },
        verificationState(val) {
            switch (val) {
                case 'none':
                    this.loading = false
                    break
                case 'post':
                    this.loading = true
                    break
                case 'err':
                    this.loading = false
                    break
                default:
            }
        },
        registerPassState(val) {
            switch (val) {
                case 'none':
                    this.loading = false
                    break
                case 'post':
                    this.loading = true
                    break
                case 'err':
                    this.loading = false
                    break
                default:
            }
        },
        register3ThState(val) {
            switch (val) {
                case 'none':
                    this.loading = false
                    break
                case 'post':
                    this.loading = true
                    break
                case 'err':
                    this.loading = false
                    break
                default:
            }
        },
        userLoginApiState(val) {
            switch (val) {
                case 'none':
                    this.loading = false
                    break
                case 'post':
                    this.loading = true
                    break
                case 'err':
                    this.loading = false
                    break
                default:
            }
        },
        regCodeApiState(val) {
            switch (val) {
                case 'none':
                    this.loading = false
                    break
                case 'post':
                    this.loading = true
                    break
                case 'err':
                    this.loading = false
                    break
                default:
            }
        },
        regPwdApiState(val) {
            switch (val) {
                case 'none':
                    this.loading = false
                    break
                case 'post':
                    this.loading = true
                    break
                case 'err':
                    this.loading = false
                    break
                default:
            }
        },
        changePwdApiState(val) {
            switch (val) {
                case 'none':
                    this.loading = false
                    break
                case 'post':
                    this.loading = true
                    break
                case 'err':
                    this.loading = false
                    break
                default:
            }
        },
        user3ThLoginApiState(val) {
            switch (val) {
                case 'none':
                    this.loading = false
                    break
                case 'post':
                    this.loading = true
                    break
                case 'err':
                    this.loading = false
                    break
                default:
            }
        },
        userBind3rdApiState(val) {
            switch (val) {
                case 'none':
                    this.loading = false
                    break
                case 'post':
                    this.loading = true
                    break
                case 'err':
                    this.loading = false
                    break
                default:
            }
        },
        userUnbind3rdApiState(val) {
            switch (val) {
                case 'none':
                    this.loading = false
                    break
                case 'post':
                    this.loading = true
                    break
                case 'err':
                    this.loading = false
                    break
                default:
            }
        }
    }
}
