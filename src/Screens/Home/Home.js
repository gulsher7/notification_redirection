//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';



// create a component
const Home = ({ navigation }) => {




    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title='Go To Setting' onPress={() => navigation.navigate('Settings')} />

            <View style={{ marginVertical: 16 }} />


        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

//make this component available to the app
export default Home;
