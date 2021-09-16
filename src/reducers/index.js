import {todoReducer} from './TodoIndex';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  todoReducer,
});
