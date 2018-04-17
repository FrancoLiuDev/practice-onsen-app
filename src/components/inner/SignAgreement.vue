<template>
    <div id="sign-agreement">
        <span class="select-title t-center">{{$t('STR_SIGN_AGREEMENT')}}</span>
        <div class="select-content">
            <h1>首部及導言</h1>
            <span>欢迎你使用凤妃堂软件及服务！</span>
            <span>为使用凤妃堂软件（以下简称“本软件”）及服务，你应当阅读并遵守《凤妃堂许可及服务协议》（以下简称“本协议”）。请你务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款，以及开通或使用某项服务的单独协议，并选择接受或不接受。限制、免责条款可能以加粗形式提示你注意。 除非你已阅读并接受本协议所有条款，否则你无权下载、安装或使用本软件及相关服务。你的下载、安装、使用、获取微信帐号、登录等行为即视为你已阅读并同意上述协议的约束。
            </span>
            <span>为使用凤妃堂软件（以下简称“本软件”）及服务，你应当阅读并遵守《凤妃堂许可及服务协议》（以下简称“本协议”）。请你务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款，以及开通或使用某项服务的单独协议，并选择接受或不接受。限制、免责条款可能以加粗形式提示你注意。 除非你已阅读并接受本协议所有条款，否则你无权下载、安装或使用本软件及相关服务。你的下载、安装、使用、获取微信帐号、登录等行为即视为你已阅读并同意上述协议的约束。
            </span>
        </div>
        <div id="" class="select-cmd shadow">
            <span @click="onDecision('cancel')" class="cancel">{{$t('STR_NOT_AGREE')}}</span>
            <span @click="onDecision('confirm')" class="confirm">{{$t('STR_AGREE')}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: ['onMakeDecision', 'title'],
    mounted() {},
    data() {
        return {
            selected: null
        }
    },
    computed: {
        isReady: function() {
            if (this.selected == null) return false
            return true
        },
        selectId: function() {
            if (this.selected == null) return -1
            return this.selected.id
        }
    },
    methods: {
        onDecision(decision) {
            if (decision == 'cancel') {
                this.$emit('onMakeDecision', {
                    decision: 'cancel'
                })
            } else if (decision == 'confirm') {
                this.$emit('onMakeDecision', {
                    decision: 'confirm',
                    data: this.selected
                })
            }
        },
        reset() {},
        onOptionSelect(item) {
            this.selected = item
        }
    }
}
</script>

<style lang="less">
@import 'val.less';
@import 'global.less';

#sign-agreement {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    background-color: white;
    height: 400px;
    padding-bottom: 40px;

    h1 {
        font-size: 1em;
        font-weight: bold;
    }
}
</style>
