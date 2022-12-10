import { NativeModules } from 'react-native'

const { VPNManager: VPN } = NativeModules

class VPNManager {
  connect(server, key) {
    return VPN.connect(server, key)
  }

  getStatus() {
    return new Promise(async (resolve, reject) => {
      try {
        await VPN.getStatus(value => {
          resolve(value)
        })
      } catch (e) {
        reject(e)
      }
    })
  }

  disconnect() {
    VPN.disconnect()
  }
}

export default new VPNManager()
