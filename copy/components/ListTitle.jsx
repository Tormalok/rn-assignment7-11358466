import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ListTitle = () => {
  const label = 'Our Story';
  return (
    <View style={styles.titleHead}>
      <Text style={styles.label}>{label.toUpperCase()}</Text>
      <View style={styles.icons}>
        <View style={styles.icon}>
          <MaterialIcons name="view-list" size={30} />
        </View>
        <View style={styles.icon}>
          <MaterialIcons name="filter-list" size={30} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleHead: {
    paddingHorizontal: 15,
    height: 75,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 5,
    padding: 5,
    backgroundColor: '#F5F5F5',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ListTitle;
