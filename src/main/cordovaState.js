/**
 * Cordova State 處理
 */
export default class CordovaState {
    constructor(vm) {
        this.vm = vm
        document.addEventListener('deviceready', () => this.deviceready())
        document.addEventListener('pause', () => this.pause(), false)
        document.addEventListener('resume', () => this.resume(), false)
    }
    deviceready() {
        this.vm.$store.commit('setCordovaState', 'deviceready')
    }
    pause() {
        this.vm.$store.commit('setCordovaState', 'pause')
    }
    resume() {
        this.vm.$store.commit('setCordovaState', 'resume')
    }
}
