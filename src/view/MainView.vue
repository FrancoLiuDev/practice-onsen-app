<template>
    <v-ons-page id="main-view">
        <navi-toolbar-w :title="$t(pageProp.displyName)"></navi-toolbar-w>
        <div id="avat-bg" class="form-margin">
            <div id="avatar" class="t-center">
                <img width="100%" height="100%" src="~@Assets/svg/head-figure.svg" />
            </div>
        </div>
        <div id="me-orders" class="peice-content">
            <div id="me-order-chk">
                <span>{{$t('STR_MY_ORDERS')}}</span>
                <div id="order-goto">
                    <span>{{$t('STR_ORDER_CHKALL')}}</span>
                    <app-icon size="24" idname='icon-chevron-right'></app-icon>
                </div>
            </div>
            <div id="order-count">
                <div>
                    <app-icon size="28" idname='order-need-to-confirm'></app-icon>
                    <span id="order-cnt">{{count}}</span>
                    <span>{{$t('STR_ORDER_WAITCHK')}}</span>
                </div>
                <div>
                    <app-icon size="28" idname='order-confirm'></app-icon>
                    <span>{{$t('STR_ORDER_CHKD')}}</span>
                </div>
                <div>
                    <app-icon size="28" idname='order-cancel'></app-icon>
                    <span>{{$t('STR_ORDER_CANLD')}}</span>
                </div>
            </div>
        </div>
        <div id="me-healthy" class="single-cell-height peice-content sel-cell">
            <app-icon size="24" idname='health-passport'></app-icon>
            <span>{{$t('STR_HEALTHY_CARD')}}</span>
            <app-icon class="right" size="24" idname='icon-chevron-right'></app-icon>
        </div>
        <div id="me-msgs" @click="navigatePage('ProfileView', {})" class="single-cell-height peice-content sel-cell">
            <app-icon size="24" idname='personal-information'></app-icon>
            <span>{{$t('STR_MY_PROFILE')}}</span>
            <app-icon class="right" size="24" idname='icon-chevron-right'></app-icon>
        </div>
        <div id="me-more" @click="navigatePage('AppMoreView', {})" class="single-cell-height peice-content sel-cell">
            <app-icon size="24" idname='more'></app-icon>
            <span>{{$t('STR_PAGE_MORE')}}</span>
            <app-icon class="right" size="24" idname='icon-chevron-right'></app-icon>
        </div>
        <div class="fix-bar">
            <div class="relt-bar">
                <ons-tabbar>
                    <ons-tab class="one-tabs" @click="onTabClicked" :active="false">
                        <div>
                            <app-icon size="24" idname='icon-rect'></app-icon>
                            <span>{{$t('STR_MAIN_PAGE')}}</span>
                        </div>
                    </ons-tab>
                    <ons-tab class="one-tabs" active>
                        <div>
                            <app-icon size="24" idname='icon-rect'></app-icon>
                            <span>{{$t('STR_RECUPERATE')}}</span>
                        </div>
                    </ons-tab>
                    <ons-tab class="one-tabs" @click="onTabClicked" :active="false">
                        <div>
                            <app-icon size="24" idname='icon-rect'></app-icon>
                            <span>{{$t('STR_LIST')}}</span>
                        </div>
                    </ons-tab>
                    <ons-tab class="one-tabs" active>
                        <div>
                            <app-icon size="24" idname='icon-rect'></app-icon>
                            <span>{{$t('STR_MY')}}</span>
                        </div>
                    </ons-tab>
                </ons-tabbar>
            </div>
        </div>
    </v-ons-page>
</template>

<script>
import pageControl from '@Contrioller/page/pageControl'
import warnboxDelegete from '@Delegate/warnboxDelegete'

export default {
    name: 'MainView',
    mixins: [pageControl, warnboxDelegete],
    data() {
        return {
            count: 1
        }
    },
    watch: {
        warnResult: function() {
            if (this.warnResult.uid == this.pageId) {
                console.log('msg receve', this.warnResult.uid, this)
            }
        }
    },
    methods: {
        onTabClicked() {
            console.log('onTabClicked')
        },
        onMoreClicked() {
            this.navigatePage('AppMoreView', {})
        }
    }
}
</script>

<style lang="less">
@import 'val.less';
@import 'global.less';

#main-view {
    .page__background {
        &:extend(.form-bg);
    }
    .page__content {
        top: 60px;
        bottom: 53px;
    }
    .one-tabs {
        position: relative;
        div {
            position: absolute;
            bottom: 0px;
            left: 0px;
            right: 0px;
            top: 0px;
            span {
                position: absolute;
                font-size: 0.8em;
                bottom: 0px;
                left: 0px;
                right: 0px;
                top: 15px;
                color: #444444;
            }
        }
    }
    .fix-bar {
        position: fixed;
        bottom: 0px;
        width: 100%;
        height: 50px;
    }
    .relt-bar {
        position: relative;
        width: auto;
        height: 100%;
    }
    #avatar {
        &:extend(.abs-center);
        width: 90px;
        height: 90px;
    }
    #avat-bg {
        position: relative;
        background-image: url('~@Assets/images/bg.svg');
        width: auto;
        height: 130px;
    }
    .sel-cell {
        display: flex;
        align-items: center;
        span {
            margin-left: 15px;
        }
        .right {
            position: absolute;
            right: 15px;
        }
    }
    #me-orders {
        display: flex;
        flex-direction: column;
        width: auto;
        height: 130px;

        #me-order-chk {
            display: flex;
            height: 40px;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid black;
            #order-goto {
                display: flex;
                align-items: center;
            }
        }
        #order-count {
            display: flex;
            flex: 1;
            padding-left: 30px;
            padding-right: 30px;
            div {
                position: relative;
                display: flex;
                flex: 1;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 2px;
                #order-cnt {
                    height: 18px;
                    width: 18px;
                    top: 50%;
                    right: 50%;
                    padding-top: 0px;
                    text-align: center;
                    position: absolute;
                    background-color: red;
                    border-radius: 50%;
                    color: white;
                    transform: translate(109%, -180%);
                }
                span {
                    margin-bottom: 15px;
                }
            }
        }
    }

    #me-health-crd {
        margin: 5px 3px 0px 3px;
        padding-left: 10px;
        padding-right: 5px;
        width: auto;
        background-color: white;
    }
    #me-msgs {
        width: auto;
        background-color: white;
    }
    #me-more {
        width: auto;
        background-color: white;
    }
}
</style>
