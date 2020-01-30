export const getTodos = () => {
  return {
    type: 'GET_TODOS',
  }
}

export const addTodo = (task) => {
  return {
    type: 'ADD_TODO',
    completed: false,
    task
  }
}