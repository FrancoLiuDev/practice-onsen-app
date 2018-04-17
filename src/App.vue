<template>
	<v-ons-page id="app" :onInit="pagedInit">
		<img src="~@Assets/images/logo/group.svg" class="group" />
		<img src="~@Assets/images/logo/logo.png" srcset="~@Assets/images/logo/logo@2x.png 2x,
             ~@Assets/images/logo/logo@3x.png 3x" class="logo">
	</v-ons-page>
</template>

<script>
import pageControl from "@Contrioller/page/pageControl"
import appDelegate from "@/delegate/appDelegate"
import loginDelegate from "@Delegate/loginDelegate"

export default {
	name: "app",
	mixins: [pageControl, appDelegate, loginDelegate],
	data() {
		return {}
	},
	methods: {},
	created() {},
	mounted() {
		setTimeout(() => {
			var isLogin = this.isLogin
			if (isLogin) this.navigatePage("MainView", {}, true)
			else this.navigatePage("LoginView", null, true)
			// this.navigatePage('SettingView', null, true)
			// this.navigatePage('ApiTestView', {})
			//this.navigatePage('MainView', {})
			//this.navigatePage('RegisterView', {}, true)
			//this.navigatePage('SetAddrView', {})
		}, 1500)
	},
	methods: {
		pagedInit() {},
		onPageResult(data) {
			console.log("onPageResult", data)
		}
	}
}
</script>
<style lang="less">
* {
	box-sizing: border-box;
	margin: 0px;
	padding: 0px;
	-webkit-touch-callout: none;
}
#app {
	img {
		height: 200px;
		width: 200px;
	}
	#logo-cnt {
		position: relative;
	}

	.group {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-51%, -76%);
		width: 296px;
		height: 302px;
		object-fit: contain;
	}
	.logo {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -110%);
		width: 194px;
		height: 155px;
		object-fit: contain;
	}
	.page__background {
		background-image: url("~@Assets/images/bg.svg");
	}
}
</style>



