const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log("action", action);
      return [
        ...state,
        {
          id: action.id,
          date: action.date,
          name: action.text,
          status: action.status
        }
      ];
    default:
      return state;
  }
};

export default todos;
