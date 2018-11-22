import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    ActivityIndicator,
    StatusBar
} from 'react-native';

import { fetchLocationId,fetchWeather } from './utils/api';
import SearchInput from './components/SearchInput';
import getImage from './utils/getImageForWeather';

export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      location:'Beijing',
      loading:false,
      error:false,
      temperature:0,
      weather:'',
    };
  }

  handleUpdateLocation = async newLocation => {
    if (!newLocation) return;

    this.setState({loading:true}, async () => {
      try{
        const locationId = await fetchLocationId(newLocation);
        const { location, weather, temperature } = await fetchWeather(
          locationId
        );

        this.setState({
          loading: false,
          error: false,
          location,
          weather,
          temperature,
        });

      } catch(e) {
        this.setState({
          loading: false,
          error: true,
        });
      }
    });

  };

  render() {
    const {location} = this.state;

    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <ImageBackground
          source={getImage('Showers')}
          style={styles.container}
          imageStyle={styles.image}
        >
          <View style={styles.subContainer}>
            <Text style={[styles.textStyle,styles.largeText]}>{location}</Text>
            <Text style={[styles.textStyle,styles.smallText]}>Showers</Text>
            <Text style={[styles.textStyle,styles.largeText]}>13°</Text>
            <SearchInput
              placeholder="Search any city"
              onSubmit={this.handleUpdateLocation}
            />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#24495E'
  },
  subContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:20
  },
  largeText:{
    fontSize:36,
  },
  smallText:{
    fontSize:14,
  },
  textStyle:{
    textAlign:'center'
  },
  imageContainer:{
    flex:1
  },
  image:{
    flex:1,
    width:null,
    height:null,
    resizeMode:'cover'
  }
});
