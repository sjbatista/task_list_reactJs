import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import {
  useFonts,
  BalsamiqSans_400Regular,
  BalsamiqSans_700Bold_Italic,
} from '@expo-google-fonts/balsamiq-sans';

export default function App() {
  
  const [tasks, setTask] = useState([
    {
      id:1,
      task: 'My task 1',
    },
    {
      id:2,
      task: 'My task 2',
    },

  ]);

  const image = require('./resources/bg.jpg');

  let [fontsLoaded] = useFonts({
    BalsamiqSans_400Regular,
    BalsamiqSans_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  deleteTask = (id) => {
    //delete the task with the given 'id' from the array/state
    let newTasks = tasks.filter(function(val){
      return val.id != id;
    });
    
    setTask(newTasks);

    alert('task deleted successfully!');

  }
  
  return (
    
  <ScrollView style={{flex:1}}>
    <StatusBar hidden></StatusBar>   

    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.coverView}><Text style={styles.textHeader}>Task List</Text></View>   
    </ImageBackground> 

    {tasks.map(function(val){
      
      return(

      <View style={styles.tarefaSingle}>

      <View style={{flex:1, width: '100%', paddingEnd:10}}>
        <Text style={styles.textBody}>{val.task}</Text>
      </View>

      <View>
        <TouchableOpacity onPress={()=> deleteTask(val.id)}><AntDesign name="minuscircleo" size={24} color="black" /></TouchableOpacity>
      </View>

    </View>

    );})
    
    }
     
  </ScrollView>

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
    fontFamily:'BalsamiqSans_400Regular'
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
  },

  tarefaSingle:{
    marginTop:30,
    width:'100%',
    borderBottomWidth:1,
    borderBottomColor:'black',
    flexDirection:'row',
    paddingBottom:10,
    paddingHorizontal:10
  }

});
