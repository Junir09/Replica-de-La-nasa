// App.js
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    const next = count + 1;
    setCount(next);
    if (next === 10) {
      Alert.alert("🎉 ¡Llegaste a 10 clics!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hola, React Native! 👋</Text>

      <Text style={styles.counter}>Clics: {count}</Text>

      <Pressable style={styles.btn} onPress={handlePress}>
        <Text style={styles.btnText}>Sumar 1</Text>
      </Pressable>

      {/* Muestra la barra de estado (hora, batería, etc.) en modo claro */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfdfd",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 24,
  },
  counter: {
    fontSize: 20,
    marginBottom: 16,
  },
  btn: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
    elevation: 3, // sombra ligera (Android)
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
});
