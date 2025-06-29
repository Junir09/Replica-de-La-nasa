import React, { useState } from "react";
import { View, Button, StyleSheet, SafeAreaView } from 'react-native';
import Con1 from '@/components/proyect/prueba1';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('prueba');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Button title="prueba1" onPress={() => setActiveScreen('prueba')} />
        <Button title="prueba1" onPress={() => setActiveScreen('prueba')} />
        <Button title="prueba1" onPress={() => setActiveScreen('prueba')} />
        <Button title="prueba1" onPress={() => setActiveScreen('prueba')} />
      </View>

      {/* Contenido */}
      <View style={styles.content}>
        {activeScreen === 'prueba' && <Con1 />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  header: {
    backgroundColor: "#2C3E50",
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  headerTitle: {
    fontSize: 20,
    color: "#ecf0f1",
    fontWeight: "bold",
  },
  navButton: {
    backgroundColor: "#3498DB",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  navButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  content: {
    flex: 1,
    padding: 20,
  },
});