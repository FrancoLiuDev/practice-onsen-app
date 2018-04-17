<template>
    <v-ons-page id="app-more-page">
        <navi-toolbar-w :title="$t(pageProp.displyName)"></navi-toolbar-w>
        <v-ons-list-item modifier="chevron" @click="goViewer" id="me-health-crdss" class="single-cell-height peice-content" tappable="true">
            {{$t('SETTING')}}
        </v-ons-list-item>
        <div id="more-person" class="single-cell-height form-margin peice-content">

        </div>
        <div id="more-setting" class="single-cell-height peice-content">

        </div>
    </v-ons-page>
</template>

<script>
import pageControl from "@Contrioller/page/pageControl"

export default {
	name: "RegisterPage",
	mixins: [pageControl],
	components: {},
	data() {
		return {}
	},
	mounted() {
		var self = this
	},
	computed: {},
	methods: {
		pagedInit() {},

		goViewer() {
			this.navigatePage("SettingView", {})
		}
	}
}
</script>

<style lang="less">
#app-more-page {
	.page__content {
		top: 60px;
		bottom: 53px;
	}
	#more-person {
		width: auto;
		background-color: white;
	}
	#more-setting {
		width: auto;
		height: 50px;
		background-color: white;
	}
}
</style>
