const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          date: action.date,
          name: action.text,
          status: action.status
        }
      ];

    case "SET_STATUS":
      console.log("action", action);
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, status: !todo.status } : todo
      );
    default:
      return state;
  }
};

export default todos;
