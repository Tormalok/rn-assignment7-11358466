import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.headerText}>HENRY AMPONSAH</Text>
      </View>
      <DrawerItem
        label='Home'
        onPress={() => props.navigation.navigate('HomeStack')}
      />
      <DrawerItem
        label='Store'
        onPress={() => props.navigation.navigate('Store')}
      />
      <DrawerItem
        label='Locations'
        onPress={() => props.navigation.navigate('Locations')}
      />
      <DrawerItem
        label='Blog'
        onPress={() => props.navigation.navigate('Blog')}
      />
      <DrawerItem
        label='Jewelry'
        onPress={() => props.navigation.navigate('Jewelry')}
      />
      <DrawerItem
        label='Electronic'
        onPress={() => props.navigation.navigate('Electronic')}
      />
      <DrawerItem
        label='Clothing'
        onPress={() => props.navigation.navigate('Clothing')}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DrawerContent;
