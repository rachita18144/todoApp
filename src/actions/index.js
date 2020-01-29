export const getTodos = () => ({
  type: 'GET_TODOS',
});

export const addTodo = (task) => ({
  type: 'ADD_TODO',
  payload:task
});

export const deleteTodo = () => ({
    type: 'DELETE_TODO'
});