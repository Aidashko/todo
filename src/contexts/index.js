export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const editTodo = (id, data) => {
  return {
    type: "EDIT_TODO",
    id: id,
    data: data,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id: id,
  };
};
