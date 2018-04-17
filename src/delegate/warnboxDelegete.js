export default {
    data() {
        return {
            lastId: ''
        }
    },
    computed: {
        warnMsg: {
            get() {
                return this.$store.getters['warnBox/msg']
            }
        },
        warnOption1: {
            get() {
                return this.$store.getters['warnBox/option1']
            }
        },
        warnOption2: {
            get() {
                return this.$store.getters['warnBox/option2']
            }
        },
        warnIsShow: {
            get() {
                return this.$store.getters['warnBox/display']
            },
            set(show) {
                this.$store.commit('warnBox/warnDisplay', show)
            }
        },
        warnResult: {
            get() {
                return this.$store.getters['warnBox/result']
            },
            set(result) {
                this.$store.commit('warnBox/setResult', result)
            }
        }
    },

    methods: {
        setWarnOptions(options) {
            this.lastId = options.id
            console.log('setWarnOptions', options)
            this.$store.commit('warnBox/setOptions', options)
            this.warnIsShow = true
        }
    }
}