export default {
    computed: {
        //全局loading view 狀態
        loading: {
            get() {
                return this.$store.getters.loading
            },
            set(_f) {
                this.$store.commit('setLoading', _f)
            }
        },
        uid: {
            get() {
                return this.$store.state.uid
            },
            set(uid) {
                this.$store.commit('setUid', uid)
            }
        },
        //cordova 生命週期 deviceready pause resume
        cordovaState() {
            return this.$store.state.cordovaState
        },
        //網路狀態 none wifi 4g 3g .....
        networkState() {
            return this.$store.state.networkState
        },
        //網路是否連線 true/flase
        netOnLine() {
            return this.$store.getters.netOnLine
        }
    }
}
