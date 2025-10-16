import React, { useState } from "react";
import { style } from "./styles";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Alert, TouchableOpacity, View, Text, Image, Platform, TextInput, ScrollView} from "react-native";
import Login from "../login";
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function User() {
    const navigation = useNavigation<NavigationProp<any>>();
    const [birthDate, setBirthDate] = useState<Date | undefined>(undefined);
    const [showCalendar, setShowCalendar] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleLogout = () => {
        Alert.alert("Saiu", "Você saiu da conta!");
        navigation.reset({routes: [{name: "Login"}] });
    }

    const handleDateChange = (event: any, selectedDate?: Date) => {
        setShowCalendar(Platform.OS === "ios");
        if (selectedDate) {
            setBirthDate(selectedDate);
        }
    }

    const handleSave = () => {
        Alert.alert("Sucesso", "Alterações salvas com sucesso!");
        console.log("Nome:", name);
        console.log("Email", email);
        console.log("Data de Nascimento:", birthDate?.toLocaleDateString("pt-BR"));

        setName("");
        setEmail("");
        setBirthDate(undefined);
    }

    return (
        <ScrollView contentContainerStyle={style.scroll}>
        <View style={style.container}>
            <Image
                source={{uri: "https://cdn-icons-png.flaticon.com/512/847/847969.png"}}
                style={style.profileImage}
            />

            <Text style={style.name}>NOME DO USUÁRIO</Text>

            <View style={style.inputArea}>
                <Text style={style.label}>Nome:</Text>
                <TextInput 
                    style={style.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Digite o seu nome"
                    placeholderTextColor="#aaa"
                />

                <Text style={style.label}>E-mail</Text>
                <TextInput
                    style={style.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Digite seu e-mail"
                    keyboardType="email-address"
                    placeholderTextColor="#aaa"
                />

                <Text style={style.label}>Data de Nascimento:</Text>
                <TouchableOpacity
                    onPress={() => setShowCalendar(true)}
                    style={style.dateButton}
                >
                    <Text style={style.dateText}>
                        {birthDate ? birthDate.toLocaleDateString("pt-BR") : "Selecionar a data"}
                    </Text>
                </TouchableOpacity>

                {showCalendar && (
                    <DateTimePicker
                        value={birthDate || new Date()}
                        mode="date"
                        display="default"
                        onChange={handleDateChange}
                    />
                )}
            </View>

                <TouchableOpacity style={style.saveButton} onPress={handleSave}>
                    <Text style={style.saveButtonText}>Salvar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.logoutButton} onPress={handleLogout}>
                    <Ionicons name="exit" color="gray" size={40} />
                </TouchableOpacity>
           </View>
        </ScrollView>
    )
}