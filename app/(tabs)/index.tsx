import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Onze sneakers</Text>

      <View style={styles.box}>
        <Text style={styles.boxText}>Hier komen straks de product cards</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    minHeight: "100%",
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  box: {
    backgroundColor: "#111",
    borderRadius: 16,
    padding: 20,
  },
  boxText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
