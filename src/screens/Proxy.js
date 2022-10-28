import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView, FlatList } from "react-native";
import LayoutMain from "../componets/LayoutMain";
import ProxyTariff from "../componets/ProxyTariff";
import UserNavigation from "../componets/UserNavigation";

const ProxyList = [1, 2, 3, 4, 5]

const Proxy = ({navigation}) => {
    return (
        <LayoutMain style={{ display: 'flex', alignItems: "center" }}>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    {ProxyList.map((key) => <ProxyTariff key={key} navigation={navigation}/>)}
                </ScrollView>
            </SafeAreaView>
            <View style={{alignItems: "center", marginBottom: 25 }}>
                <UserNavigation />
            </View>
        </LayoutMain >

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
});

export default Proxy
