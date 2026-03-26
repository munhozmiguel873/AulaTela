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
 1= 

 */