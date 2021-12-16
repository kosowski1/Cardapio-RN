import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class Filme extends Component{
    render(){
        return(
            <View>
                <Text style={styles.nome}>{this.props.data.nome}</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container: {

    },
    nome:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
})