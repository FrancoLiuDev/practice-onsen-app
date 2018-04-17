export default {
    strict: true,
    namespaced: true,
    state: {
        profile: null
    },
    mutations: {
        setProfile(state, data) {
            state.profile = data
        }
    },
    getters: {
        profile: state => state.profile
    }
}