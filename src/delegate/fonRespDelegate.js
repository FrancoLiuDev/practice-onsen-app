export default {
    data() {
        return {
            shouldWait: false
        }
    },
    methods: {
        notifyApiState(state, lastState, callback) {
            if (lastState == 'post' && state == 'none') {
                callback.succcess()
            }

            if (state == 'err') {
                callback.err()
            }

            if (state == 'post') {
                this.shouldWait = true
            } else {
                this.shouldWait = false
            }
        },
        notifyLastErr(err) {
            console.log('last eror', err)
        }
    }


}