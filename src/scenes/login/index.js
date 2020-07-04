import React, {useState} from 'react'; 
import { Text, View, TextField, Button, Colors} from 'react-native-ui-lib'; //eslint-disable-line

import {StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [name, setName] = React.useState('');
  const [isValid, setValid] = React.useState(true);

  async function checkValid(val){
    (val.length==10)
      ? setValid(false)
      : setValid(true);
  }

  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Login with phone number.</Text>
        <Text>
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document.
        </Text>
        <View style={styles.mobileInput}>
        <TextField
            placeholder="+91"
            hideUnderline
            keyboardType={'phone-pad'}
            editable={false}
            containerStyle={styles.input}
            style={styles.inputFild}
            enableErrors={false}
          />
          
          <TextField
            placeholder="Enter mobile number"
            hideUnderline
            maxLength={10}
            keyboardType={'phone-pad'}
            containerStyle={styles.input, {flex: 1}}
            style={styles.inputFild}
            enableErrors={false}
            onChangeText={async (val)=>{
              setName(val);
              checkValid(val);
            }}
          />
        </View>
        <Button
          disabled={isValid}
          backgroundColor="#FB3C62"
          label="Continue"
          borderRadius={4}
          style={{height: 45,}}
          onPress={()=>navigation.navigate('Home')}
        />
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'flex-end',
  },
  inputFild :{
    padding: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: Colors.grey50,
    borderRadius: 2,
  },
  title: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
  },
  mobileInput: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 12.0,
  },
});
