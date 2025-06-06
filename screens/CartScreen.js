import { StatusBar } from "react-native-web";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
const { width, height } = Dimensions.get("window");

const CartScreen = ({ route }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const product = route.params?.product;
    if (product && !cart.some((item) => item.id === product.id)) {
      // Check if the product is already in the cart
      setCart([...cart, product]);
    }
  }, [route.params?.product]);

const placeOrder = () => {
  // Logic to place the order
  alert("Order placed:", cart);
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Screen</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            {/* <Image source={{ uri: item.image }} style={styles.image} /> */}
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>${item.price}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.text}>Your cart is empty</Text>}
        contentContainerStyle={{ padding: 10 }}
      />
      <Button
        title="Place Order (COD)"
        onPress={placeOrder}
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
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width * 0.9,
    height: height * 0.1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: width * 0.2,
    height: height * 0.1,
    borderRadius: 10,
  },
});

export default CartScreen;
