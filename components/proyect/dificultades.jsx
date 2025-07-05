// components/quiz/QuizPorDificultad.jsx
import React, { useState, useMemo, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { contenidosEspaciales } from '@/components/proyect/preguntasycontenido';

/* ──────────── constantes ──────────── */
const nivelesDisponibles = [
  'facil',
  'estandar',
  'dificil',
  'hardcore',
  'infinito', // 🆕
];

const DURACION = 15;  // seg por pregunta
const VIDAS_INFINITO = 3;
const puntosPorNivel = { facil: 1, estandar: 2, dificil: 3, hardcore: 4 };

/* ──────────── helpers ──────────── */
const obtenerPreguntas = (nivel) =>
  contenidosEspaciales.flatMap((m) =>
    m.niveles?.[nivel]?.preguntas?.map((p) => ({
      ...p,
      tema: m.titulo,
      textoModulo: m.niveles[nivel].texto,
      dificultad: nivel,
    })) || []
  );

const mezclar = (arr) => [...arr].sort(() => Math.random() - 0.5);

const introInfinito =
  'Modo Infinito:\n• Empiezas con preguntas fáciles y sube la dificultad a mas respondas.\n• Tienes 3 vidas.\n• Cada acierto suma IQ según la dificultad.\n• Pierdes al agotar tiempo o vidas. mucha suerte';

const obtenerTextoIntro = (nivel) =>
  nivel === 'infinito'
    ? introInfinito
    : contenidosEspaciales
      .map((m) => m.niveles?.[nivel]?.texto)
      .filter(Boolean)
      .join('\n\n');

/* ──────────── componente ──────────── */
export default function QuizPorDificultad() {
  /* estados globales */
  const [nivel, setNivel] = useState(null);
  const [fase, setFase] = useState('intro');     // intro | quiz | resultado
  const [indice, setIndice] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [seleccion, setSeleccion] = useState(null);        // índice elegido
  const [tiempo, setTiempo] = useState(DURACION);    // cuenta atrás
  const [vidas, setVidas] = useState(VIDAS_INFINITO);
  const [iq, setIq] = useState(0);           // puntos IQ total
  const [nivelAlcanzado, setNivelAlcanzado] = useState('');

  /* preguntas barajadas por nivel */
  const preguntas = useMemo(() => {
    if (!nivel) return [];

    if (nivel !== 'infinito') return mezclar(obtenerPreguntas(nivel));

    // concatena dificultades crecientes
    return [
      ...mezclar(obtenerPreguntas('facil')),
      ...mezclar(obtenerPreguntas('estandar')),
      ...mezclar(obtenerPreguntas('dificil')),
      ...mezclar(obtenerPreguntas('hardcore')),
    ];
  }, [nivel]);

  /* ───────── temporizador ───────── */
  useEffect(() => {
    if (fase !== 'quiz') return;
    setTiempo(DURACION);
    const id = setInterval(() => {
      setTiempo((t) => {
        if (t <= 1) {
          clearInterval(id);
          if (nivel === 'infinito' || nivel === 'hardcore') {
            setFase('resultado');  // muestra resultado minimal/full según nivel
          } else {
            setNivel(null);
          }
          return DURACION;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [fase, indice, nivel]);

  /* ───────── pantalla selección ───────── */
  if (!nivel) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.title}>Selecciona la dificultad 🚀</Text>
        {nivelesDisponibles.map((niv) => (
          <TouchableOpacity
            key={niv}
            style={[styles.btn, styles[`btn_${niv}`]]}
            onPress={() => {
              setNivel(niv);
              setFase('intro');
              setIndice(0);
              setPuntaje(0);
              setVidas(VIDAS_INFINITO);
              setIq(0);
              setNivelAlcanzado('');
            }}
          >
            <Text style={styles.btnTxt}>{niv.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  /* ───────── validación preguntas ───────── */
  if (preguntas.length === 0) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.title}>No hay preguntas en {nivel}</Text>
        <TouchableOpacity
          style={[styles.btn, styles.btn_estandar]}
          onPress={() => setNivel(null)}
        >
          <Text style={styles.btnTxt}>Volver</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const preguntaActual = preguntas[indice];

  /* ───────── resultado ───────── */
  if (fase === 'resultado') {
    // --- vista minimal para HARDCORE ---
    if (nivel === 'hardcore') {
      return (
        <View style={[styles.container, styles.center]}>
          <Text style={styles.score}>
            {puntaje} / {preguntas.length} correctas
          </Text>

          <TouchableOpacity
            style={[styles.btn, styles.btn_estandar]}
            onPress={() => setNivel(null)}
          >
            <Text style={styles.btnTxt}>Volver a elegir dificultad</Text>
          </TouchableOpacity>
        </View>
      );
    }

    // --- vista completa para otros modos ---
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.title}>¡Fin del quiz!</Text>
        <Text style={styles.score}>
          {puntaje} / {preguntas.length} correctas
        </Text>

        {nivel === 'infinito' && (
          <>
            <Text style={styles.score}>IQ total: {iq}</Text>
            <Text style={styles.score}>Nivel alcanzado: {nivelAlcanzado}</Text>
          </>
        )}

        <TouchableOpacity
          style={[styles.btn, styles.btn_facil]}
          onPress={() => setNivel(null)}
        >
          <Text style={styles.btnTxt}>Volver a elegir dificultad</Text>
        </TouchableOpacity>
      </View>
    );
  }

  /* ───────── introducción ───────── */
  if (fase === 'intro') {
    const intro = obtenerTextoIntro(nivel);
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>
          {nivel === 'infinito'
            ? 'Modo Infinito'
            : `Introducción (${nivel.toUpperCase()})`}
        </Text>
        <Text style={styles.intro}>{intro}</Text>
        <TouchableOpacity
          style={[styles.btn, styles.btn_estandar]}
          onPress={() => setFase('quiz')}
        >
          <Text style={styles.btnTxt}>Comenzar</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  /* ───────── lógica respuesta ───────── */
  const seleccionarOpcion = (i) => {
    setSeleccion(i);
    const esCorrecta = i === preguntaActual.correcta;

    /* puntaje e IQ */
    if (esCorrecta) {
      setPuntaje((p) => p + 1);
      const diff = preguntaActual.dificultad || 'facil';
      setIq((q) => q + puntosPorNivel[diff]);

      // actualizar nivel alcanzado (modo infinito)
      if (nivel === 'infinito') {
        const mapa = {
          facil: 'FÁCIL',
          estandar: 'ESTÁNDAR',
          dificil: 'DIFÍCIL',
          hardcore: 'HARDCORE',
        };
        const nuevo = mapa[diff];
        const orden = ['FÁCIL', 'ESTÁNDAR', 'DÍFICIL', 'HARDCORE'];
        setNivelAlcanzado((prev) =>
          orden.indexOf(nuevo) > orden.indexOf(prev) ? nuevo : prev
        );
      }
    } else {
      if (nivel === 'infinito') setVidas((v) => v - 1);
    }

    /* espera breve para mostrar ícono */
    setTimeout(() => {
      setSeleccion(null);

      /* reglas de fin */
      if (!esCorrecta && nivel === 'hardcore') {
        setFase('resultado');          // pantalla minimal
        return;
      }

      if (nivel === 'infinito' && vidas - (esCorrecta ? 0 : 1) === 0) {
        setFase('resultado');
        return;
      }

      if (indice + 1 < preguntas.length) {
        setIndice(indice + 1);
      } else {
        setFase('resultado');
      }
    }, 600);
  };

  /* ───────── render quiz ───────── */
  const corazones =
    nivel === 'infinito'
      ? '❤️'.repeat(vidas) + '🖤'.repeat(VIDAS_INFINITO - vidas)
      : null;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.progress}>
        {indice + 1}/{preguntas.length} · {nivel.toUpperCase()} | ⏱ {tiempo}s | ✅ {puntaje}{' '}
        {corazones && `| ${corazones}`}
      </Text>

      <Text style={styles.tema}>{preguntaActual.tema}</Text>
      <Text style={styles.question}>{preguntaActual.texto}</Text>

      {preguntaActual.opciones.map((op, i) => (
        <TouchableOpacity
          key={i}
          style={styles.option}
          onPress={() => seleccionarOpcion(i)}
          disabled={seleccion !== null}
        >
          <Text style={styles.optionTxt}>
            {String.fromCharCode(65 + i)}) {op}{' '}
            {seleccion !== null && i === seleccion && (
              i === preguntaActual.correcta ? '✅' : '❌'
            )}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

/* ──────────── estilos ──────────── */
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  center: { justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 16, color: '#333', textAlign: 'center' },

  btn: { paddingVertical: 12, paddingHorizontal: 40, borderRadius: 8, marginVertical: 8 },
  btnTxt: { color: '#fff', fontSize: 16, fontWeight: '600' },
  btn_facil: { backgroundColor: '#4caf50' },
  btn_estandar: { backgroundColor: '#2196f3' },
  btn_dificil: { backgroundColor: '#f44336' },
  btn_hardcore: { backgroundColor: '#6a1b9a' },
  btn_infinito: { backgroundColor: '#ff9800' },

  progress: { fontSize: 14, color: '#555', marginBottom: 8 },
  intro: { fontSize: 15, lineHeight: 22, textAlign: 'justify', color: '#444', marginBottom: 24 },

  tema: { fontSize: 15, fontStyle: 'italic', marginBottom: 4, color: '#666' },
  question: { fontSize: 18, fontWeight: '600', marginBottom: 16 },

  option: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  optionTxt: { fontSize: 16, color: '#212121' },

  score: { fontSize: 20, fontWeight: '600', marginVertical: 10, color: '#333' },
});
