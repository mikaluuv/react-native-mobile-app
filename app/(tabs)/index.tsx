import ProductCard from "../../components/ProductCard";

import { useState } from "react";
import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

export default function HomeScreen() {
  const [search, setSearch] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Onze sneakers</Text>

      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        }}
        style={styles.image}
      />

      <TextInput
        style={styles.input}
        placeholder="Zoek een sneaker..."
        placeholderTextColor="#999"
        value={search}
        onChangeText={setSearch}
      />

      <View style={styles.switchRow}>
        <Text style={styles.switchText}>Dark mode preview</Text>
        <Switch value={isEnabled} onValueChange={setIsEnabled} />
      </View>

      <Pressable style={styles.customButton}>
        <Text style={styles.customButtonText}>Shop now</Text>
      </Pressable>

      <View style={styles.buttonWrapper}>
        <Button
          title="Bekijk alle producten"
          onPress={() => alert("Button werkt!")}
        />
      </View>

      <ProductCard />
      <ProductCard />
      <ProductCard />
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

  image: {
    width: "100%",
    height: 220,
    borderRadius: 20,
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#111",
    color: "#fff",
    borderRadius: 14,
    paddingHorizontal: 15,
    paddingVertical: 14,
    marginBottom: 20,
    fontSize: 16,
  },

  switchRow: {
    backgroundColor: "#111",
    borderRadius: 14,
    padding: 15,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  switchText: {
    color: "#fff",
    fontSize: 16,
  },

  customButton: {
    backgroundColor: "#e11d48",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 15,
  },

  customButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  buttonWrapper: {
    marginBottom: 20,
  },
});
