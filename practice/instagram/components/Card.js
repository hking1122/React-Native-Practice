import { Image, StyleSheet, View, ActivityIndicator } from 'react-native';
import React from 'react';
import AuthorRow from './AuthorRow';

export default class Card extends React.Component {
    state = {
        loading:true
    };

    render(){
        const { fullname, image, linkText, onPressLinkText } = this.props;
        const {loading} = this.state;

        handleLoad = ()=>{
            this.setState({
                loading:false
            });
        };

        return(
            <View>
                <AuthorRow
                    fullname={fullname}
                    linkText={linkText}
                    onPressLinkText={onPressLinkText}
                />
                <View>
                {loading && (
                    <ActivityIndicator size={"large"}/>
                )}
                    <Image style={styles.image} source={image} onLoad = {this.handleLoad} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
        backgroundColor: 'rgba(0,0,0,0.02)',
    },
});