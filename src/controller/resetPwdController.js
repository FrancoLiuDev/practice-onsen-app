/**
 * 更新你的登入資訊
 */
import loginDelegate from '@/delegate/loginDelegate'
import resetPwdDelegate from '@/delegate/resetPwdDelegate'
export default {
    watch: {
        resetNewPwd(val) {
            this.resetPwd(val)
        }
    }
}
