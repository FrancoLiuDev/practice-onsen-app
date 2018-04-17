/*Vue Input 封裝*/
<template>
    <div style="height: 100%; position: relative;">
        <div v-if="isTypePassword" style="height: 100%;">
            <input ref="textInput" autocomplete="off" readonly :id="tagid" type="password" v-on:keyup.13="onEnterPress" v-bind:class="{ 'vue-state-input':true,
                                'err':(err == true) }" v-model="display" @focus="onFocus" v-bind:placeholder="texthint">
        </div>
        <div v-else-if="isTypePassword !== true" style="height: 100%;">
            <input ref="textInput" autocomplete="off" readonly :id="tagid" type="text" v-on:keyup.13="onEnterPress" v-bind:class="{ 'vue-state-input':true,
                                'err':(err == true) }" v-model="display" @focus="onFocus" v-bind:placeholder="texthint">
        </div>
    </div>
</template>

<script>
import inputBox from './inputBox'
export default {
    /*
        [props] 
        value:  文字雙向綁定的位址
        tagid:  物件的id
        hint:  input 物件的提示文字
        vuetype:  input 物件的 type值 
        [methods]
        update: 內部接收輸入事件的方法
        setEnable: 提供外部 enable 方法
        removeAttribute: 內部取消 readonly 方法
        onEnterPress: 內部接收Enter key事件的方法
    */
    mixins: [inputBox],
    name: 'VueStateInput'
}
</script>

<style lang="less" scoped>
@import 'global.less';

@color-focus-border-color :@fofadon-main-color;
@color-border-color :@fofadon-pale-color;

.vue-state-input {
    width: 100%;
    height: auto;
    line-height: 2.5em;
    font-size: 1em;
    letter-spacing: 0.1em;
    text-align: center;
    border: 2px solid @color-border-color;
    background-color: rgba(0%, 0%, 0%, 0);
    border-radius: 2em;
    &:focus {
        border: 2px solid @color-focus-border-color;
    }
    &::placeholder {
        color: #000000;
    }
    &.err {
        border: 2px solid #f00;
    }
}
</style>
 