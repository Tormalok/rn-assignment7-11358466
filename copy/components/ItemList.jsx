import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: '1',
    title: 'Office Wear',
    description: 'reversible angora cardigan',
    price: '$120',
    image: require('../assets/Dress_Images/dress1.png'),
  },
  {
    id: '2',
    title: 'Black',
    description: 'reversible angora cardigan',
    price: '$120',
    image: require('../assets/Dress_Images/dress2.png'),
  },
  {
    id: '3',
    title: 'Church Wear',
    description: 'reversible angora cardigan',
    price: '$120',
    image: require('../assets/Dress_Images/dress3.png'),
  },
  {
    id: '4',
    title: 'Lamerei',
    description: 'reversible angora cardigan',
    price: '$120',
    image: require('../assets/Dress_Images/dress4.png'),
  },
  {
    id: '5',
    title: '21WN',
    description: 'reversible angora cardigan',
    price: '$120',
    image: require('../assets/Dress_Images/dress5.png'),
  },
  {
    id: '6',
    title: 'Lopo',
    description: 'reversible angora cardigan',
    price: '$120',
    image: require('../assets/Dress_Images/dress6.png'),
  },
];

const Item = ({ item }) => {
  const navigation = useNavigation();

  const addItemToCart = async (item) => {
    try {
      let cartItems = await AsyncStorage.getItem('cartItems');
      cartItems = cartItems ? JSON.parse(cartItems) : [];
      cartItems.push(item);
      await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
      alert(`${item.title} added to cart`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('ProductDetails', { item })}
    >
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
        <TouchableOpacity
          onPress={() => addItemToCart(item)}
          style={styles.addButton}
        >
          <MaterialIcons name='add' size={24} color='black' />
        </TouchableOpacity>
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ItemList = () => {
  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  price: {
    fontSize: 14,
    color: '#f00',
  },
  imageContainer: {
    position: 'relative',
    width: 150,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 200,
    marginBottom: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 18,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 3,
  },
  row: {
    justifyContent: 'space-between',
  },
  text: {
    alignItems: 'flex-start',
    width: 150,
  },
});

export default ItemList;
