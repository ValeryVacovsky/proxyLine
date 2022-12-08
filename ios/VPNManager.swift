//
//  VPNManager.swift
//  proxyLine
//
//  Created by Alex on 07.12.2022.
//

import Foundation
import NetworkExtension

enum ConnectionStatus {
    case connect
    case connection
    case disconnect
    case fail
}

@objc(VPNManager)
final class VPNManager: NSObject {
    static let shared: VPNManager = {
        let instance = VPNManager()
        instance.manager.localizedDescription = Bundle.main.infoDictionary![kCFBundleNameKey as String] as? String
        instance.loadProfile(callback: nil)
        return instance
    }()
    
    let manager: NEVPNManager = { NEVPNManager.shared() }()
    public var isDisconnected: Bool {
        get {
            return (status == .disconnected)
                || (status == .reasserting)
                || (status == .invalid)
        }
    }
    public var status: NEVPNStatus { get { return manager.connection.status } }
    public let statusEvent = Subject<NEVPNStatus>()
    
    private override init() {
        super.init()
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(VPNManager.VPNStatusDidChange(_:)),
            name: NSNotification.Name.NEVPNStatusDidChange,
            object: nil)
    }
    public func disconnect(completionHandler: (()->Void)? = nil) {
        manager.onDemandRules = []
        manager.isOnDemandEnabled = false
        manager.saveToPreferences { _ in
            self.manager.connection.stopVPNTunnel()
            completionHandler?()
        }
    }
    
    @objc private func VPNStatusDidChange(_: NSNotification?){
        statusEvent.notify(status)
    }
    func loadProfile(callback: ((Bool)->Void)?) {
        manager.protocolConfiguration = nil
        manager.loadFromPreferences { error in
            self.manager.loadFromPreferences { error in
                if let error = error {
                    NSLog("Failed to load preferences: \(error.localizedDescription)")
                    callback?(false)
                } else {
                    print(self.manager.connection.status)
                    callback?(self.manager.protocolConfiguration != nil)
                }
            }
//            if let error = error {
//                NSLog("Failed to load preferences: \(error.localizedDescription)")
//                callback?(false)
//            } else {
//                print(self.manager.connection.status)
//                callback?(self.manager.protocolConfiguration != nil)
//            }
        }
    }
    private func saveProfile(callback: ((Bool)->Void)?) {
        manager.saveToPreferences { error in
            if let error = error {
                NSLog("Failed to save profile: \(error.localizedDescription)")
                callback?(false)
            } else {
                callback?(true)
            }
        }
    }
  
    private func getPSKRef(psk: String? = nil) -> Data? {
        if psk == nil { return nil }
        
        KeychainWrapper.standard.set(psk!, forKey: Configuration.KEYCHAIN_PSK_KEY)
        return KeychainWrapper.standard.dataRef(forKey: Configuration.KEYCHAIN_PSK_KEY)
    }
  
    @objc
//    public func connect(_ server: String, psk: String? = nil, onSuccess: @escaping ((Bool) -> Void), onError: @escaping ((String) -> Void)) {
    public func connect() {
      let server = "164.92.138.94"
      let psk: String? = "123ZQvboM7aI+PO6dtHsCgXpnX4WxDK0Uz+ho6mY48fh0g="
        let p = NEVPNProtocolIKEv2()
        if psk != nil {
            p.authenticationMethod = NEVPNIKEAuthenticationMethod.sharedSecret
        } else {
            p.authenticationMethod = NEVPNIKEAuthenticationMethod.none
        }
        
        p.serverAddress = server
        p.disconnectOnSleep = false
        p.remoteIdentifier = server
      p.sharedSecretReference = self.getPSKRef(psk: psk)
        p.useExtendedAuthentication = false
        
        loadProfile { _ in
            self.manager.protocolConfiguration = p
//            if config.onDemand {
//                self.manager.onDemandRules = [NEOnDemandRuleConnect()]
//                self.manager.isOnDemandEnabled = true
//            }
            self.manager.isEnabled = true
            self.saveProfile { success in
                if !success {
//                    onError("Unable To Save VPN Profile()")
                  NSLog("Unable To Save VPN Profile()")
                    return
                }
                self.loadProfile() { success in
                    if !success {
//                        onError("Unable To Load Profile")
                        NSLog("Unable To Load Profile")
                        return
                    }
                    let result = self.startVPNTunnel()
                    if !result {
//                        onError("Can't Connect")
                        NSLog("Can't Connect")
                    } else {
//                        onSuccess(true)
                    }
                }
            }
        }
    }
    private func startVPNTunnel() -> Bool {
        do {
            try self.manager.connection.startVPNTunnel()
            return true
        } catch NEVPNError.configurationInvalid {
            NSLog("Failed to start tunnel (configuration invalid)")
        } catch NEVPNError.configurationDisabled {
            NSLog("Failed to start tunnel (configuration disabled)")
        } catch {
            NSLog("Failed to start tunnel (other error)")
        }
        return false
    }
    
    public func isConnectActive() -> Bool {
        if self.manager.connection.status == .connected {
            return true
        } else {
            return false
        }
    }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
      return true
  }
}
