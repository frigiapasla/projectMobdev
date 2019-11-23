import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, TouchableOpacity, Image} from 'react-native';

const HomeScreen = ({ navigation }) => {
    
    return (
        <ImageBackground source={require('../assets/app_background.jpg')} style={{width: "100%", height: "100%"}}>
        <View>  
        <TouchableOpacity style={[styles.buttonContainer, styles.cewekButton]} onPress={() => navigation.navigate('Cewek')}>
          <Text style={styles.loginText}>Kost Cewek</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.buttonContainer, styles.cowokButton]} onPress={() => navigation.navigate('Cowok')}>
          <Text style={styles.loginText}>Kost Cowok</Text>
        </TouchableOpacity>
 
        </View>

        <TouchableOpacity style={[styles.buttonContainer, styles.buttonButton]} onPress={() => navigation.navigate('Component')}>
          <Text style={styles.loginText}>Component Screen</Text>
        </TouchableOpacity>
        </ImageBackground>
        
    );
};
const resizeMode = 'center';

const styles = StyleSheet.create({
    
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 100,
      marginBottom:50,
      marginEnd: 100,
      width:300,
      borderRadius:30,
    },
    cowokButton: {
      backgroundColor: "#00CED1",
        justifyContent: 'center',
        alignItems: 'center',
      shadowColor: "#0000FF",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      
      shadowOpacity: 0.50,
      shadowRadius: 12.35,
  
      elevation: 19,
    },
    cewekButton: {
        backgroundColor: "#FFC0CB",
          justifyContent: 'center',
          alignItems: 'center',
        shadowColor: "#FF007F",
        shadowOffset: {
          width: 0,
          height: 9,
        },
        
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
    
        elevation: 19,
      },
      buttonButton: {
        backgroundColor: "#778899",
          justifyContent: 'center',
          alignItems: 'center',
        shadowColor: "#FF007F",
        shadowOffset: {
          width: 0,
          height: 9,
        },
        
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
    
        elevation: 19,
      },
      
  }); 

export default HomeScreen;