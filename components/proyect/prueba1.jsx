// Importamos los módulos necesarios de React Native
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Componente principal de la app
export default function Con1() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Contador React Native</Text>
      <Text style={styles.numero}>{contador}</Text>
      <Button title="Aumentar" onPress={() => setContador(contador + 1)} />
    </View>
  );
}

// Estilos del componente
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F0FF',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  numero: {
    fontSize: 48,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});
