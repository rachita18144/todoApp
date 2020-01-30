const todos = (state = [], action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return { ...state};
    case 'TODOS_RECEIVED':
      console.log("*2*2")
      console.log(new Date().getSeconds())
      console.log(new Date().getMilliseconds())
      console.log(action.todos.data)
      console.log(action.todos.data.length)
      return {
        ...state, todos: action.todos.data 
      }
    case 'ADD_TODO':
      console.log('inside reducer')
      return { ...state};

    //Add todo item value
    case 'TODO_ADDED':
      window.location.reload();
      return { ...state };
    default:
      return state;
  }
};

export default todos;