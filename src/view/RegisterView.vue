<template>
    <v-ons-page id="register-page">
        <navi-toolbar :title="$t(pageProp.displyName)"></navi-toolbar>
        <div class="tb marg-top" v-show="registerStep==0">
            <state-title-input tagid='reg_input_number' :filter="filterMobile" vuetype="text" :title="$t('STR_MOBILE')" :hint="$t('STR_PLSINPUT_MOBILE')" :value.sync="regModel.phone"></state-title-input>
        </div>
        <div class="tb" v-show="registerStep==0">
            <state-title-input :regLimit="{lenthMax:6}" tagid='reg_input_otp' vuetype="text" :title="$t('STR_MOBILE_OTP')" :hint="$t('STR_PLSINPUT_MOOTP')" @onInputFocus="{}" :value.sync="regModel.otp"></state-title-input>
            <div id="pwd-info" @click="onGetOTP">
                <span v-show="downcunt>0">({{downcunt}})</span>
                <span>{{$t('STR_GET_PHONE_OTP')}}</span>
                <app-icon @click.native="showOTP = false" size="20" idname='question-mark'></app-icon>
            </div>
        </div>
        <div class="tb marg-top" v-show="registerStep==1">
            <state-title-input tagid='reg_input_pwd' vuetype="password" :title="$t('STR_CREATE_PASSWORD')" :hint="$t('STR_CREATE_PASSWORD')" @onInputFocus="{}" :value.sync="regModel.pwd"></state-title-input>
        </div>
        <div class="tb" v-show="registerStep==1">
            <state-title-input :regLimit="{lenthMax:6}" tagid='reg_input_pwd2' vuetype="password" :title="$t('STR_PLE_INPUT_PWD2')" :hint="$t('STR_PLE_INPUT_PWD2')" @onInputFocus="{}" :value.sync="regModel.pwd2"></state-title-input>
        </div>
        <div class="errline t-center">
            <span>{{errline}}</span>
        </div>
        <div class="login t-center">
            <v-ons-button :disabled="!allowAction" class="login-bn" @click="doAction">{{submitName}}</v-ons-button>
        </div>
        <div id="reg-external" v-if="pageProp.type == 'sign' || pageProp.type == 'bind'">
            <label class="checkbox">
                <input v-model="regModel.agrremnt" type="checkbox" class="checkbox__input">
                <div class="checkbox__checkmark"></div>
                {{$t('STR_READ_AND_AGREE')}}
            </label>
            <span @click="showAgrremnt = true">{{$t('STR_SIGNIP_AGREEMENT')}}</span>
        </div>
        <slide-up class="shadow" :active="showAgrremnt" :duration="600">
            <sign-agreement @onMakeDecision="(result)=>{showAgrremnt = false ;onAgrremntDecision(result)}"></sign-agreement>
        </slide-up>
        <slide-up class="shadow" :active="showOTP" :duration="600">
            <otp-discription @onMakeDecision="showOTP = false"></otp-discription>
        </slide-up>
    </v-ons-page>
</template>

<script>
import pageControl from '@Contrioller/page/pageControl'
import fonRespDelegate from '@Delegate/fonRespDelegate'
import formInputDelegate from '@Delegate/formInputDelegate'
import errMsgs from '@Models/erros/ErrMsgs'
import register from '@Delegate/register/register.js'
import thirdParty from '@Delegate/register/thirdParty'
import password from '@Delegate/register/password'

