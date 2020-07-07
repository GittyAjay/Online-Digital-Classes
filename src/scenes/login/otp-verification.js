import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Button, Colors } from 'react-native-ui-lib'; //eslint-disable-line
import { StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { HelpText, SocialButton } from '_components';


export default function OtpVerification({ navigation }) {
  const [isValid, setValid] = React.useState(true);

  async function checkValid(val) {
    (val.length == 6)
      ? setValid(false)
      : setValid(true);
  }

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: 6 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView>
      <View
        style={{
          position: "absolute",
          width: 60,
          top: 20,
          left: 25,//animated
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" style={{ color: "black" }} size={32} />
        </TouchableOpacity>
      </View>

      <View center>
        <HelpText title='Code Vericification' message='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' animation={require('../../assets/lottie/otp-verified.json')} animStyle={{ width: 200, height: 100, paddingTop: 20}}/>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          autoFocus
          onChangeText={async (val) => {
            setValue(val);
            checkValid(val);
          }}
          cellCount={6}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <Button
          disabled={isValid}
          backgroundColor="#30B650"
          label="Continue"
          labelStyle={{ fontWeight: '600' }}
          style={{ height: 48, width: 200 }}
          enableShadow
          iconOnRight
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  codeFieldRoot: { margin: 25, maxWidth: 320, justifyContent: "center" },
  cell: {
    width: 40,
    height: 40,
    margin: 6,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});
