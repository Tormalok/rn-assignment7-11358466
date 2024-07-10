import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={30} style={styles.icon} />
      <Text style={styles.label}>Open Fashion</Text>
      <View style={styles.rightIcons}>
        <MaterialIcons name='search' size={30} style={styles.icon} />
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <MaterialIcons name='shopping-bag' size={30} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 15,
    paddingHorizontal: 8,
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  icon: {
    marginHorizontal: 10,
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  rightIcons: {
    flexDirection: 'row',
  },
});

export default Header;
