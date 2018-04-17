/**
 * 網站狀態監視
 */
export default class NetworkState {
    constructor(vm) {
        this.vm = vm
        this.isStart = false
    }
    start(checkTime = 3000) {
        this.isStart = true
        this.timeId = setInterval(() => this.checkConnection(), checkTime)
    }
    stop() {
        this.isStart = false
        clearInterval(this.timeId)
    }
    checkConnection() {
        this.vm.$store.commit('setNetworkState', navigator.connection.type)
    }
}
