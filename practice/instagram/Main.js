import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import {Constants} from 'expo';


//import Avatar from './components/Avatar';
//import AuthorRow from './components/AuthorRow';
import Card from './components/Card';

export default class Main extends React.Component {
    render(){
        return(
        <View style={styles.container}>
            <Card
                fullname = {'Sing Tao'}
                linkText = {'Comments'}
                onPressLinkText = {()=>{alert('Pressed!');}}
                image = {{uri:'https://unsplash.it/600/600'}}
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop:Constants.statusBarHeight,
        //alignItems: 'center',
        //justifyContent: 'center',
    },
});