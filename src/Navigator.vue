<template>
    <v-ons-page id="appout">
        <!-- <FoUiKitView></FoUiKitView> -->
        <v-ons-navigator id="appNavi" swipeable swipe-target-width="50px" :page-stack="pageStack" :pop-page="storePop" :options="options" @postpush="showPopTip" @postpop="postPop" @prepop="onPrepop"></v-ons-navigator>
        <transition name="fade">
            <LoadingView v-show="loading"></LoadingView>
        </transition>
        <WarningBox v-show="warnIsShow"></WarningBox>
    </v-ons-page>

</template>
<script>
import AppHome from '@/App'
import appDelegate from '@/delegate/appDelegate'
import LoadingView from '@Components/LoadingView'
import WarningBox from '@Components/warning/WarningBox'
import warnboxDelegete from '@Delegate/warnboxDelegete'
import cordovaStateController from '@Contrioller/cordovaStateController'
import mainLoadingController from '@Contrioller/mainLoadingController'
import resetPwdController from '@Contrioller/resetPwdController'
//Vue.component('warn-box', WarningBox)
export default {
    beforeCreate() {
        this.$store.commit('navigator/push', {
            extends: AppHome,
            data() {
                return {
                    data: {},
                    pageProp: {
                        displyName: '',
                        id: '#register-page',
                        pageListen: []
                    }
                }
            }
        })
    },
    watch: {},
    mixins: [
        appDelegate,
        warnboxDelegete,
        cordovaStateController,
        mainLoadingController
    ],
    components: { LoadingView, WarningBox },
    mounted() {
        var appNavigator = document.getElementById('appNavi')
    },
    data() {
        return {
            isShowWarnning: false
        }
    },
    computed: {
        pageStack() {
            return this.$store.state.navigator.stack
        },
        options() {
            return this.$store.state.navigator.options
        }
    },
    methods: {
        storePop() {
            this.$store.commit('navigator/pop')
        },
        postPop(e) {},
        showPopTip() {},
        onPrepop(e) {}
    }
}
</script>
