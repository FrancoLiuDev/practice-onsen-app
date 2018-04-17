<template>
    <div :style="iconHeightStyle">
        <div v-if="idname == 'icon-chevron-right'">
            <img :width="size" :height="size" src="~@Assets/svg/chevron-right.svg" />
        </div>
        <div v-if="idname == 'icon-login-wechat'">
            <img :width="size" :height="size" src="~@Assets/svg/wechat.svg" />
        </div>
        <div v-if="idname == 'icon-login-qq'">
            <img :width="size" :height="size" src="~@Assets/svg/qq.svg" />
        </div>
        <div v-if="idname == 'icon-navi-back'">
            <img :width="size" :height="size" src="~@Assets/svg/navi-back.svg" />
        </div>
        <div v-if="idname == 'icon-navi-back-color'">
            <img :width="size" :height="size" src="~@Assets/svg/navi-back-color.svg" />
        </div>
        <div v-if="idname == 'icon-form-edit'">
            <img :width="size" :height="size" src="~@Assets/svg/form-edit.svg" />
        </div>
        <div v-if="idname == 'icon-edit-save'">
            <img :width="size" :height="size" src="~@Assets/svg/icon-edit-save.svg" />
        </div>
        <div v-if="idname == 'icon-rect'">
            <img :width="size" :height="size" src="~@Assets/svg/icon-rect.svg" />
        </div>
        <div v-if="idname == 'question-mark'">
            <img width="100%" height="100%" src="~@Assets/svg/question-mark.svg" />
        </div>
        <div v-if="idname == 'order-need-to-confirm'">
            <img :width="size" :height="size" src="~@Assets/svg/order-need-to-confirm.svg" />
        </div>
        <div v-if="idname == 'order-confirm'">
            <img :width="size" :height="size" src="~@Assets/svg/order-confirm.svg" />
        </div>
        <div v-if="idname == 'order-cancel'">
            <img :width="size" :height="size" src="~@Assets/svg/order-cancel.svg" />
        </div>
        <div v-if="idname == 'health-passport'">
            <img :width="size" :height="size" src="~@Assets/svg/health-passport.svg" />
        </div>
        <div v-if="idname == 'personal-information'">
            <img :width="size" :height="size" src="~@Assets/svg/personal-information.svg" />
        </div>
        <div v-if="idname == 'more'">
            <img :width="size" :height="size" src="~@Assets/svg/more.svg" />
        </div>
    </div>
</template>

<script>
export default {
	props: {
		state: {
			default: function() {
				return {
					active: true,
					custom: null
				}
			},
			type: Object
		},
		idname: {
			default: "",
			type: String
		},
		size: {
			default: "20",
			type: String
		},
		stycolor: {
			type: Object
		}
	},
	data() {
		return {}
	},
	computed: {
		iconHeightStyle() {
			return "height:" + this.size + "px;"
		},
		iconStyle() {
			return this.styleSize + this.styleColor
		},
		styleSize() {
			return "font-size:" + this.size + "px;"
		},
		styleColor() {
			return this.packStyleColor(this.getIconColor(""))
		}
	},
	methods: {
		packStyleColor: function(color) {
			return "color:" + color + ";" + "color-var:" + color
		},
		getIconColor(defaultColor) {
			var customColor = null
			var actColor = null
			if (!this.stycolor) return defaultColor

			customColor = this.getCustomColor()
			if (customColor != null) {
				return customColor
			}

			if (this.state.active) {
				if (this.state.active == true && this.getActiveColor()) {
					return this.getActiveColor()
				} else if (this.state.active == false && this.getDisableColor()) {
					return this.getDisableColor()
				}
			}
			return defaultColor
		},
		getCustomColor() {
			if (this.state.custom == null) return null
			if (this.stycolor[this.state.custom] == null) return null
			return this.stycolor[this.state.custom]
		},
		getActiveColor() {
			return this.stycolor.active
		},
		getDisableColor() {
			return this.stycolor.disable
		}
	}
}
</script>

