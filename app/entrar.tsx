import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function Entrar() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const router = useRouter();

    const handleLogin = () => {
        // validação do email
        if (!email.includes("@")) {
            Alert.alert("Erro", "Email inválido: deve conter '@'");
            return;
        }

        // validação da senha (mínimo 6 caracteres)
        if (senha.length < 6) {
            Alert.alert("Erro", "Senha inválida: deve ter pelo menos 6 caracteres");
            return;
        }

        Alert.alert("Sucesso", "Login bem-sucedido!");
        router.push("/home");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Login</Text>

            <TextInput
                placeholder="Digite seu email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                autoCapitalize="none"
                keyboardType="email-address"
            />

            <TextInput
                placeholder="Digite sua senha"
                value={senha}
                onChangeText={setSenha}
                style={styles.input}
                secureTextEntry
            />

            <TouchableOpacity style={styles.botao} onPress={handleLogin}>
                <Text style={styles.textoBotao}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DC4A31',
    },
    titulo: {
        fontSize: 24,
        marginBottom: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    input: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 12,
        marginBottom: 10,
        borderRadius: 8,
    },
    botao: {
        backgroundColor: '#ffffff',
        padding: 12,
        borderRadius: 8,
        marginTop: 10,
        width: '80%',
        alignItems: 'center',
    },
    textoBotao: {
        color: '#DC4A31',
        fontWeight: 'bold',
    },
});