<<<<<<< HEAD
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>A criadora do Minecraft</Text>
      <Logo />
      <Slogan />
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/entrar")}
      >
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
=======
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default function NovaTarefa() {
  const [titulo, setTitulo] = useState('');
  const [prioridade, setPrioridade] = useState(false);
  const [listaTarefas, setListaTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (titulo.trim() === '') return;

    const novaTarefa = {
      id: Math.random().toString(),
      nome: titulo,
      urgente: prioridade
    };

    setListaTarefas([novaTarefa, ...listaTarefas]);
    setTitulo('');
    setPrioridade(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gerenciador de Tarefas</Text>

      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          placeholder="O que precisa ser feito?"
          onChangeText={setTitulo}
          value={titulo}
        />

        <View style={styles.row}>
          <Text>Tarefa Urgente?</Text>
          <Switch
            value={prioridade}
            onValueChange={(valor) => setPrioridade(valor)}
          />
        </View>

        <TouchableOpacity style={styles.botao} onPress={adicionarTarefa}>
          <Text style={styles.textoBotao}>ADICIONAR TAREFA</Text>
        </TouchableOpacity>
      </View>

      {/* Corrigido: Styles com "s" minúsculo para seguir a constante */}
      <Text style={styles.subHeader}>Minhas Tarefas ({listaTarefas.length})</Text>

      <FlatList
        data={listaTarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, item.urgente ? styles.cardUrgente : styles.cardNormal]}>
            <Text style={styles.cardText}>{item.nome}</Text>
            <Text style={styles.statusTag}>
              {item.urgente ? "URGENTE" : "Normal"}
            </Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhuma tarefa cadastrada.</Text>}
      />
>>>>>>> e8eaef290d075410d9c7a972b6a229332a51eb2b
    </View>
  );
}

const styles = StyleSheet.create({
  container: { // Corrigido: de ( para {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#666',
  },
  formulario: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 10
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 15,
    padding: 8,
    fontSize: 16
  },
row: {
  flexDirection: 'row',
  alignItems: 'center',      
  justifyContent: 'space-between', 
  marginBottom: 15,
},
  botao: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
card: {
  padding: 15,
  borderRadius: 10,
  marginBottom: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#fff',
},
  cardNormal: { borderLeftWidth: 5, borderLeftColor: '#4CAF50' },
  cardUrgente: { borderLeftWidth: 5, borderLeftColor: '#F44336' },
  cardText: { fontSize: 16, color: '#333', flex: 1 },
  statusTag: { fontSize: 12, fontWeight: 'bold' },
  vazio: { textAlign: 'center', marginTop: 20, color: '#999', fontStyle: 'italic' }
});

/*
 Atividade de Fixação
 1= Atividade 1: Análise Técnica (Individual): Se trocar value={titulo} por value="Texto Fixo", o campo fica travado e o usuário não consegue digitar. Resumindo, o campo não aceita digitação porque está sendo controlado por um valor fixo, e não por um estado que possa ser atualizado.
 ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 Atividade 2: Desafio Prático "Calculadora de Gorjetas"
 Objetivo: Desenvolver autonomia na manipulação de estados numéricos.
 */

 import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function CalculadoraGorjeta() {
  // Estado para armazenar o valor da conta (string)
  const [valorConta, setValorConta] = useState('');

  // Converter para número
  const valorNumerico = parseFloat(valorConta) || 0;

  // Calcular 10%
  const gorjeta = valorNumerico * 0.1;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de Gorjeta</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o valor da conta"
        keyboardType="numeric"
        value={valorConta}
        onChangeText={setValorConta}
      />

      <Text style={styles.resultado}>
        Gorjeta (10%): R$ {gorjeta.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  resultado: {
    fontSize: 18,
    textAlign: 'center',
  },
});

// Atividade 3: Pensamento Analítico e UX
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none" // 🔥 resolve o problema
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});
