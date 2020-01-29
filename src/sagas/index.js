//fetch todos, delete todos, add todos, edit todos api calls to be managed from here 

import { put, takeLatest, all } from 'redux-saga/effects';
import {todosRef} from '../config/firebase';
/*
function* fetchTodos() {
  //TODO:change url and change to axios 
  const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
    .then(response => response.json());

  yield put({ type: "TODOS_RECEIVED", json: json.todos || [{ error: json.message }] });
}

//watcher, considers only one request(latest) for fetching data
function* actionWatcher() {
  yield takeLatest('GET_TODOS', fetchTodos)
}
*/
function* addTodos(newToDo) {
  //TODO:change url & request type should be post, change to axios 
  let res = todosRef.push().set(newToDo);
  console.log(res)
  yield put({ type: "TODO_ADDED" });
}

function* addActionWatcher() {
  yield takeLatest('ADD_TODOS', addTodos)
}

export default function* rootSaga() {
  yield all([
    //actionWatcher(),
    addActionWatcher()
  ]);
}