<template>
    <v-ons-page id="ui-kit-view">
        <v-ons-list-title>輸入框</v-ons-list-title>
        <v-ons-list>
            <v-ons-list-item>
                <!-- 圓弧輸入框 -->
                <input class="fofadon-input" placeholder="提示文字" @focus="onfocus" v-moldel="uid"></input>
            </v-ons-list-item>
            <v-ons-list-item>
                <!-- 圓弧輸入框錯誤型態 -->
                <input class="fofadon-input err" placeholder="提示文字"></input>
            </v-ons-list-item>
        </v-ons-list>
        <v-ons-list-title>全局載入</v-ons-list-title>
        <v-ons-list-item>
            <v-ons-button @click="startLoading">Loading</v-ons-button>
        </v-ons-list-item>
    </v-ons-page>
</template>

<script>
import appDelegate from '@/delegate/appDelegate'
export default {
    mixins: [appDelegate],
    methods: {
        //全局載入
        startLoading() {
            this.loading = true
            setTimeout(() => (this.loading = false), 2000)
        },
        onfocus() {
            //鍵盤展開view上移
            setTimeout(() => {
                let aaa = document.querySelector('#ui-kit-view .page__content')
                aaa.scrollTop = 300
            }, 500)
        }
    }
}
</script>
