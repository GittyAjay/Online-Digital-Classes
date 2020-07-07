import React from 'react';

import {
  StyleSheet,
  Button,
  View,
  StatusBar,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <StatusBar translucent barStyle='dark-content' backgroundColor="transparent"/>
        <Text style={styles.title}>
          Home Page The title and onPress handler are required. It is
          recommended to set accessibilityLabel to help make your app usable by
          everyone.
        </Text>
        <Button
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20.3,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
