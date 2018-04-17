<template>
    <v-ons-page id="login-view">
        <div class="t-center">
            <img class="logo" src="~@Assets/logo.png">
        </div>
        <div class="tb">
            <state-input tagid='log_input_user' :filter="filterMobile" vuetype="text" :hint="$t('STR_LOGIN')" @onInputFocus="onfocus" :value.sync="loginModel.acount"></state-input>
        </div>
        <div class="tb">
            <state-input ref="mInpModelPwd" :filter="filterPassword" tagid='log_input_pwd' vuetype="password" :hint="$t('STR_PASSWORD')" @onInputFocus="onfocus" :value.sync="loginModel.password"></state-input>
        </div>
        <div class="errline t-center">
            <span>{{errline}}</span>
        </div>
        <div class="login t-center">
            <v-ons-button class="login-bn" @click="doLogin">{{$t('STR_LOGIN')}}</v-ons-button>
        </div>
        <div class="t-center title-cmd-cnt">
            <div class="title-cmd">
                <span @click="onForgetPwd" class="fofadon-font-pink">{{$t('STR_FORGETPWD')}}</span>
                <span class="">|</span>
                <span @click="onSignup" class="fofadon-font-pink">{{$t('STR_USER_SIGNUP')}}</span>
            </div>
        </div>
        <div class="t-center other">
            <div id="log-other-line"></div>
            <span id="log-other-title">{{$t('STR_THRIDPARTY_SIGN')}}</span>
            <div id="log-other-icons">
                <div id="log-other-icon">
                    <app-icon @click.native="onWeLogin" size="51" idname='icon-login-wechat'></app-icon>
                    <app-icon @click.native="onQQLogin" size="51" idname='icon-login-qq'></app-icon>
                </div>
            </div>
        </div>
    </v-ons-page>
</template>

<script>
import pageControl from '@Contrioller/page/pageControl'
import loginDelegate from '@Delegate/loginDelegate'
import fonRespDelegate from '@Delegate/fonRespDelegate'
import inputFilter from '@Script/inputFilter'
import formatLooker from '@Script/formatLooker'
import loginErr from '@Models/erros/ErrMsgs'

export default {
    mixins: [pageControl, loginDelegate, fonRespDelegate, inputFilter, formatLooker],
    data() {
        return {
            loginModel: {
                acount: '',
                password: ''
            },
            isfocus: false,
            errline: ''
        }
    },
    watch: {
        userLoginApiState(val, lastVal) {
            console.log('userLoginApiState', val)
            let cb = {
                succcess: () => {
                    this.nextStep()
                },
                err: () => {
                    this.notifyLastErr(this.userLoginApiErrCode)
                    this.showLoginError(this.userLoginApiErrCode)
                }
            }
            this.notifyApiState(val, lastVal, cb)
        },
        user3ThLoginApiState(val, lastVal) {
            console.log('user3ThLoginApiState', val)
        },
        user3ThLoginApiErrCode(val, lastVal) {
            console.log('user3ThLoginApiErrCode', val)
            if (val == '02.008') {
                setTimeout(() => {
                    this.onSignup()
                }, 5)
            }
        },
        loginQQState(val, lastVal) {
            console.log('loginQQState', val)
        },
        qqSsoLoginInfo(val, lastVal) {
            console.log('qqSsoLoginInfo', val)
        },
        //qq錯誤 0 1沒有安裝qq 2 qq登入失敗
        qqErrCode(val, lastVal) {
            console.log('qqErrCode', val)
        },
        //qq登入失敗訊息
        qqSsoLoginErr(val, lastVal) {
            console.log('qqSsoLoginErr', val)
        }
    },
    mounted() {
        this.loginModel.acount = this.lastLoginPone
        //this.loginModel.acount = '13910482344'
    },
    methods: {
        onfocus() {
            setTimeout(() => {
                document.querySelector('#login-view .page__content').scrollTop = 200
            }, 500)
        },
        doLogin() {
            this.errline = ''
            var check = this.checkLoginFormat({
                phone: this.loginModel.acount,
                pwd: this.loginModel.password
            })

            if (!check.pass) {
                this.errline = check.msg
                return
            }
            console.log('this.loginModel', this.loginModel)
            this.userLogin({
                user: this.loginModel.acount,
                pwd: this.loginModel.password
            })
        },
        showLoginError(code) {
            console.log('showLoginError')
            if (code == null) {
                this.errline = this.$t('STR_LOGIN_FAILD')
                return
            }

            if (loginErr.login[code]) {
                this.errline = this.$t(loginErr.login[code].msg)
                return
            }

            if (loginErr.common[code]) {
                this.errline = this.$t(loginErr.common[code].msg)
                return
            }

            this.errline = this.$t('STR_LOGIN_FAILD')
        },
        onWeLogin() {},
        onQQLogin() {
            this.qqlogin()
        },
        onSignup() {
            var data = {}

            if (this.qqSsoLoginInfo != null) {
                data['th3ddta'] = {
                    type: 'QQ',
                    meta: this.qqSsoLoginInfo
                }
                this.navigatePage('RegisterBindView', data)
            } else {
                this.navigatePage('RegisterView', {})
            }
        },
        onForgetPwd() {
            this.navigatePage('ResetPwdView', {})
        },
        nextStep() {
            this.navigatePage('MainView', {}, true)
        }
    }
}
</script>

<style lang="less">
@import 'val.less';
@import 'global.less';

#login-view {
    height: 100%;
    .logo {
        margin-top: 36px;
        margin-bottom: 27px;
        height: 137px;
        width: 175px;
    }
    .page__background {
        &:extend(.form-bg-w);
    }
    .tb {
        padding: 0px 30px 15px 30px;
    }
    .login {
        margin: 3% 30px 10px 30px;
        .login-bn {
            width: 100%;
        }
    }

    .title-cmd-cnt {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
        height: 25px;
    }

    .title-cmd {
        display: flex;
        justify-content: space-between;
        width: 230px;
    }

    .other {
        position: relative;
        height: 30px;
        margin-top: 7%;
    }

    .other #log-other-title {
        position: absolute;
        padding: 8px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
    }

    #log-other-line {
        z-index: 0;
        position: absolute;
        top: 50%;
        left: 30px;
        right: 30px;
        height: 1px;
        background: linear-gradient(to right, #f4ac8a, #e939bb, #f4ac8a);
    }
    #log-other-icons {
        display: flex;
        justify-content: center;
        padding-top: 50px;
    }
    #log-other-icon {
        display: flex;
        width: 130px;
        justify-content: space-between;
    }
    .input {
        width: 100%;
    }
}
</style>
