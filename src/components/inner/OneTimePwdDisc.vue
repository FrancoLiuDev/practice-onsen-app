<template>
    <div id="otp-agree">
        otp-agree <br> s <br> sign-agree sign-agree <br> sign-agree sign-agree <br> sign-agree sign-agree <br> sign-agree sign-agree <br> sign-agree sign-agree <br> sign-agree sign-agree <br> sign-agree sign-agree <br> sign-agree
        <div id="cmds" @click="onDecision"></div>
    </div>
</template>

<script>
export default {
    props: ['onMaskDecision'],
    methods: {
        onDecision(enable) {
            this.$emit('onMaskDecision')
        }
    }
}
</script>

<style lang="less">
@import 'val.less';
@import 'global.less';

#otp-agree {
    position: relative;
    width: 100%;
    background-color: green;
    padding-bottom: 30px;

    #cmds {
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;
        height: 30px;
        border: 1px solid black;
    }
}
</style>
