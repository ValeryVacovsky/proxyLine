import { NativeModules } from 'react-native'

const { VPNManager: VPN } = NativeModules

class VPNManager {
  connect({ server, key, username, password, proxy = {} }) {
    const { address, port, http, https, proxyUsername, proxyPassword } = proxy
    return VPN.connect(server, username, password, key, address, port, proxyUsername, proxyPassword, http, https)
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
