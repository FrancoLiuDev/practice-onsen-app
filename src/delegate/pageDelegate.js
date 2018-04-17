export default {
    computed: {
        pageResult: {
            get() {
                return this.$store.getters["pageResult/pageResult"]
            },
            set(result) {
                this.$store.commit("pageResult/setPageResult", result)
            }
        },
        pageCount: {
            get() {
                return this.$store.state.navigator.stack.length
            }
        }
    },
    methods: {
        pushPage(page) {
            this.$store.commit("navigator/push", page)
        },
        replacePage(page) {
            this.$store.commit("navigator/replace", page)
        },
        popPage(data = null) {
            this.$store.commit("navigator/pop")
            if (data != null) this.pageResult = data
        },
        resetPage(page) {
            this.$store.commit("navigator/reset", page)
        }

    }
}