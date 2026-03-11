import { Image, StyleSheet, Text, View } from "react-native";

export default function ProductCard() {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
        }}
        style={styles.image}
      />

      <Text style={styles.name}>Nike Air Max</Text>

      <Text style={styles.description}>
        Comfortabele sneaker voor dagelijks gebruik
      </Text>

      <Text style={styles.price}>€129</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111",
    borderRadius: 16,
    padding: 15,
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    marginBottom: 10,
  },

  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  description: {
    color: "#aaa",
    marginTop: 5,
  },

  price: {
    color: "#fff",
    marginTop: 10,
    fontWeight: "bold",
  },
});
