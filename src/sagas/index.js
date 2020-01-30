//fetch todos, delete todos, add todos, edit todos api calls to be managed from here 

import { call, put, takeEvery, all } from 'redux-saga/effects';
import {todosRef} from '../config/firebase';

function* fetchTodos() {
    let todos = [];
    console.log("fetching todos")
    yield call(todosRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = "a";
      console.log(childData)
      todos.push(childData)
    });
  }));

    yield console.log("array", todos)
    yield console.log("array length", todos.length)
    yield console.log("array element at index 0", todos.pop())

    let test = [];
    test.push('aa');
    test.push('aa');
    test.push('aa');
    console.log("test arry",test.length)
    yield put({ type: "TODOS_RECEIVED", todos: todos || [{ error: "error" }] });
}

//watcher, considers only one request(latest) for fetching data
function* actionWatcher() {
  yield takeEvery('GET_TODOS', fetchTodos)
}

function* addTodos(newToDo) {
  console.log(newToDo);
  let res = todosRef.push().set(newToDo);
  console.log(res)
  yield put({ type: "TODO_ADDED" });
}

function* addActionWatcher() {
  yield takeEvery('ADD_TODO', addTodos)
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
    addActionWatcher()
  ]);
}