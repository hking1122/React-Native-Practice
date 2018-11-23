import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    ImageBackground,
    Platform,
    ActivityIndicator,
} from 'react-native';

import { fetchLocationId, fetchWeather } from './utils/api';
import getImageForWeather from './utils/getImageForWeather';

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            location:'New York',
            text:'',
            loading:false,
            error:false,
            weather:'',
            temperature:0,
        }
    }

    componentDidMount (){
        this.fetchWeather('New York');
    }

    handleInput = (city)=>{
        this.setState({
            text:city,
        });
    }

    handleChange = () => {
        const {text} = this.state

        if (!text) return;
        this.fetchWeather(text);

        this.setState({
            text:'',
        })
    };

    fetchWeather = async city => {
        if (!city) return;

        this.setState({loading:true},
            async () => {
                try {
                    const locationId = await fetchLocationId(city);
            
                    const { location, weather, temperature } = await fetchWeather(
                      locationId,
                    );
            
                    this.setState({
                      loading: false,
                      error: false,
                      location,
                      weather,
                      temperature,
                    });
                  } catch (e) {
                    this.setState({
                      loading: false,
                      error: true,
                    });
                  }
            }
            );
    }

    render(){
        const { loading, text, error, location, weather, temperature } = this.state;
        return(
            <KeyboardAvoidingView
                style = {styles.container}
                behavior = "padding">
                <ImageBackground
                    source = {getImageForWeather(weather)}
                    style = {styles.imageBackground}
                    imageStyle={styles.image}>
                    <View style={styles.Content}>
                        <ActivityIndicator animating={loading} color="white" size="large" />
                        {!loading && (
                            <View>
                            {!error && (
                                <View>
                                    <Text style={[styles.txtLarge,styles.txtStyle]}>{location}</Text>
                                    <Text style={[styles.txtSmall,styles.txtStyle]}>{weather}</Text>
                                    <Text style={[styles.txtLarge,styles.txtStyle]}>{`${Math.round(temperature)}°`}</Text>
                                </View>
                            )}

                            {error && (
                                <Text style={[styles.txtSmall,styles.txtStyle]}>Could not load weather, please try a different city.</Text>
                            )}
                            </View>
                        )
                        }
                        <View style={styles.txtInput}>
                            <TextInput
                                style={{flex: 1,color:'white'}}
                                placeholder={"Search any city"}
                                placeholderTextColor={'#fff'}
                                underlineColorAndroid={'transparent'}
                                clearButtonMode={'always'}
                                value={text}
                                onChangeText={this.handleInput}
                                onSubmitEditing={this.handleChange}
                            />
                        </View>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imageBackground:{
        flex:1,
    },
    image:{
        flex:1,
        height:null,
        width:null,
        resizeMode:'cover',
    },
    Content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.2)',
        paddingHorizontal: 20,
    },
    txtLarge:{
        fontSize:40,
    },
    txtSmall:{
        fontSize:16,
    },
    txtStyle:{
        textAlign:'center',
        color:'white',
        fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    },
    txtInput:{
        height:40,
        width:300,
        backgroundColor:'#666',
        color:'white',
        paddingHorizontal: 10,
        marginHorizontal: 40,
        borderRadius: 5,
    }
})