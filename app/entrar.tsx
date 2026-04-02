import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Entrar() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const router = useRouter();

    const handleLogin = () => {
        console.table({ email, senha });

        if (!email.includes("@") || senha.length <= 6) {
            console.log("❌ Falha no login: Verifique os critérios de validação");
            return;
        }

        console.log(`✅ Acesso autorizado para: ${email}`);
        router.push("/home");
    };

    return (
        <View style={styles.container}>
            <View style={styles.topArea}>
                <Text style={styles.logo}>LOGO</Text>
            </View>

            <View style={styles.formArea}>
                <Text style={styles.title}>Login</Text>

                <TextInput
                    placeholder="Digite seu email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholderTextColor="#999"
                />

                <TextInput
                    placeholder="Digite sua senha"
                    value={senha}
                    onChangeText={setSenha}
                    style={styles.input}
                    secureTextEntry
                    placeholderTextColor="#999"
                />

                {email.length > 0 && (
                    <Text style={styles.helpText}>Logando como: {email}</Text>
                )}
            </View>

            <View style={styles.bottomArea}>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DC4A31',
        paddingHorizontal: 24,
        paddingTop: 40,
    },
    topArea: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    formArea: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomArea: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 30,
    },
    logo: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
        color: '#fff',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#fff',
        padding: 14,
        borderRadius: 10,
        marginBottom: 12,
        fontSize: 16,
    },
    helpText: {
        marginTop: 8,
        color: '#ffffffcc',
        fontSize: 14,
    },
    button: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#ffffff',
        paddingVertical: 16,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#DC4A31',
        fontWeight: 'bold',
        fontSize: 16,
    },
});