export default {
    name: 'RegisterPage',
    mixins: [pageControl, fonRespDelegate, formInputDelegate, register, thirdParty, password],
    components: {},
    data() {
        return {
            regModel: {
                phone: '', // 13910482344 18518390186
                otp: '',
                pwd: '',
                pwd2: '',
                agrremnt: false
            },
            actionStatus: {
                otp: 'none'
            },
            registerStep: 0,
            showAgrremnt: false,
            showOTP: false,
            pageType: '',
            interval: null,
            errline: '',
            downcunt: 0
        }
    },
    mounted() {
        this.pageType = this.pageProp.type
    },
    computed: {
        doCurrentAction() {
            this.errline = ''
            if (this.pageType == 'sign') {
                return this.doActionRegister
            } else if (this.pageType == 'bind') {
                return this.doActionBindReg
            } else if (this.pageType == 'password') {
                return this.doActionResetPassword
            } else {
                return () => {}
            }
        },
        nextStepByType() {
            if (this.pageType == 'sign') {
                return this.goNextRegister
            } else if (this.pageType == 'bind') {
                return this.goNextBindReg
            } else if (this.pageType == 'password') {
                return this.goNextResetPassword
            } else {
                return () => {}
            }
        },
        submitName() {
            if (this.registerStep == 0) {
                return this.$t('STR_NEXT_STEP')
            } else if (this.registerStep == 1) {
                return this.$t('STR_DO_COMPLETE')
            }
        },
        allowAction() {
            if (this.shouldWait) return false
            if (this.registerStep == 0) {
                if (this.regModel.phone.length == 0) return false
                if (this.regModel.otp.length < 6) return false
                return true
            } else if (this.registerStep == 1) {
                if (this.regModel.pwd.length == 0) return false
                if (this.regModel.pwd2.length == 0) return false
                return true
            }
        }
    },
    methods: {
        doAction() {
            this.errline = ''
            this.doCurrentAction()
        },
        nextStep() {
            this.errline = ''
            this.nextStepByType()
        },
        chkPasswordFormat() {
            var check = this.checkConfirmPwd({
                pwd: this.regModel.pwd,
                pwd2: this.regModel.pwd2
            })

            if (!check.pass) {
                this.errline = check.msg
                return false
            }
            return true
        },
        chkOneTimePwdFormat() {
            var check = this.checkOTPFormat({
                phone: this.regModel.phone,
                otp: this.regModel.otp
            })

            if (!check.pass) {
                this.errline = check.msg
                return false
            }
            return true
        },
        onSuccessSendOtp() {
            this.downcunt = 60
            this.interval = setInterval(() => {
                this.downcunt -= 1
                if (this.downcunt == 0) clearInterval(this.interval)
            }, 1000)
        },
        onAgrremntDecision(result) {
            this.regModel.agrremnt = result.decision == 'confirm' ? true : false
        },
        onGetOTP() {
            if (this.downcunt > 0) return
            this.userRegister({
                countrycode: 'CN',
                phone: this.regModel.phone
            })
        },
        showError(code) {
            if (code == null) {
                if (this.registerStep == 0) {
                    this.errline = this.$t('STR_PROCCESSFAILD_OTP')
                } else if (this.registerStep == 1) {
                    this.errline = this.$t('STR_CREATE_PASSWORD_ERROR')
                }
                return
            }
            if (errMsgs.register[code]) {
                this.errline = this.$t(errMsgs.register[code].msg)
                return
            }
            if (errMsgs.common[code]) {
                this.errline = this.$t(errMsgs.common[code].msg)
                return
            }
            this.errline = this.$t('STR_PROCCESSFAILD_OTP')
        }
    }
}
</script>

<style lang="less">
@import 'val.less';
@import 'global.less';
#register-page {
    .page__content {
        top: 60px;
    }

    #reg-external {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 35px;
        width: auto;

        span {
            margin-left: 10px;
            color: @fofadon-main-color;
        }
    }

    #pwd-info {
        display: flex;
        position: absolute;
        justify-content: center;
        width: auto;
        bottom: 10px;
        right: 25px;
        span {
            margin-right: 5px;
            color: @fofadon-main-color;
        }
    }

    .tb {
        position: relative;
        padding: 5px 20px;
    }

    .marg-top {
        margin-top: 15px;
    }

    .login {
        margin: 23px 20px 10px 20px;
        .login-bn {
            width: 100%;
        }
    }

    .errline {
        margin-top: 10px;
    }
}
</style>
