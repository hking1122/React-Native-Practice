import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native';

import ToggeableForm from './components/ToggeableTimerForm';
import { newTimer } from './utils/TimerUtils';

import uuidv4 from 'uuid/v4';
import EditableTimer from './components/EditableTimer';

export default class Main extends React.Component{
    state = {
        timers: [
            {
                title: 'Mow the lawn',
                project: 'House Chores',
                id: uuidv4(),
                elapsed: 5456099,
                //isRunning: true,
            },
            {
                title: 'Bake squash',
                project: 'Kitchen Chores',
                id: uuidv4(),
                elapsed: 1273998,
                //isRunning: false,
            },
        ],
    };

    handleCreateForSubmit = (timer)=>{
        const {timers} = this.state;
        this.setState({
            timers: [newTimer(timer),...timers]
        })
    };

    render(){
        const {timers} = this.state;

        return(
            <View style = {styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Timer</Text>
                </View>
                <ToggeableForm
                    onFormSubmit ={this.handleCreateForSubmit}
                />
                <ScrollView>
                    {timers.map(({title,project,id,elapsed}) => (
                        <EditableTimer 
                            key = {id}
                            id = {id}
                            title = {title}
                            project = {project}
                            elapsed = {elapsed}
                            //isRunning = {isRunning}
                        />
                    ))}
                </ScrollView>
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