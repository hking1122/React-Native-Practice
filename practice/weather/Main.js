import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';

export default class Main extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Text style={[styles.textStyle,styles.largeText]}>Shanghai</Text>
        <Text style={[styles.textStyle,styles.smallText]}>Showers</Text>
        <Text style={[styles.textStyle,styles.largeText]}>13°</Text>
        <TextInput 
          style={styles.textbox}
          placeholder="Search any city"
          placeholderTextColor="white"
          clearButtonMode="always"
          underlineColorAndroid="transparent"
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeText:{
    fontSize:36,
  },
  smallText:{
    fontSize:14,
  },
  textStyle:{
    //alignSelf:'center',
    textAlign:'center'
  },
  textbox:{
    width:300,
    height:40,
    borderRadius:5,
    backgroundColor:'#666',
    color:'white',
    marginTop:20,
    marginHorizontal:20,
    paddingHorizontal:10,
    alignSelf:'center'
  }

});
