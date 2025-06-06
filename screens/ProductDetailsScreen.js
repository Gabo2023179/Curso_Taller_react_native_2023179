import { Button, StatusBar } from "react-native-web";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const {width, height} = Dimensions.get('window');

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Details Screen</Text>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>

      <Button
        title="Add to Cart"
        onPress={() => navigation.navigate("Cart", { product })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: width * 0.9,
    height: height * 0.5,
    // borderRadius: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 0.2,
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    color: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default ProductDetailsScreen;
