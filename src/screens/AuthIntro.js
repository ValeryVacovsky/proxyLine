import React from "react"
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import LayoutAuth from '../componets/LayoutAuth'

import LogoIntroBig from "../image/Svg/LogoIntroBig";



const AuthIntro = ({ navigation }) => {
    setTimeout(() => navigation.navigate('Auth'), 1000)
    React.useEffect(
        () =>
          navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
          }),
        [navigation]
      );
    return (
        <LayoutAuth>
            <View style={styles.header}>
                <LogoIntroBig  width={201} height={36} style={styles.mainLogo} onPress={() => navigation.push('Auth')} />
            </View>
        </LayoutAuth>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "#0F1218",
    },
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainLogo: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 201,
        height: 36,
    },
});

export default AuthIntro
