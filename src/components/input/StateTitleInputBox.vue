/*Vue Input 封裝*/
<template>
    <div class="sty-input-outer" style="">
        <span v-show="actived" class="input-title">{{title}}</span>
        <div v-if="isTypePassword" style="height: 100%;">
            <input ref="textInput" autocomplete="off" readonly :id="tagid" type="password" v-on:keyup.13="onEnterPress" v-bind:class="{ 'vueinput':true,
                                'err':(err == true) }" v-model="display" @focus="onFocus" v-bind:placeholder="texthint">
        </div>
        <div v-else-if="isTypePassword !== true" style="height: 100%;">
            <input ref="textInput" autocomplete="off" readonly :id="tagid" type="text" v-on:keyup.13="onEnterPress" v-bind:class="{ 'vueinput':true,
                                'err':(err == true) }" v-model="display" @focus="onFocus" v-bind:placeholder="texthint" @blur="onBlur()">
        </div>
        <div class='input-mask' @click="$emit('onInputClick')" v-show="clickble!=null"></div>
        <div class='input-mask' v-show="edit==false"></div>
    </div>
</template>

<script>
import inputBox from './inputBox'
export default {
    name: 'VueStateInput',
    props: ['title', 'clickble', 'onInputClick', 'edit'],
    mixins: [inputBox],
    watch: {
        edit: function() {
            console.log('edit', this.edit)
        }
    },
    computed: {
        actived() {
            return this.display.length > 0 || this.focused == true
        },
        titleText() {
            return this.title != null ? this.title : ''
        }
    }
}
</script>
<style lang="less" scoped>
@import 'global.less';

@color-focus-border-color :@fofadon-main-color;
@color-border-color :@fofadon-pale-color;

.sty-input-outer {
    height: 100%;
    position: relative;
    .input-mask {
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        background-color: transparent;
    }
}
.vueinput {
    width: 100%;
    height: auto;
    line-height: 2.3em;
    font-size: 16px;
    letter-spacing: 0.1em;
    border: 0px solid black;
    text-align: left;
    border-bottom: 2px solid @color-border-color;
    background-color: rgba(0%, 0%, 0%, 0);
    margin-top: 0.8em;
    caret-color: @color-focus-border-color;
    &:focus {
        border-bottom: 2px solid @color-focus-border-color;
        &::placeholder {
            color: transparent;
        }
    }

    &::placeholder {
        color: @color-border-color;
    }
    &.err {
        border-bottom: 2px solid #f00;
    }
}

.input-title {
    font-size: 0.8em;
    color: #555555;
    position: absolute;
    top: 0px;
}
</style>
