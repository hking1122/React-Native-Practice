import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native';

export default class Main extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Timer</Text>
                </View>
                
{/*                 <ScrollView>

                </ScrollView> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        //justifyContent:'center',
        //alignItems:'center',
    },
    titleContainer: {
        paddingTop: 35,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#D6D7DA',
    },
    titleText:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
    }
})