import React from 'react';
import { Text, View, TextInput } from 'react-native';

const YourApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Hello world!
      </Text>
      <TextInput>
        Input here!
      </TextInput>
    </View>
  );
}

export default YourApp;