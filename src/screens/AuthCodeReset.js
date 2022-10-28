import React, { useState } from "react"
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

import { useForm, useController, Controller } from "react-hook-form";

import LayoutAuth from '../componets/LayoutAuth'

import LogoIntroSmall from "../image/Svg/LogoIntroSmall";
import postRegister from "../api/postRegister";
import SuperEllipseMaskView from "react-native-super-ellipse-mask";


const AuthCodeReset = ({ navigation }) => {
    const { control, handleSubmit, formState: { errors } } = useForm({});
    const [commonFormError, setCommonFormError] = useState("")
    const [focusOnCode, setFocusOnCode] = useState(false)
    const onSubmit = async (data) => {
        // console.log(data)
        const email = await AsyncStorage.getItem("@sign_up_email")
        try {
            const res = await postRegister({ ...data, email })
            await AsyncStorage.setItem("@auth_token", res.data.token)
            navigation.navigate("Auth")
        } catch (error) {
            setCommonFormError("Invalid email_code")
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
                    {commonFormError && (<Text style={{ color: "white", textAlign: "center" }}>Введен не верный код</Text>)}
                    <Text style={styles.label}>Код подтверждения</Text><Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                onFocus={(e) => setFocusOnCode(true)}
                                onBlur={(e) => setFocusOnCode(false)}
                                style={{
                                    backgroundColor: '#1E2127',
                                    color: "white",
                                    height: 44,
                                    minWidth: "100%",
                                    marginBottom: 14,
                                    borderRadius: 8,
                                    borderWidth: 1,
                                    paddingLeft: 20,
                                    paddingTop: 14,
                                    paddingBottom: 14,
                                    borderColor: (focusOnCode && '#fac637') || (errors.email_code && 'rgb(138,0,0)') || '#333842'
                                }}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="email_code"

                    />
                </View>
                <View style={{ marginBottom: 25 }}>
                    <TouchableOpacity onPress={
                        handleSubmit(onSubmit)

                    } activeOpacity={0.8}>
                        <View style={styles.buttonInner}
                        >
                            <Text style={{ color: '#0F1218', fontWeight: "600", fontSize: 13 }}>Отправить</Text>
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
        marginTop: 25,
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
        height: 50,
        borderRadius: 18,
    },
    buttonInnerBack: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 18,
        marginBottom: 20
    },
    input: {
        backgroundColor: '#1E2127',
        color: "white",
        borderColor: 'none',
        height: 44,
        minWidth: "100%",
        marginBottom: 14,
        borderRadius: 8,
        borderWidth: 1,
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

export default AuthCodeReset