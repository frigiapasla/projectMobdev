import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ComponentScreen = () => {

    const myName = 'By:';
    const nama = <Text>Pasla, Frigia Faby</Text>;
    const nama1 = <Text>Taju, Veldiman</Text>;

    return (
        <View>
            <Image 
                style={{width: 400, height: 200}}
                source={require('../assets/logo_kost.jpg')}
            />
            <Text style={styles.textStyle}> 
                Final Project Mobile Development
            </Text>
            <Text style={styles.textStyle2}>
                {myName}
            </Text>
            {nama}
            {nama1}
        </View> 
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 26,
        color: 'blue'
    },
    textStyle2: {
        fontSize: 22,
        color: 'red'
    }
});

export default ComponentScreen;


