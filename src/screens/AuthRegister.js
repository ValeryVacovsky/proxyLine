import React from "react"
import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
    Image,
    Button,
    TextInput,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

import { useForm, useController, } from "react-hook-form";

import LayoutAuth from '../componets/LayoutAuth'

import LogoIntroSmall from "../image/Svg/LogoIntroSmall";
import postRegisterCode from "../api/postRegisterCode";

const Input = ({ name, control }) => {
    const { field } = useController({
        control,
        defaultValue: '',
        name,
    })
    return (
        <TextInput
            autoCapitalize="none"
            name={name}
            value={field.value}
            onChangeText={field.onChange}
            style={styles.input}
            placeholder={"proxyline@pl.com"}
            placeholderTextColor="white"
        />
    )
}



const AuthRegister = ({ navigation }) => {
    const { control, handleSubmit, } = useForm({});
    const onSubmit = async (data) => {
        const res = await postRegisterCode(data)
        if (res.data.success === true) {
            await AsyncStorage.setItem('@sign_up_email', data.email)
            console.log(data.email)
            navigation.navigate('Code')
        }
    }
    // () => navigation.navigate('Intro')


    return (
        <LayoutAuth>
            <View style={styles.header}>
                <LogoIntroSmall width={132} height={24} style={styles.mainLogo} />
            </View>
            <View style={styles.authForm}>
                <View >
                    <Text style={styles.authLogo}>Регистрация</Text>
                    <Text style={{ color: "#CBCBCB", textAlign: "center", paddingBottom: 30 }}>Пароль будет отправлен на Ваш email</Text>
                    <Text style={styles.label}>Email</Text>
                    <Input name="email" control={control} />
                    <Text style={{ color: '#CBCBCB', textAlign: "center" }}>Регистрируясь вы принимаете
                        <Text onPress={() => navigation.navigate('Agrement')} style={{ color: '#CBCBCB', textDecorationLine: "underline" }}> публичную оферту
                            и политику конфиденциальности</Text>
                    </Text>
                </View>
                <View style={{ marginBottom: 25 }}>
                    <Text style={{ color: 'white', textAlign: "center", marginBottom: 24 }} > Уже есть аккаунт? &ensp;
                        <Text style={{ color: 'white', textDecorationLine: "underline" }} onPress={() => navigation.navigate('Auth')}> Авторизация</Text>
                    </Text>
                    <TouchableOpacity onPress={handleSubmit(onSubmit)} >
                        <View style={styles.buttonInner}
                        >
                            <Text style={{ color: 'black', fontWeight: "600", fontSize: 13 }}>Зарегистрироваться</Text>
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
        width: 132,
        height: 24,
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
        textAlign: "center",
        color: "white",
        fontWeight: "600",
        fontSize: 22,
    }
});

export default AuthRegister