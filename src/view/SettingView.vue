<template>
    <v-ons-page id="app-setting-page">
        <navi-toolbar-w :title="$t(pageProp.displyName)"></navi-toolbar-w>
        <div class="login-relate">
            <div class="login t-center">
                <v-ons-button class="login-bn" @click="doLogout">{{$t('STR_LOGOUT')}}</v-ons-button>
            </div>
        </div>
    </v-ons-page>
</template>

<script>
import pageControl from "@Contrioller/page/pageControl"
import loginDelegate from "@Delegate/loginDelegate"

export default {
	name: "RegisterPage",
	mixins: [pageControl, loginDelegate],
	components: {},
	data() {
		return {}
	},
	mounted() {
		var self = this
	},
	computed: {},
	methods: {
		doLogout() {
			this.userLogout()
			setTimeout(() => {
				this.navigateAsHome("AppHome", null, true)
			}, 800)
		}
	}
}
</script>

<style lang="less">
#app-setting-page {
	.page__content {
		top: 60px;
	}
	.login-relate {
		height: 100%;
		position: relative;
	}
	.login {
		position: absolute;
		bottom: 0px;
		right: 0px;
		left: 0px;
		margin: 7% 30px 40px 30px;
		.login-bn {
			width: 100%;
		}
	}
}
</style>
