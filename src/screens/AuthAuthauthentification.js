import React, { useState } from "react"
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

import { useForm, Controller } from "react-hook-form";

import LogoIntroSmall from "../image/Svg/LogoIntroSmall";
import postAuth from "../api/postAuth";
import SuperEllipseMaskView from "react-native-super-ellipse-mask";

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



const AuthAuthauthentification = ({ navigation }) => {
    const [commonFormError, setCommonFormError] = useState("")
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    React.useEffect(
        () =>
          navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
            console.log(123)
          }),
        [navigation]
      );
    const onSubmit = (data) => {
        postAuth(data).then((result) => {
            console.log(result.data)
            if (result.data.success === true) {
                navigation.navigate('Main')
            } else {
                setCommonFormError("Invalid email or password")
            }
        })
        if (data.email === "email" && data.password === "password") {
            navigation.push('Main', {
                initial: false,
            })
        }
        if (data.email === 1111) {
            navigation.push('Main')
        }
        console.log(data)
    }
    const [validEmail, setValidEmail] = useState("")
    return (
        <LayoutAuth>

            <View style={styles.header}>
                <LogoIntroSmall width={132} height={24} style={styles.mainLogo} />
            </View>
            <View style={styles.authForm}>
                <View >
                    <Text style={styles.authLogo}>Авторизация</Text>
                    {commonFormError&&(<Text style={{color: "white", textAlign: "center"}}>{commonFormError}</Text>)}
                    <Text style={styles.label}>Email</Text>
                    {/* <Input name="email" control={control} /> */}
                    {/* <TextInput {...register("email")} style={styles.input}></TextInput> */}
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                            pattern: {
                                value: EMAIL_REGEX,
                                message: "email error",
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={{
                                    backgroundColor: '#1E2127',
                                    color: "white",
                                    height: 44,
                                    minWidth: "100%",
                                    marginBottom: 14,
                                    borderRadius: 8,
                                    borderWidth: 2,
                                    paddingLeft: 20,
                                    paddingTop: 14,
                                    paddingBottom: 14,
                                    borderColor: errors.email ? "rgb(138, 0, 0)" : "#333842"
                                }}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="email"
                    />

                    <Text style={styles.label}>Пароль</Text>
                    {/* <Input name="password" control={control} /> */}
                    {/* <TextInput {...register("password")} style={styles.input}></TextInput> */}
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={{
                                    backgroundColor: '#1E2127',
                                    color: "white",
                                    height: 44,
                                    minWidth: "100%",
                                    marginBottom: 14,
                                    borderRadius: 8,
                                    borderWidth: 2,
                                    paddingLeft: 20,
                                    paddingTop: 14,
                                    paddingBottom: 14,
                                    borderColor: errors.email ? "rgb(138, 0, 0)" : "#333842"
                                }}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="password"
                    />
                    <TouchableOpacity >
                        <View style={{}}
                        >
                            <Text style={{ color: '#CBCBCB', textAlign: "right", textDecorationLine: "underline" }} onPress={() => navigation.navigate('Recover')}>Забыли пароль?</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 25 }}>
                    <Text style={{ color: 'white', textAlign: "center", marginBottom: 24 }}>Нет аккаунта? &ensp;
                        <Text style={{ color: 'white', textDecorationLine: "underline" }} onPress={() => navigation.push('Register')}>Регистрация</Text>
                    </Text>
                    <TouchableOpacity onPress={(handleSubmit(onSubmit))}>
                        <SuperEllipseMaskView radius={{
                            topLeft: 12,
                            topRight: 12,
                            bottomLeft: 12,
                            bottomRight: 12,
                        }}>
                            <View style={styles.buttonInner}

                            >
                                <Text style={{ color: '#0F1218', fontWeight: "600", fontSize: 13 }} onPress={(data) => {
                                }}>Войти</Text>
                            </View>
                        </SuperEllipseMaskView>
                    </TouchableOpacity>
                </View>
            </View>
        </LayoutAuth >

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
        height: 50,
        fontFamily: "Rubik",
        // backgroundColor: "rgba(250, 198, 55, 0.9)"
    },

    authLogo: {
        paddingBottom: 30,
        textAlign: "center",
        color: "white",
        fontWeight: "600",
        fontSize: 22

    }
});

export default AuthAuthauthentification
