import React from "react"
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView
} from 'react-native';


import LayoutAuth from '../componets/LayoutAuth'

import { useForm, Controller } from "react-hook-form";

import LogoIntroSmall from "../image/Svg/LogoIntroSmall";



const Agreement = ({ navigation }) => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const onSubmit = (data) => {
        console.log(data),
            navigation.navigate('Main')
    };
    return (
        <LayoutAuth>
            <View>
                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.scrollView}>
                        <View style={{ color: "white", display: "flex", flexDirection: "column" }}>
                            <Text style={{ color: "white", marginBottom: 15}}>1. Обрабатываемые данные</Text>
                            <Text style={{ color: "white", marginBottom: 15}}>1.1. Мы не осуществляем сбор ваших персональных данных с использованием Сайта.</Text>
                            <Text style={{ color: "white", marginBottom: 15}}>1.2. Все данные, собираемые на Сайте, предоставляются и принимаются в обезличенной форме (далее – «Обезличенные данные»).</Text>
                            <Text style={{ color: "white", marginBottom: 15}}>1.3. Обезличенные данные включают следующие сведения, которые не позволяют вас идентифицировать:</Text>
                            <Text style={{ color: "white", marginBottom: 15}}>1.3.1. Информацию, которую вы предоставляете о себе самостоятельно с использованием онлайн-форм и программных модулей Сайта, включая имя или номер телефона и/или адрес электронной почты.</Text>
                            <Text style={{ color: "white", marginBottom: 15}}>1.3.2. Данные, которые передаются в обезличенном виде в автоматическом режиме в зависимости от настроек используемого вами программного обеспечения.</Text>
                            <Text style={{ color: "white", marginBottom: 15}}>1.4. Администрация вправе устанавливать требования к составу Обезличенных данных Пользователя, которые собираются использованием Сайта.</Text>
                            <Text style={{ color: "white", marginBottom: 15}}>1.5. Если определенная информация не помечена как обязательная, ее предоставление или раскрытие осуществляется Пользователем на свое усмотрение и по собственной инициативе.</Text>
                            <Text style={{ color: "white", marginBottom: 15}}>1.6. Администрация не осуществляет проверку достоверности предоставляемых данных и наличия у Пользователя необходимого согласия на их обработку в соответствии с настоящей Политикой, полагая, что Пользователь действует добросовестно, осмотрительно и прилагает все необходимые усилия к поддержанию такой информации в актуальном состоянии и получению всех необходимых согласий на ее использование.</Text>
                            <Text style={{ color: "white", marginBottom: 15}}>1.7. Вы осознаете и принимаете возможность использования на Сайте программного обеспечения третьих лиц, в результате чего такие лица могут получать и передавать указанные в п.1.3 данные в обезличенном виде.
                                Пример! К указанному программному обеспечению третьих лиц относятся системы сбора статистики посещений Google Analytics и Яндекс.Метрика.</Text>
                            <Text style={{ color: "white", marginBottom: 15}}>1.8. Состав и условия сбора обезличенных данных с использованием программного обеспечения третьих лиц определяются непосредственно их правообладателями и могут включать:
                                данные браузера (тип, версия, cookie);
                                данные устройства и место его положения;
                                данные операционной системы (тип, версия, разрешение экрана);
                                данные запроса (время, источник перехода, IP-адрес).</Text>
                            <Text  style={{ color: "white", marginBottom: 15}}>1.9. Администрация не несет ответственность за порядок использования Обезличенных данных Пользователя третьими лицами.</Text>
                        </View>
                    </ScrollView>
                </SafeAreaView>
                <TouchableOpacity onPress={(data) => {
                    handleSubmit(onSubmit(data))
                }} style={{marginBottom: 25, alignItems: "center"}}>
                    <View style={styles.buttonInner}

                    >
                        <Text style={{ color: 'black', fontWeight: "600", fontSize: 13 }}>Принять</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </LayoutAuth>

    )
}

const styles = StyleSheet.create({
    buttonInner: {
        backgroundColor: '#FAC637',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        height: 50,
        width: "90%"
    },
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

export default Agreement