import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import TimerButton from './TimerButton';

export default class TimerForm extends React.Component {
    //const caption = id ? 'Create' : 'Update';
    constructor(props){
        super(props);
        const {id,title,project} = this.props;

        this.state ={
            title: id ? title : '',
            project: id ? project : '',
        };
    }

    handleTitleChange = (text) => {
        this.setState({
            title: text
        });
    };

    handleProjectChange = (text) => {
        this.setState({
            project:text
        });
    };

    handleSubmit = () => {
        const { onFormSubmit, id } = this.props;
        const { title, project } = this.state;

        onFormSubmit({
            id,
            title,
            project
        });
    };

    render(){
        const {id,onFormClose} = this.props;
        const {title,project} = this.state;
        const caption = id ? 'Update' : 'Create';

        return(
            <View style={styles.formContainer}>
                
                <View style={styles.attributeContainer}>
                    <Text style={styles.textBoxTitle}>Title</Text>

                    <View style={styles.textBox}>
                        <TextInput
                            style = {styles.textInput}
                            underlineColorAndroid = "transparent"
                            Value = {title}
                            onChangeText={this.handleTitleChange}
                        />
                    </View>
                </View>

                <View style={styles.attributeContainer}>
                    <Text style={styles.textBoxTitle}>Project</Text>

                    <View style={styles.textBox}>
                        <TextInput
                            style = {styles.textInput}
                            underlineColorAndroid = "transparent"
                            Value = {project}
                            onChangeText={this.handleProjectChange}
                        />
                    </View>
                </View>

                <View style={styles.buttonGroup}>
                    <TimerButton
                        small
                        color = '#21BA45'
                        title = {caption}
                        onPress = {this.handleSubmit}
                    />
                    <TimerButton
                        small
                        color = '#DB2828'
                        title = "Cancel"
                        onPress = {onFormClose}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formContainer:{
        backgroundColor:'#fff',
        borderColor:'#D6D7DA',
        borderWidth:2,
        borderRadius:10,
        margin:15,
        padding:15,
        marginBottom:0,
    },
    attributeContainer:{
        marginVertical:8,
    },
    textBoxTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    textBox:{
        borderColor:'#D6D7DA',
        borderRadius:2,
        borderWidth:1,
        marginBottom:5,
    },
    textInput:{
        height: 30,
        padding: 5,
        fontSize: 12,
    },
    buttonGroup:{
        flexDirection:'row',
        justifyContent:'space-between',
    }
})