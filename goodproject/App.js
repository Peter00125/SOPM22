import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  ActivityIndicator
} from 'react-native';
import React from 'react';
import colors from './Colors';
import { AntDesign } from '@expo/vector-icons';
import TodoList from './components/TodoList.js';
import AddList from './components/AddList.js';
import Fire from './Fire.js'

export default class App extends React.Component {
  state = {
    addTodoVisible: false,
    lists: [],
    user: {},
    loading: true

  };

  componentDidMount(){
    firebase = new Fire((error,user)=>{
      if (error){
        return alert("Error");
      }
        firebase.getLists(lists =>{
          this.setState({lists,user},()=>{
            this.setState({loading: false});
          });
        });
        this.setState({user})
    });
  }

  componentWillUnmount(){
    firebase.detach();

  }

  toggleAddtodoModal() {
    this.setState({ addTodoVisible: !this.state.addTodoVisible });
  }

  renderList = list => {
    return <TodoList list={list} updateList={this.updateList} />;
  };

  addList = list =>{
   firebase.addList({
    name: list.name,
    color: list.color,
    todos: []
   })
  };  

  updateList = list =>{
    firebase.updateList(list);
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
            <ActivityIndicator size = "large" color={colors.blue}/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          visible={this.state.addTodoVisible}
          onRequestClose={() => this.toggleAddtodoModal}>
          <AddList closeModal={() => this.toggleAddtodoModal()} addList={this.addList} />
        </Modal>
        <View>
          <Text>User:{this.state.user.uid}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            Todo{' '}
            <Text style={{ fontWeight: '300', color: colors.blue }}>List</Text>
          </Text>
          <View style={styles.divider} />
        </View>
        <View style={{ marginVertical: 48 }}>
          <TouchableOpacity
            style={styles.addList}
            onPress={() => this.toggleAddtodoModal()}>
            <AntDesign name="plus" size={16} color={colors.blue} />
          </TouchableOpacity>
          <Text style={styles.add}>Add List</Text>
        </View>
        <View style={{ height: 275, paddingLeft: 32 }}>
          <FlatList
            data={this.state.lists}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => this.renderList(item)}
            keyboardShouldPersistTaps="always"
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
  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: colors.black,
    paddingHorizontal: 64,
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  add: {
    color: colors.blue,
    fontWeight: '600',
    fontSize: 14,
    marginTop: 8,
  },
});
