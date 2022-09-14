import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  BalsamiqSans_400Regular,
  BalsamiqSans_400Regular_Italic,
  BalsamiqSans_700Bold,
  BalsamiqSans_700Bold_Italic,
} from '@expo-google-fonts/balsamiq-sans';

export default function App() {
  
  let [fontsLoaded] = useFonts({
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic,
    BalsamiqSans_700Bold,
    BalsamiqSans_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const iconMinus = <AntDesign name="minuscircleo" size={24} color="black" />;
  const image = require('./resources/bg.jpg');
  
  return (
    
    <View style={{flex:1}}>
    <StatusBar></StatusBar>       
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.coverView}><Text style={styles.textHeader}>Task List</Text></View>
        
    </ImageBackground>  
     {iconMinus}
    </View>
  );

}

const styles = StyleSheet.create({
  image: {
    width:'100%',
    resizeMode:"cover",
    height:80
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
    marginTop:30,
    fontFamily:'BalsamiqSans_700Bold_Italic'
  },

  coverView:{
    width:'100%',
    height:80,
    backgroundColor:'rgba(0,0,0,0.3)',
  }

});
