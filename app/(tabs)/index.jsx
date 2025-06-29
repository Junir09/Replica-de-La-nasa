import React, { useState } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView, TouchableOpacity, Animated } from 'react-native';
import Con1 from '@/components/proyect/prueba1';

export default function App() {
  // Estado animado que controla la posición horizontal del menú lateral (-200 = oculto fuera de pantalla)
  const [menuAnim] = useState(new Animated.Value(-200));
  // Estado que controla qué pantalla/component se muestra
  const [activeScreen, setActiveScreen] = useState('prueba');
  // Estado que indica si el menú está abierto o cerrado
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para abrir o cerrar el menú lateral con animación
  const toggleMenu = () => {
    if (menuOpen) {
      // Si el menú está abierto, animamos para ocultarlo (mover a la izquierda)
      Animated.timing(menuAnim, {
        toValue: -200,
        duration: 300,
        useNativeDriver: false, // no se usa driver nativo para esta animación de posición
      }).start(() => setMenuOpen(false)); // al terminar la animación, se marca menú como cerrado
    } else {
      // Si el menú está cerrado, primero lo mostramos para que exista en render
      setMenuOpen(true);
      // Luego animamos para mostrarlo (mover a posición 0)
      Animated.timing(menuAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header con botón para abrir/cerrar menú */}
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <Text style={styles.menuText}>☰</Text> {/* Icono de menú */}
        </TouchableOpacity>
      </View>

      {/* Menú lateral deslizable */}
      {menuOpen && (
        <Animated.View style={[styles.sideMenu, { left: menuAnim }]}>
          {/* Botón para cerrar menú */}
          <TouchableOpacity onPress={toggleMenu} style={styles.closeIcon}>
            <Text style={styles.menuText}>✕</Text> {/* Icono cerrar */}
          </TouchableOpacity>

          {/* Botón para cambiar a pantalla "Inicio" y cerrar menú */}
          <View style={styles.button}>
            <Button title="Inicio" onPress={() => {
              setActiveScreen('prueba'); // Cambia la pantalla activa
              toggleMenu(); // Cierra el menú con animación
            }} />
          </View>

          {/* Aquí se pueden agregar más botones para otras pantallas */}
        </Animated.View>
      )}

      {/* Contenido principal, renderiza componente según pantalla activa */}
      <View style={styles.content}>
        {activeScreen === 'prueba' && <Con1 />}
      </View>
    </SafeAreaView>
  );
}

// Estilos para la aplicación
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    padding: 5,
  },
  menuText: {
    fontSize: 25,
    color: "2c3238",
  },
  sideMenu: {
    position: 'absolute',
    top: 0,
    left: 0, // posición controlada por animación
    width: 200,
    height: '100%',
    backgroundColor: 'white',
    paddingTop: 60,
    paddingHorizontal: 10,
    zIndex: 10,
    gap: 10,
  },
  closeIcon: {
    position: 'absolute',
    top: 20,
    right: 10,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginBottom: 10,
  },
});
