import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal } from 'react-native';
import React from "react";
import colors from './Colors';
import {AntDesign} from '@expo/vector-icons';
import tempData from './tempData';
import TodoList from './components/TodoList';
import AddList from './components/AddList';

export default class App extends React.Component {

  state = {
    addTodoVisible: false
  }
  toggleAddtodoModal(){
    this.setState({addTodoVisible: !this.state.addTodoVisible});
  }

  render(){
  return (
    <View style={styles.container}>
    <Modal animationType="slide" visible={this.state.addTodoVisible} onRequestClose={()=> this.toggleAddtodoModal}>
      <AddList closeModal={()=>this.toggleAddtodoModal()}/>
    </Modal>
     <View style={{flexDirection: "row"}}>
       <View style={styles.divider} />
        <Text style={styles.title}>
        Todo <Text style={{fontWeight:"300", color:colors.blue}}>List</Text>
        </Text>
         <View style={styles.divider} />
    </View>
    <View style={{marginVertical:48}}>
      <TouchableOpacity style={styles.addList} onPress={()=> this.toggleAddtodoModal()}>
      <AntDesign name="plus" size={16} color = {colors.blue} />
      </TouchableOpacity>
      <Text style={styles.add}>Add List</Text>
    </View>
    <View style={{height:275, paddingLeft:32}}>
      <FlatList 
      data={tempData}
      keyExtractor={item => item.name}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) =><TodoList list = { item} />}
       />
    </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider:{
    backgroundColor: colors.lightBlue,
    height:1,
    flex:1,
    alignSelf:"center"
  },
  title:{
    fontSize:38,
    fontWeight:"800",
    color:colors.black,
    paddingHorizontal:64
  },
  addList:{
    borderWidth:2,
    borderColor:colors.lightBlue,
    borderRadius:4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  add:{
    color:colors.blue,
    fontWeight:"600",
    fontSize:14,
    marginTop:8
  }
});