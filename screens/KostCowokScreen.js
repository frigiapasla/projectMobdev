import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Dimensions
} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {nama:"Kost Mizpa1", harga: 500000, jarak: "350 meter from unklab",      color:"#FF4500", image:"https://img.icons8.com/color/70/000000/name.png"},
        {nama:"Kost Karundeng Boys", harga: 300000, jarak: "240 meter from unklab",     color:"#87CEEB", image:"https://img.icons8.com/office/70/000000/home-page.png"},
        {nama:"Kost Imanuel Boys", harga: 600000, jarak: "280 meter from unklab",     color:"#4682B4", image:"https://img.icons8.com/color/70/000000/two-hearts.png"} ,
        {nama:"Kost Charity", harga: 700000, jarak: "210 meter from unklab",   color:"#6A5ACD", image:"https://img.icons8.com/color/70/000000/family.png"} ,
        {nama:"Kost Kaumpungan Boys",harga: 800000,  jarak: "400 meter from unklab",  color:"#FF69B4", image:"https://img.icons8.com/color/70/000000/groups.png"} ,
        {nama:"Kost Mambu",  harga: 1000000,jarak: "350 meter from unklab",   color:"#00BFFF", image:"https://img.icons8.com/color/70/000000/classroom.png"} ,
        {nama:"Kost Boys", harga: 600000, jarak: "300 meter from unklab",   color:"#00FFFF", image:"https://img.icons8.com/dusk/70/000000/checklist.png"} ,
      ]
    };
  }

  clickEventListener(item) {
    this.props.navigation.navigate('Calculate',{Harga: item.harga})
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          keyExtractor= {(item) => {
            return item.nama;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() => {this.clickEventListener(item)}}>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <Text style={styles.title}>{item.nama}</Text>
                <Text>{item.jarak}</Text>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },

  /******** card **************/
  card:{
    width: width,
    height:150,
    flexDirection:'row',
    padding:20,

    justifyContent: 'center', 
    alignItems: 'center' 
  },
  cardImage:{
    height: 70,
    width: 70,
  },
  title:{
    fontSize:20,
    flex:1,
    color:"#FFFFFF",
    fontWeight:'bold',
    marginLeft:40
  },
  subTitle:{
    fontSize:12,
    flex:1,
    color:"#FFFFFF",
  },
  icon:{
    height: 20,
    width: 20, 
  }
});     