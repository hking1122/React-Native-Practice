import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import TimerButton from './TimerButton';
import TimerForm from './TimerForm';

export default class ToggleableTimerForm extends React.Component {
    state = {
        isOpen:false,
    };

    handleFormOpen = () => { 
        this.setState(
            {isOpen:true}
        );
    };

    handleFormClose = () =>{
        this.setState(
            {isOpen:false}
        );
    };

    handleFormSubmit = (timer) =>{
        const { onFormSubmit } = this.props;
        onFormSubmit(timer);
        this.setState({
            isOpen:false
        });
    };

    render(){
        const {isOpen} = this.state;
        return(
            <View>
                {isOpen ? (
                    <TimerForm
                     onFormClose = {this.handleFormClose}
                     onFormSubmit = {this.handleFormSubmit}
                    />) : (
                    <TimerButton
                     title="+" 
                     color='#000' 
                     onPress={this.handleFormOpen} 
                     />)}
            </View>
        );
    }
}