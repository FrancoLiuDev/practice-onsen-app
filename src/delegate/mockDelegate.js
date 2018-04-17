export default {
    data() {
        return {

        }
    },
    computed: {
        userProfile: {
            get() {
                return this.$store.getters['mock/profile']
            },
            set(data) {
                this.$store.commit('mock/setProfile', data)
            }
        }
    }

}