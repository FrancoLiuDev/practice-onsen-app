<template>
    <div id="navi-tool-bar-w">
        <div id="tool-bar-div">
            <div id='navi-bt'>
                <app-icon size="25" v-show="pageCount >1 || evtBack" @click.native="onNaviClicked" idname='icon-navi-back-color'></app-icon>
            </div>
            <span id="tool-bar-title">{{title}}</span>
            <div id='navi-cmds' v-if="icons">
                <app-icon class="navicmd" v-if="icons.cmd1" size="25" @click.native="icons.cmd1.callback" :idname='icons.cmd1.iconId'></app-icon>
                <app-icon class="navicmd" v-if="icons.cmd2" size="25" @click.native="icons.cmd2.callback" :idname='icons.cmd2.iconId'></app-icon>
            </div>
        </div>
    </div>

</template>

<script>
import naviBar from './naviBar'
export default {
    mixins: [naviBar],
    mounted: function() {},
    computed: {
        submitName() {
            if (this.registerStep == 0) {
                return this.$t('STR_NEXT_STEP')
            } else if (this.registerStep == 1) {
                return this.$t('STR_DO_COMPLETE')
            }
        }
    }
}
</script>

<style lang="less">
@import 'val.less';
@import 'global.less';

#navi-tool-bar-w {
    top: 0px;
    right: 0px;
    left: 0px;
    height: 60px;
    position: fixed;

    #tool-bar-div {
        position: relative;
        height: 60px;
        background-color: white;

        #navi-bt {
            position: relative;
            left: 10px;
            top: 50%;
            transform: translate(0, -50%);
            height: 24px;
            width: 24px;
        }
        #navi-cmds {
            display: flex;
            position: absolute;
            right: 14px;
            height: 24px;
            width: auto;
            top: 51%;
            transform: translate(0, -50%);
            .navicmd {
                margin-left: 5px;
            }
        }
        #tool-bar-title {
            position: absolute;
            padding: 8px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            color: @fofadon-main-color;
            letter-spacing: 2px;
        }
    }
}
</style>
