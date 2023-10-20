import * as React from 'react';
import { View, Text } from 'react-native';

const CashflowScreen = ({navigation}) => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text
        onPress={()=> navigation.navigate('Home')}
        style={{fontSize:26, fontWeight:'bold'}}>CashflowScreen Screen</Text>      
    </View>
  );
};

export default CashflowScreen; 