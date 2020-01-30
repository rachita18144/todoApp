//fetch todos, delete todos, add todos, edit todos api calls to be managed from here 

import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

function saveTodoApi(todoItem) {
  return axios.request({
    method: 'post',
    url: '/api/v1/save_todo_item',
    data: todoItem
  });
}

function fetchTodoApi(){
  var result;
  axios.get('/api/v1/get_all_todo')
    .then(response => {
      console.log(response.data);
      result = response.data
    }, error => {
      console.log(error);
    });
    return result;
}

function fetchTodoApiNew(){
  return axios.get('/api/v1/get_all_todo')
}

function* fetchTodos() {
    console.log("fetching todos")
    console.log("*3*3")
    console.log(new Date().getSeconds())
    console.log(new Date().getMilliseconds()) 
    let res = yield call(fetchTodoApiNew);
    console.log(res.data)
    yield put({ type: "TODOS_RECEIVED", todos: res.data || [{ error: "error" }] });
}

//watcher, considers only one request(latest) for fetching data
function* actionWatcher() {
  yield takeEvery('GET_TODOS', fetchTodos)
}

function* addTodos(newToDo) {
  console.log(newToDo);
  let { data } = yield call(saveTodoApi, newToDo);
  console.log(data)
  yield put({ type: "TODO_ADDED"});
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