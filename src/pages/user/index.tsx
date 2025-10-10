import React, { useState } from "react";
import { style } from "./styles";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Alert, TouchableOpacity, View, Text } from "react-native";
import Login from "../login";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from "react-native-gesture-handler";

export default function User() {
    const navigation = useNavigation<NavigationProp<any>>();

    const [name, setName] = useState("NOME DO USUÁRIO");
    const [email, setEmail] = useState("usuario@gmail.com");
    const [number, setNumber] = useState("Janeiro de 2023");
    const [accountType, setAccountType] = useState("padrão");
    const [status, setStatus] = useState("Verificado");
    const [memberSince, setmemberSince] = useState("Membro");

    const handleLogout = () => {
        Alert.alert("Saiu", "Você saiu da conta!");
        return navigation.reset({routes: [{name: 'Login'}]})
    };

    return (
        <View style={style.container}>
            <Text style={style.title}>SUA CONTA</Text>

            {/*<Text style={style.name}>NOME DO USUARIO</Text>*/}
            <View style={style.inputGroup}>
                <Ionicons name="person-outline" size={22} color="#666" />
                <TextInput
                    style={style.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Digite o nome"
                    placeholderTextColor="#aaa"
                />
            </View>

            <View style={style.inputGroup}>
                <Ionicons name="mail-outline" size={22} color="#666" />
                <TextInput
                    style={style.input}
                    value="email"
                    onChangeText={setEmail}
                    placeholder="Digite o e-mail"
                    keyboardType="email-address"
                    placeholderTextColor="#aaa"
                />
            </View>

            <View style={style.divider} />

            <View style={style.infoSection}>
                <View style={style.inputGroup}>
                    <Ionicons name="calendar-outline" size={22} color="#666" />
                    <TextInput 
                        style={style.input}
                        value={memberSince}
                        onChangeText={setmemberSince}
                        placeholder="Mombro desde..."
                        placeholderTextColor="#666"
                    />
                </View>

                <View style={style.inputGroup}>
                    <Ionicons name="briefcase-outline" size={22} color="#666"/>
                    <TextInput 
                        style={style.input}
                        value={accountType}
                        onChangeText={setAccountType}
                        placeholder="Tipo de conta"
                        placeholderTextColor="#aaa"
                    />
                </View>

                <View style={style.inputGroup}>
                    <Ionicons name="shield-checkmark-outline" size={22} color="#666" />
                    <TextInput 
                        style={style.input}
                        value={status}
                        onChangeText={setStatus}
                        placeholder="Status"
                        placeholderTextColor="#aaa"
                    />
                </View>
            </View>

            <View style={style.divider} />

            <TouchableOpacity
                style={style.saveButton}
                onPress={() => Alert.alert("salvo", "Informações aualizadas com sucesso!")}
            >
                <Text style={style.saveButtonText}>Salvar Alterações</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={style.logoutButton} onPress={handleLogout}>
                <Ionicons
                    name="exit"
                    style={{color: 'gray'}}
                    size={40}
                />
            </TouchableOpacity>
        </View>
    );
}
