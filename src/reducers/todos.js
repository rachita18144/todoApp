const todos = (state = [], action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return { ...state};
    case 'TODOS_RECEIVED':
      console.log(action.todos)
      console.log(action.todos.length)
      console.log(Array.isArray(action.todos))
      return {
        ...state, todos: action.todos 
      }
    case 'ADD_TODO':
      console.log('inside reducer')
      return { ...state};
    case 'TODO_ADDED':
      return { ...state};
    default:
      return state;
  }
};

export default todos;