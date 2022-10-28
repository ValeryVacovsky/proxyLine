import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, } from "react-native";
import LayoutMain from "../componets/LayoutMain";
import FlagUsaSmall from "../image/Svg/FlagUsaSmall";
import PeopleIconProxy from "../image/Svg/PeopleIconProxy";
import VectorRight from "../image/Svg/VectorRight";
import VectorRightSmall from "../image/Svg/VectorRightSmall";
const ProxyList = [1, 2, 3, 4, 5]

const Order = ({ navigation }) => {
    return (
        <LayoutMain style={{ display: 'flex', alignItems: "center" }}>
            <View style={{
                flex: 1, alignItems: "center",
                width: "100%",
                paddingLeft: 20,
                paddingRight: 20,
                zIndex: 0,
                marginTop: 11,
            }}>
                <View style={{ zIndex: 1 }}>
                    <Text
                        style={{
                            color: "black",
                            backgroundColor: "#FAC637",
                            paddingLeft: 14,
                            paddingTop: 3,
                            paddingBottom: 4,
                            paddingRight: 14,
                            borderRadius: 8,
                            top: 15,
                            fontSize: 12,
                            fontWeight: "600"
                        }}
                    >
                        Используют до 3-х человек
                    </Text>
                </View>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    zIndex: 0,
                    border: 2,
                    borderBottomColor: "white",
                    backgroundColor: 'rgba(51, 51, 51, 0.3)',
                    marginBottom: 1,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 21,
                    paddingBottom: 14,
                    borderTopLeftRadius: 14,
                    borderTopRightRadius: 14,
                    borderBottomLeftRadius: 14,
                    borderBottomRightRadius: 14
                }}>
                    <View>
                        <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>IPv4 Shared</Text>
                        <Text style={{ color: "#CBCBCB", fontSize: 12, fontWeight: "400" }}>Подходят для любых целей и сайтов</Text>
                    </View>
                    <View>
                        <PeopleIconProxy />
                    </View>
                </View>
                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", paddingTop: 13, paddingBottom: 13, }}>
                    <View>
                        <Text style={{ color: "#CBCBCB" }}>Страна</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                        <Text style={{ color: "white" }}>United States of America</Text>
                        <FlagUsaSmall width={16} height={13} style={{ top: 2, marginLeft: 5, marginRight: 5 }} />
                        <VectorRightSmall width={6} height={12} style={{ top: 5, marginLeft: 10, }} />
                    </View>
                </TouchableOpacity>
                <View style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", paddingTop: 10, marginBottom: 50 }}>
                    <Text style={{ color: "#CBCBCB" }}>5 дней</Text>
                    <Text style={{ color: "#CBCBCB" }}>360 дней</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", paddingTop: 13, paddingBottom: 13 }}>
                    <Text style={{ color: "#CBCBCB" }}>Период</Text>
                    <Text style={{ color: "white", fontWeight: "700", fontSize: 14 }}>90 дней</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <Text style={{ color: "#CBCBCB" }}>Тип</Text>
                    <View style={{ display: "flex", flexDirection: "row", backgroundColor: "#1E2127", padding: 4, borderRadius: 40, left: 5 }}>
                        <TouchableOpacity style={{}}>
                            <Text style={{ color: "#CBCBCB", paddingTop: 10, paddingBottom: 10, paddingLeft: 14, paddingRight: 14, fontSize: 12, fontWeight: "600" }}>HTTP(S)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10, backgroundColor: 'rgba(51, 51, 51, 0.5)', borderRadius: 50 }}>
                            <Text style={{ color: "white", paddingTop: 10, paddingBottom: 10, paddingLeft: 14, paddingRight: 14, fontSize: 12, fontWeight: "600" }}>SOCKS5</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ color: "#CBCBCB" }}>Колличество</Text>
                    <View style={{ display: "flex", flexDirection: "row", padding: 4, borderRadius: 40, left: 5, alignItems: "center" }}>
                        <TouchableOpacity style={{ backgroundColor: "#1E2127", }}>
                            <Text style={{ color: "#CBCBCB", paddingTop: 10, paddingBottom: 10, paddingLeft: 14, paddingRight: 14, fontSize: 12, fontWeight: "600" }}>+</Text>
                        </TouchableOpacity>
                        <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#1E2127", paddingTop: 9, paddingBottom: 9, paddingLeft: 14, paddingRight: 14 }}>
                            <Text style={{ color: "white", fontSize: 14, fontWeight: "600", }}>10</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: "#1E2127", }}>
                            <Text style={{ color: "white", paddingTop: 10, paddingBottom: 10, paddingLeft: 14, paddingRight: 14, fontSize: 12, fontWeight: "600" }}>-</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", paddingTop: 13, paddingBottom: 13 }}>
                    <Text style={{ color: "#CBCBCB" }}>Сена за штуку</Text>
                    <Text style={{ color: "white", fontWeight: "700", fontSize: 14 }}>$ 0.60</Text>
                </View>
            </View>
            <View style={{ alignItems: "center", marginBottom: 25}}>
                <View style={{ display: "flex", flexDirection: "row", width: "90%", justifyContent: "space-between", paddingTop: 13, paddingBottom: 13 }}>
                    <Text style={{ color: "#CBCBCB" }}>Итого к оплате</Text>
                    <Text style={{ color: "white", fontWeight: "700", fontSize: 14 }}>$ 6.0</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Main')} style={{ alignItems: "center",  width: "100%", marginBottom: 20}} activeOpacity={0.8}>
                    <View style={styles.buttonInner}
                    >
                        <Text style={{ color: 'black', fontWeight: "600", fontSize: 13, }}>Купить прокси</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </LayoutMain >

    )
}


const styles = StyleSheet.create({
    buttonInner: {
        backgroundColor: '#FAC637',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: "90%"
    },
});

export default Order
