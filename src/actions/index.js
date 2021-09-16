import {ADD_TODO, DELETE_TODO, EDIT_TODO, UPDATE_TODO} from './Types';

export const addTodo = payload => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = payload => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const editTodo = payload => {
  return {
    type: EDIT_TODO,
    payload,
  };
};

export const updateTodo = payload => {
  return {
    type: 'UPDATE_TODO',
    payload,
  };
};
