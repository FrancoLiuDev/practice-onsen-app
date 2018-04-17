export default {
    strict: true,
    namespaced: true,
    state: {
        pageResult: {}
    },
    mutations: {
        setPageResult(state, result) {
            state.pageResult[result['tag']] = result
        }
    },
    getters: {
        pageResult: state => state.pageResult
    }
}