import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

const FixedDimensionsBasics = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{
        backgroundColor: 'powderblue', alignItems: "center", paddingTop: 30, flex: 0.1
      }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          5 книжных новинок октября
        </Text>
      </View>
      <View style={{
        backgroundColor: 'skyblue', flex: 0.2, alignItems: "center", paddingTop: 30}}> 
        <Text style={{fontSize: 18}}>
          Новый выпуск журнала "Times"!
        </Text>
      </View>
      <View style={{
        backgroundColor: 'steelblue', flex: 0.7, paddingTop: 30, alignItems: "center"
      }}> 
        <Text style={{fontSize: 16, marginBottom: 30}}>
          Покупайте журналы только у нас
        </Text>
        <Button
        title="Читать далее"
        onPress={() => Alert.alert('Наши журналы топ!')}
      />
      </View>
    </View>
  );
};

export default FixedDimensionsBasics;