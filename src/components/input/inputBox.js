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
    //props: ['tagid', 'hint', 'vuetype', 'onInputFocus', 'regLimit', 'onClick', 'filter'],
    props: {
        value: {
            default: '',
            type: String
        },
        tagid: {
            default: null,
            type: String
        },
        hint: {
            default: '',
            type: String
        },
        vuetype: {
            default: 'text',
            type: String
        },
        onInputFocus: {
            default: null

        },
        regLimit: {
            default: null,
        },
        onClick: {
            default: null

        },
        filter: {
            default: null
        }

    },
    mounted: function() {
        this.isTypePassword = this.attributes.type === 'password'
        setTimeout(this.removeAttribute, 500)
    },
    data() {
        return {
            texthint: this.hint,
            display: this.value,
            focused: false,
            isTypePassword: false,
            err: false,
            attributes: {
                type: this.vuetype,
                placeholder: ''
            }
        }
    },
    watch: {
        value: function() {
            this.display = this.value
        },
        display: function() {

            if (this.display == null) return

            if (this.regLimit) {
                if (this.regLimit['lenthMax']) {
                    if (this.display.length > this.regLimit['lenthMax']) {
                        var trimmedString = this.display.substring(0, this.regLimit['lenthMax'])
                        this.display = trimmedString
                    }
                }
                if (this.regLimit['regRule']) {
                    var role = this.regLimit['regRule']
                    if (role == 'digionly') {
                        if (isNaN(this.display)) {
                            var trimmedString = this.display.substring(0, this.display.length - 1)
                            this.display = trimmedString
                        }
                    }
                    if (role == 'textonly') {
                        if (/\d/.test(this.display) == true) {
                            var trimmedString = this.display.substring(0, this.display.length - 1)
                            this.display = trimmedString
                        }
                    }
                }
            }
            if (this.filter != null) {
                var out = this.filter(this.display)
                if (out != null)
                    this.display = out
            }
            this.$emit('update:value', this.display)
        }
    },

    methods: {
        setEnable(enable) {
            document.getElementById(this.tagid).disabled = !enable
        },
        setTextValue(txt) {
            this.display = txt
        },
        setErr() {
            this.err = true
        },
        onEnterPress: function(e) {
            this.$emit('ipEnter')
        },
        removeAttribute: function() {
            if (this.$refs.textInput != null) this.$refs.textInput.removeAttribute('readonly')
        },
        setEnable(enable) {
            document.getElementById(this.tagid).disabled = !enable
        },
        onFocus: function() {
            this.focused = true
            this.err = false
            this.$emit('onInputFocus')
        },
        onBlur: function() {
            this.focused = false

        }
    }
}