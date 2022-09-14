import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';

export default function App() {

  const image = require('./resources/bg.jpg');
    
  return (

    <View style={{flex:1}}>       
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.coverView}><Text style={styles.textHeader}>Task List</Text></View>
        
    </ImageBackground>     
    </View>
  );

}

const styles = StyleSheet.create({
  image: {
    width:'100%',
    resizeMode:"cover",
    height:80,

  },
  
  textBody: {
    textAlign:'justify',
  },

  viewBody: {
    alignItems:'center',
  },

  textHeader:{
    fontSize:20,
    textAlign:'center',
    color:'white',
    marginTop:20
  },

  coverView:{
    width:'100%',
    height:80,
    backgroundColor:'rgba(0,0,0,0.3)',
  }

});
