import React, { memo } from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';

const ViewContainer = ({ children }) => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.container}>{children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default memo(ViewContainer);
