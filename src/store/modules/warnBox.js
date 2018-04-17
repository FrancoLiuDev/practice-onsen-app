export default {
    strict: true,
    namespaced: true,
    state: {
        option1: null,
        option2: null,
        display: false,
        msg: '',
        result: null,
        uid: ''
    },
    mutations: {
        setOptions(state, options) {
            state.uid = options.id
            state.option1 = null
            state.option2 = null
            state.msg = options.msg
            if (options.option1 != null) {
                state.option1 = options.option1
            }
            if (options.option2 != null) {
                state.option2 = options.option2
            }
        },
        setResult(state, result) {
            result['uid'] = state.uid
            state.result = result
            console.log('new result', state.result)
        },
        warnDisplay(state, display) {
            state.display = display
        }
    },
    getters: {
        option1: state => state.option1,
        option2: state => state.option2,
        msg: state => state.msg,
        display: state => state.display,
        result: state => state.result
    }
}
