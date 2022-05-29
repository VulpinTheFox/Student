import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
const LotsOfStyles = () => {
    return (
      <View style={styles.bg}>
        <Text style={[styles.cent, styles.big]}>Журнал Fox</Text>
        <View style={styles.container}>
          <Text style={styles.blue}>Новости</Text>
          <Image 
          style={{height: 200, marginBottom: 30}}
          source={{uri:'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb'}}/>
          <Text style={[styles.big]}>Восславьте высшую земную расу!</Text>
          <Text style={{marginTop: 30, marginBottom: 30, fontSize: 16}}>Лиси́цы (лат. Vulpes) — род млекопитающих семейства псовых. Наиболее распространённый представитель — обыкновенная лисица. 
          </Text>
          <Button
            title="Читать далее"
            onPress={() => Alert.alert('Мы тоже хотим почитать далее, но не судьба :)')}
          />
        </View>
      </View>
    );
};
const styles = StyleSheet.create({
  bg:{
    backgroundColor: '#d7d7d7',
    paddingTop: 50,
  },
  cent:{
    alignSelf: "center",
  },
  big:{
    fontSize: 30,
    fontWeight: 'bold'
  },
  container: {
    backgroundColor: 'white',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  blue: {
    color: 'blue',
    marginTop: 30,
    marginBottom: 30,
    fontSize: 20,
  },
});
export default LotsOfStyles;
