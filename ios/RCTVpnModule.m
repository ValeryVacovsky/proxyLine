//
//  RCTVpnModule.m
//  proxyLine
//
//  Created by Alex on 07.11.2022.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(VPNManager, NSObject)

//RCT_EXTERN_METHOD(connect:(NSString *)server psk:(NSString *)psk onSuccess:(((Bool) -> Void))onSuccess onError:(((String) -> Void))onError)
RCT_EXTERN_METHOD(connect: (NSString *)server psk:(NSString *)psk onSuccess:(RCTPromiseResolveBlock)onSuccess onError:(RCTPromiseRejectBlock)onError)

//@interface RCT_EXTERN_MODULE(RNIpSecVpn, RCTEventEmitter)
//
//RCT_EXTERN_METHOD(prepare:(RCTPromiseResolveBlock)findEventsWithResolver rejecter:(RCTPromiseRejectBlock)rejecter)
//RCT_EXTERN_METHOD(connect:(NSString *)address username:(NSString *)username password:(NSString *)password vpnType:(NSString *)vpnType mtu:(NSNumber *_Nonnull)mtu findEventsWithResolver:(RCTPromiseResolveBlock)findEventsWithResolver rejecter:(RCTPromiseRejectBlock)rejecter)
RCT_EXTERN_METHOD(disconnect:(RCTPromiseResolveBlock)findEventsWithResolver rejecter:(RCTPromiseRejectBlock)rejecter)

RCT_EXTERN_METHOD(getStatus:(RCTResponseSenderBlock)resolver)

//RCT_EXTERN_METHOD(getCurrentState:(RCTPromiseResolveBlock)findEventsWithResolver rejecter:(RCTPromiseRejectBlock)rejecter)
//RCT_EXTERN_METHOD(getCharonErrorState:(RCTPromiseResolveBlock)findEventsWithResolver rejecter:(RCTPromiseRejectBlock)rejecter)

@end
