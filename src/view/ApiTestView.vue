<template>
    <v-ons-page id="test">
        <h1>API TEST</h1>
        <!-- <button @click="onRegister">註冊</button> -->
        <!-- <button @click="onRegisterCode">驗證碼</button> -->
        <button @click="onLlogin">登入</button>
        <button @click="userLogout">登出</button>
        <!-- <button @click="ckqqlogin">QQ 登入</button> -->
    </v-ons-page>
</template>

<script>
import registerDelegate from '@Delegate/registerDelegate'
import loginDelegate from '@Delegate/loginDelegate'
export default {
    mixins: [registerDelegate, loginDelegate],
    methods: {
        //註冊 簡訊
        onRegister() {
            this.userRegister({
                countrycode: 'CN',
                phone: '18518390186'
            })
        },
        //驗證驗證碼
        onRegisterCode() {
            this.userVerification({
                countrycode: 'CN',
                phone: '18518390186',
                code: '387992'
            })
        },
        //登入
        onLlogin() {
            this.userLogin({
                user: '13910482001',
                pwd: '123456'
            })
            // this.userLogin({
            //     user: '13910482002',
            //     pwd: '123456'
            // })
        },
        //qq登入
        ckqqlogin() {
            this.qqlogin()
        }
    }
}
</script>

<style lang="less">

</style>
