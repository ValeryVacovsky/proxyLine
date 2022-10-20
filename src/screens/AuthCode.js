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

import { useForm, useController } from "react-hook-form";

import LayoutAuth from '../componets/LayoutAuth'

import LogoIntroSmall from "../image/Svg/LogoIntroSmall";
import postRegister from "../api/postRegister";

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


const AuthCode = ({ navigation }) => {
    const { control, handleSubmit } = useForm({});
    const onSubmit = async (data) => {
        // console.log(data)
        const email = await AsyncStorage.getItem("@sign_up_email")
        console.log(email)
        try {
            const res = await postRegister({ ...data, email })
            await AsyncStorage.setItem("@auth_token", res.data.token)
            navigation.navigate("Auth")
        } catch (error) {
            console.log(error)
        }


    };
    return (
        <LayoutAuth>
            <View style={styles.header}>
                <LogoIntroSmall width={132} height={24} style={styles.mainLogo} />
            </View>
            <View style={styles.authForm}>
                <View >
                    <Text style={styles.authLogo}>Проверочный код</Text>
                    <Text style={{ color: "#CBCBCB", textAlign: "center", paddingBottom: 30 }}>На Ваш email будует выслан новый пароль</Text>
                    <Text style={styles.label}>Код подтверждения</Text>
                    <Input name="email_code" control={control} />
                </View>
                <View style={{ marginBottom: 25 }}>
                    <TouchableOpacity onPress={
                        handleSubmit(onSubmit)
                    }>
                        <View style={styles.buttonInner}
                        >
                            <Text style={{ color: 'black', fontWeight: "600", fontSize: 13 }}>Отправить</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
                        <View style={styles.buttonInnerBack}
                        >
                            <Text style={{ color: 'white', fontWeight: "600", fontSize: 13 }}>Отменить</Text>
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
    buttonInnerBack: {
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

export default AuthCode