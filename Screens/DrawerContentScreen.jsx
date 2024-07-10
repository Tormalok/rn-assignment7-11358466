import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DrawerContentScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{route.name} Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DrawerContentScreen;
