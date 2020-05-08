import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  user: {
    color: 'white',
    backgroundColor: '#0674db',
    padding: 20,
  },
});

export default function User({ first_name, id, navigation }) {
  function handlePress() {
    console.log('presss', id);
    navigation.navigate('UserDetail', {
      id,
    });
  }
  return (
    <Text style={styles.user} onPress={handlePress}>
      {first_name}
    </Text>
  );
}
