import React from "react"
import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
    Image,
    Button,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { useForm, Controller } from "react-hook-form";

import LayoutAuth from '../componets/LayoutAuth'

import LogoIntroSmall from "../image/Svg/LogoIntroSmall";
import SuperEllipseMaskView from "react-native-super-ellipse-mask";

const AuthRecover = ({ navigation }) => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <LayoutAuth>
            <View style={styles.header}>
                <LogoIntroSmall width={132} height={24} style={styles.mainLogo} />
            </View>
            <View style={styles.authForm}>
                <View >
                    <Text style={styles.authLogo}>Восстановление пароля</Text>
                    <Text style={{ color: "#CBCBCB", textAlign: "center", paddingBottom: 30 }}>На Ваш email будет выслан проверочный
                        код для сброса текущего пароля</Text>
                    <Text style={styles.label}>Email</Text>
                    <Controller
                        style={styles.input}
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholderTextColor="white"
                            />
                        )}
                        name="email"
                        rules={{ required: true }}
                    />
                </View>
                <View style={{ marginBottom: 25 }}>
                    <TouchableOpacity onPress={(data) => {
                        handleSubmit(onSubmit(data));
                        navigation.navigate('Code')
                    }}>
                        <SuperEllipseMaskView radius={{
                            topLeft: 12,
                            topRight: 12,
                            bottomLeft: 12,
                            bottomRight: 12,
                        }}>
                            <View style={styles.buttonInner}
                            >
                                <Text style={{ color: '#0F1218', fontWeight: "600", fontSize: 13 }} >Отправить</Text>
                            </View>
                        </SuperEllipseMaskView>
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
    },
    buttonInnerBack: {
        alignItems: 'center',
        justifyContent: 'center',
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

export default AuthRecover