import {ADD_TODO, DELETE_TODO, EDIT_TODO, UPDATE_TODO} from '../actions/Types';

const initialState = {
  todos: [],
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const _state = {...state};
      _state.todos.push(action.payload);
      return _state;
    }
    case DELETE_TODO: {
      console.log(DELETE_TODO);
      const _state = {...state};
      _state.todos = _state.todos.filter(todo => todo.id !== action.payload);
      return _state;
    }

    case UPDATE_TODO: {
      const _state = {...state};
      const index = _state.todos.findIndex(
        todo => todo.id === action.payload.id,
      );
      if (index >= 0) {
        _state.todos[index].data = action.payload.data;
      }
      return _state;
    }

    default:
      return state;
  }
}
