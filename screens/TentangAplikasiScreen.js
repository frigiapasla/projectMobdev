import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ComponentScreen = () => {

    const myName = 'By:';
    const nama = <Text>Pasla, Frigia Faby</Text>;
    const nama1 = <Text>Taju, Veldiman</Text>;
    const nama2 = <Text>Musak, Nehemia</Text>;

    return (
        <View style={styles.tentangAplikasiLayout}>
            <View style={styles.column}>
                <Image 
                    style={{width: 350, height: 100}}
                    source={require('../assets/logo_kost.jpg')}
                />
            </View>
            <View style={styles.column}>
                <Text style={styles.textStyle}> 
                    Final Project Mobile Development
                </Text>
                <Text style={styles.textStyle2}>
                    {myName}
                </Text>
                {nama}
                {nama1}
                {nama2}
            </View>
        </View> 
    );
};

const styles = StyleSheet.create({
    tentangAplikasiLayout: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    column: {
        flex: 1,
        width: "100%",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
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


