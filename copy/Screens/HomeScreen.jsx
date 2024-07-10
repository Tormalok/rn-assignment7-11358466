import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ListTitle from '../components/ListTitle';
import ItemList from '../components/ItemList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ListTitle />
      <ItemList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default HomeScreen;
