import React from 'react';
import { View, Text, Button,  StyleSheet} from 'react-native';

class CalculateScreen extends React.Component {
  
    constructor(props) {
        super(props);

      }

    render() {
        return (
        
        <View> 
            <Text>harga kost perbulannya : Rp.{this.props.navigation.getParam('Harga')}/perbulannya</Text>
            <Text>-------------------------------------------------------------------------------</Text>
            <Text >total harga berapa lama akan di sewa : Rp{this.props.navigation.getParam('Harga') * 3}</Text>  
            <Button title="SEWA" onPress={() => this.props.navigation.navigate('trims')}/>
  
            
        </View>
     
        
       );
    }
}


export default CalculateScreen;