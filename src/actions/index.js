let nextTodoId = 0;
export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  date: new Date().toString(),
  status: "incomplete",
  text
});
