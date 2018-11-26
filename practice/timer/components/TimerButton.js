import React from 'react';
import { StyleSheet,
         Text,
         TouchableOpacity,
} from 'react-native';

export default function TimerButton ({title,small,color,onPress}) {
    //const {title} = this.props;

    return(
        <TouchableOpacity
            style = {[styles.button,{borderColor:color}]}
            onPress = {onPress}
        >
            <Text 
                style = {[styles.buttonText,
                          small ? styles.small : styles.large,
                        ,{color:color}]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        borderWidth:2,
        borderRadius:3,
        marginTop:10,
        minWidth:100,
        //paddingHorizontal:10,
        marginHorizontal:10,
    },
    small:{
        fontSize:14,
        padding:5,
    },
    large:{
        fontSize:16,
        padding:10,
    },
    buttonText:{
        textAlign:'center',
        fontWeight:'bold',
    }
})