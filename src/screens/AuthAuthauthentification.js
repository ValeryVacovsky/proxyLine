import React from "react"
import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
    Button,
    TextInput,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

import LayoutAuth from '../componets/LayoutAuth'

import { useForm, Controller, useController } from "react-hook-form";

import LogoIntroSmall from "../image/Svg/LogoIntroSmall";
import postAuth from "../api/postAuth";


const Input = ({ name, control }) => {
    const { field } = useController({
        control,
        defaultValue: '',
        name,
    })
    console.log(field)
    return (
        <TextInput
            name={name}
            value={field.value}
            onChangeText={field.onChange}
            style={styles.input}
            placeholder={"proxyline@pl.com"}
            placeholderTextColor="white"
            autoCapitalize="none"
        />
    )
}

const AuthAuthauthentification = ({ navigation }) => {
    const { control, handleSubmit, } = useForm();
    const onSubmit = (data) => {
        postAuth(data).then((result) => {
            console.log(result.data)
            if (result.data.success === true) {
                navigation.navigate('Main')
            }
        })
    }
    return (
        <LayoutAuth>

            <View style={styles.header}>
                <LogoIntroSmall width={132} height={24} style={styles.mainLogo} />
            </View>
            <View style={styles.authForm}>
                <View >
                    <Text style={styles.authLogo}>Авторизация</Text>
                    <Text style={styles.label}>Email</Text>
                    <Input name="email" control={control} />
                    <Text style={styles.label}>Пароль</Text>
                    <Input name="password" control={control} />
                    <TouchableOpacity >
                        <View style={{}}
                        >
                            <Text style={{ color: '#CBCBCB', textAlign: "right", textDecorationLine: "underline" }} onPress={() => navigation.navigate('Recover')}>Забыли пароль?</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 25 }}>
                    <Text style={{ color: 'white', textAlign: "center", marginBottom: 24 }}>Нет аккаунта? &ensp;
                        <Text style={{ color: 'white', textDecorationLine: "underline" }} onPress={() => navigation.navigate('Register')}>Регистрация</Text>
                    </Text>
                    <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                        <View style={styles.buttonInner}

                        >
                            <Text style={{ color: 'black', fontWeight: "600", fontSize: 13 }} onPress={(data) => {
                            }}>Войти</Text>
                        </View>
                    </TouchableOpacity>
                </View>
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
        color: "white",
    },
    mainLogo: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25
    },
    header: {
        flex: 1,
        paddingTop: 20,
        marginTop: 25
    },
    authForm: {
        flex: 2,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: "space-between"
    },
    label: {
        color: 'white',
        marginBottom: 8,
        fontSize: 16,
        lineHeight: 15,
        fontWeight: '500'
    },
    buttonInner: {
        backgroundColor: '#FAC637',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        height: 50,
    },
    input: {
        backgroundColor: '#1E2127',
        color: "white",
        borderColor: 'none',
        height: 44,
        minWidth: "100%",
        marginBottom: 14,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#333842',
        paddingLeft: 20,
        paddingTop: 14,
        paddingBottom: 14
    },
    authLogo: {
        paddingBottom: 30,
        textAlign: "center",
        color: "white",
        fontWeight: "600",
        fontSize: 22,
    }
});

export default AuthAuthauthentification