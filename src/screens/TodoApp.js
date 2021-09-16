import React, {useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, deleteTodo, updateTodo} from '../actions/index';

export const TodoApp = () => {
  const [data, setData] = useState('');
  const [update, setUpdate] = useState({
    isvisible: false,
    data: null,
    id: null,
  });
  const {todos = []} = useSelector(state => state.todoReducer);
  const dispatch = useDispatch();

  const changeTodo = item => {
    setData(item.data);
    setUpdate({isvisible: true, data: item.data, id: item.id});
  };

  const renderItem = ({item}, index) => (
    <View style={styles.main} key={index}>
      <Text style={styles.title}>{item.data}</Text>
      <Icon
        style={styles.icon}
        name="delete"
        size={20}
        color="red"
        onPress={() => dispatch(deleteTodo(item.id))}
      />
      <Icon
        style={styles.icon}
        name="edit"
        size={20}
        color="red"
        onPress={() => changeTodo(item)}
      />
    </View>
  );
  const handleupdate = () => {
    dispatch(updateTodo({...update, data: data}));
    setData('');
    setUpdate({...update, isvisible: false});
  };

  return (
    <View>
      <Text style={styles.heading}> Todo App</Text>
      <View style={styles.heading}>
        <TextInput placeholder="add todo" value={data} onChangeText={setData} />
        <Button
          disabled={data ? false : true}
          title={update.isvisible ? 'Update Todo' : 'Add Todo'}
          onPress={() =>
            update.isvisible
              ? handleupdate()
              : dispatch(addTodo({data, id: todos?.length + 1}), setData(''))
          }
        />
        <View>
          <FlatList data={todos ?? []} renderItem={renderItem} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginLeft: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    borderBottomWidth: 2,
    borderColor: 'lightgray',
    padding: 2,
    flex: 9,
    color: 'black',
    backgroundColor: '#DCDCDC',
  },
  icon: {
    flex: 1,
    marginRight: 10,
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
  },
});
