import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { Button } from "react-native-paper";

export default function App() {


  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{mensagem}</Text>

      <Button 
        buttonColor="#510161"
        textColor="#ffffff"
        onPress={TrocaMsg}
      >
        Clique Aqui
      </Button>

      <Text style={styles.txt}>{contador}</Text>

      <View style={styles.botoesRow}>
        <Button 
          buttonColor="#510161" 
          textColor="#ffffff" 
          onPress={Contador}
        >
          +1
        </Button>

        <Button 
          buttonColor="#510161" 
          textColor="#ffffff" 
          onPress={Descontar}
        >
          -1
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 20,
    marginBottom: 10,
    color: "#000", // pode mudar pra branco se quiser
  },
  botoesRow: {
    flexDirection: "row",
    gap: 16,
    marginTop: 10,
  },
});