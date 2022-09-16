import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Modal, TouchableHighlight, TextInput, LogBox } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import {
  useFonts,
  BalsamiqSans_400Regular,
  BalsamiqSans_700Bold_Italic,
} from '@expo-google-fonts/balsamiq-sans';

//Our App :D
export default function App() {
  
  // Ignore dialog boxes
  

  // Our tasks and task states
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


  const[currentTask, setCurrentTask] = useState('');

  // Our Modal and Modal states
  const [modal, setModal] = useState(true);

  // Our background image
  const image = require('./resources/bg.jpg');

  // Load text fonts to the project
  let [fontsLoaded] = useFonts({
    BalsamiqSans_400Regular,
    BalsamiqSans_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  //delete the task with the given 'id' from the array/state
  deleteTask = (id) => {
    
    let newTasks = tasks.filter(function(val){
      return val.id != id;
    });
    
    setTask(newTasks);

    alert('task deleted successfully!');

  }
  
  
  addTask = () => {
    setModal(!modal);
    alert('Task saved successfully!');
    let id = 0;

    if(tasks.length > 0){
      id = tasks[tasks.length-1].id + 1;
      
      let task = {id:id,task:currentTask};
      setTask([...tasks,task]);
    }else if(tasks.length = 0){
      id = 1;
      let task = {id:id,task:currentTask};
      setTask([...tasks,task]);
    }
  }

  // Main return, where everything happens
  return (
    
  <ScrollView style={{flex:1}}>
  <StatusBar hidden/>   
    <Modal
        animationType="fade"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput onChangeText={text => setCurrentTask(text)} autoFocus={true}></TextInput>

            <TouchableHighlight style={{...styles.openButton, backgroundColor: "#2196F3"}} onPress={() => addTask()}>
              <Text style={styles.textStyle}>Add task</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.coverView}><Text style={styles.textHeader}>Task List</Text></View>   
    </ImageBackground> 


    {
    tasks.map(function(val){    
    //Task
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

    <TouchableOpacity style={{alignItems:'center'}} onPress={() => setModal(true)}>
      <View style={{padding:20, flexDirection:'row'}}>
      <AntDesign name="addfile" size={36} color="black" />
      </View>
    </TouchableOpacity>
     
  </ScrollView>

  );

}

const styles = StyleSheet.create({
  image: {
    width:'100%',
    height: 80,
    resizeMode: "cover"
  },
  btnAddTarefa:{
    width:200,
    padding:8,
    backgroundColor:'gray',
    marginTop:20
  },
  coverView:{
    width:'100%',
    height:80,
    backgroundColor:'rgba(0,0,0,0.5)'
  },
  textHeader:{
    textAlign:'center',
    color:'white',
    fontSize:20,
    marginTop:30,
    fontFamily:'BalsamiqSans_700Bold_Italic'
  },
  tarefaSingle:{
      marginTop:30,
      width:'100%',
      borderBottomWidth:1,
      borderBottomColor:'black',
      flexDirection:'row',
      paddingBottom:10,
      paddingEnd:10,
      paddingStart:10
  },
  addTaskSingle:{
    flexDirection:'row',
    width:'100%',
  },
  //Estilos para nossa modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'rgba(0,0,0,0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex:5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }

});
