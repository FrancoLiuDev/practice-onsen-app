<template>
    <v-ons-page id="warn-box">
        <div class="abs-center shadow t-center" id="box-content">
            <div id="header">
                <div id="bg">
                </div>
                <img class="abs-center" src="~@Assets/logo2.png">
            </div>
            <div id="msg" v-html="warnMsg"></div>
            <div class="shadow" id="cmd-cnt">
                <span v-show="warnOption1" @click="onOption('1')">{{warnOption1}}</span>
                <span v-show="warnOption2" @click="onOption('2')">{{warnOption2}}</span>
            </div>
        </div>
    </v-ons-page>
</template>

<script>
import warnboxDelegete from '@Delegate/warnboxDelegete'
export default {
    props: ['onMaskDecision'],
    mixins: [warnboxDelegete],
    data() {
        return {}
    },
    methods: {
        onDecision(enable) {
            this.$emit('onMaskDecision')
        },
        onOption(choice) {
            var result = {
                resurn: choice
            }
            this.warnResult = result
            this.warnIsShow = false
        }
    }
}
</script>

<style lang="less">
@import 'val.less';
@import 'global.less';

#warn-box {
    .page__background {
        background: rgba(0, 0, 0, 0.2);
    }
    .background {
        background: rgba(0, 0, 0, 0.2);
    }
    img {
        height: 50px;
        width: 50px;
    }
    #header {
        position: relative;
        background-color: white;
        height: 45%;
        #bg {
            width: auto;
            height: 50%;
            background-image: url('~@Assets/images/bg.svg');
        }
    }
    #cmd-cnt {
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;
        height: 20%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
            height: 100%;
        }
    }
    #box-content {
        width: 70%;
        max-width: 400px;
        height: 180px;
        background-color: white;
        border-radius: 5px;
        overflow: hidden;
        #msg {
            padding-left: 10px;
            padding-right: 10px;
            width: auto;
            word-break: break-all;
        }
    }
}
</style>
