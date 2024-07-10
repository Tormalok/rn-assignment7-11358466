import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const ProductDetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.materials}>
          <Text style={styles.materialsTitle}>MATERIALS</Text>
          <Text>
            We work with monitoring programmes to ensure compliance with safety,
            health and quality standards for our products.
          </Text>
          <Text>• Do not use bleach</Text>
          <Text>• Do not tumble dry</Text>
          <Text>• Dry clean with tetrachloroethylene</Text>
          <Text>• Iron at a maximum of 110°C/230°F</Text>
        </View>
        <View style={styles.empty}></View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={async () => {
            try {
              const existingCartItems = await AsyncStorage.getItem('cartItems');
              let updatedCartItems = [];

              if (existingCartItems !== null) {
                updatedCartItems = JSON.parse(existingCartItems);
              }

              updatedCartItems.push(item);

              await AsyncStorage.setItem(
                'cartItems',
                JSON.stringify(updatedCartItems)
              );

              alert(`${item.title} added to cart`);
            } catch (error) {
              console.error('Error adding to cart:', error);
            }
          }}
        >
          <Text style={styles.addButtonText}>ADD TO BASKET</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    color: '#f00',
    marginVertical: 10,
  },
  materials: {
    marginVertical: 20,
  },
  materialsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  empty: {
    height: 80,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDetailsScreen;
