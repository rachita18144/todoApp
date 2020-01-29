const todos = (state = {}, action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return { ...state};
    case 'TODOS_RECEIVED':
      return { ...state, todos: action.json[0]};
    case 'ADD_TODO':
      return { ...state};
    case 'TODO_ADDED':
      return { ...state};
    default:
      return state;
  }
};

export default todos;