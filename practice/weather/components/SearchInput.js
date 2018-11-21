import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput
} from 'react-native';

export default class SearchInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:'',
        };
    }

    handleChangeText=(newLocation) =>{
        this.setState({text:newLocation});
    };

    handleSubmitText=()=>{
        //const {onSubmit} = this.props;
        //const {text} = this.state;

        //if (!text) return;

        //this.setState({location:''});
    };

    render(){
        const {placeholder} = this.props;
        const {text} = this.state;

        return(
            <View style={styles.container}>
                <TextInput 
                style={styles.textBox}
                placeholder={placeholder}
                value = {text}
                placeholderTextColor="white"
                clearButtonMode="always"
                underlineColorAndroid="transparent"
                onChangeText={this.handleChangeText}
                //onSubmitEditing={this.handleSubmitText}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textBox:{
        flex:1,
        color:'white',
    },
    container:{
        width:300,
        height:40,
        borderRadius:5,
        backgroundColor:'#666',
        marginTop:20,
        marginHorizontal:20,
        paddingHorizontal:10,
        alignSelf:'center'
    }
})