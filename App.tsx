import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [result, setResult] = useState("");

  const calcularIMC = () => {
    const alturaEnMetro = parseFloat(altura) / 100;
    const pesoDec = parseFloat(peso);

    const imc = pesoDec / (alturaEnMetro * alturaEnMetro);
    if (imc < 18.5) {
      //console.log(`IMC: ${imc} / Bajo peso`);
      return setResult(
        `Su IMC es ${imc}, lo que indica que usted \n está en la categoría de Bajo peso`
      );
    } else if (imc > 18.5 && imc < 24.9) {
      // console.log(`IMC: ${imc} / Peso normal`);
      return setResult(
        `Su IMC es ${imc}, lo que indica que usted está en la categoría de Peso normal`
      );
    } else if (imc > 25.0 && imc < 29.9) {
      // console.log(`IMC: ${imc} / Sobrepeso`);
      return setResult(
        `Su IMC es ${imc}, lo que indica que usted está en la categoría de Sobrepeso`
      );
    } else if (imc > 30.0) {
      // console.log(`IMC: ${imc} / Obecidad`);
      return setResult(
        `Su IMC es ${imc}, lo que indica que usted está en la categoría de Obecidad`
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Calculadora de IMC</Text>
      <View style={styles.subContainer}>
        <Text style={styles.text}>Por favor ingrese su peso en Kilogramos</Text>
        <TextInput
          style={styles.input}
          value={peso}
          keyboardType="number-pad"
          onChangeText={(e) => setPeso(e)}
        />

        <Text style={styles.text}>
          Por favor ingrese su altura en Centimetros
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={altura}
          onChangeText={(e) => setAltura(e)}
          // onEndEditing={limpiarValores}
        />
      </View>
      <Button
        title="Calcular IMC"
        color={"green"}
        onPress={() => calcularIMC()}
      />
      <TextInput
        style={styles.mostrarResult}
        value={result}
        // value={text}
        editable={false}
        multiline={true}
      />
      <Button
        title="Limpiar valores"
        color={"green"}
        onPress={() => {
          setPeso(" ");
          setAltura(" ");
          setResult(" ");
        }}
      />
      <Image
        style={styles.image}
        source={require("./image/cuerpo-segun-imc.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
  },
  subContainer: {
    width: 420,
    height: "30%",
    backgroundColor: "#c5f1",
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  tittle: {
    color: "green",
    fontSize: 45,
    // fontFamily: "arial",
  },
  text: {
    color: "darkgreen",
    fontSize: 20,
    // fontFamily: "arial",
  },
  input: {
    height: 40,
    width: "30%",
    backgroundColor: "#f4f4f4",
    fontSize: 17,
    borderRadius: 15,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
  },
  mostrarResult: {
    height: 120,
    width: 420,
    backgroundColor: "#fff",
    color: "#000",
    fontSize: 17,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  image: {
    width: 400,
    height: 250,
    margin: 35,
  },
});
