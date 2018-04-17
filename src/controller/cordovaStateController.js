import appDelegate from '@/delegate/appDelegate'
import NetworkState from '@/main/networkState'
const networkStateChkTime = 3000
export default {
    watch: {
        cordovaState(val, old) {
            switch (val) {
                case 'init':
                    break
                case 'deviceready':
                    this.network = new NetworkState(this)
                    this.network.start(networkStateChkTime)
                    break
                case 'pause':
                    this.network.stop()
                    break
                case 'resume':
                    this.network.start(networkStateChkTime)
                    break
                default:
            }
        }
    }
}
