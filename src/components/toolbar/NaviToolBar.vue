<template>
    <div id="navi-tool-bar">
        <div id="tool-bar-div">
            <div id='navi-bt'>
                <app-icon v-show="pageCount >1 || evtBack" @click.native="onNaviClicked" size="25" idname='icon-navi-back'></app-icon>
            </div>
            <span id="tool-bar-title">{{title}}</span>
        </div>
    </div>
</template>

<script>
import naviBar from './naviBar'
export default {
    mixins: [naviBar]
}
</script>

<style lang="less">
@import 'val.less';
@import 'global.less';

#navi-tool-bar {
    top: 0px;
    right: 0px;
    left: 0px;
    height: 60px;
    position: fixed;

    #tool-bar-div {
        position: relative;
        height: 60px;
        background-image: url('~@Assets/images/bg.svg');

        #navi-bt {
            position: relative;
            left: 10px;
            top: 50%;
            transform: translate(0, -50%);
            height: 24px;
            width: 24px;
        }

        #tool-bar-title {
            position: absolute;
            padding: 8px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            color: white;
            letter-spacing: 2px;
        }
    }
}
</style>
