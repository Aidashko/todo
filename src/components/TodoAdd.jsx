import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTodo, editTodo } from "../contexts";
import "./TodoAdd.css";

const TodoAdd = ({ todoId, setTodoId }) => {
  const [inpData, setInpData] = useState({
    title: "",
    task: "",
    dueDate: "",
  });
  const todoList = useSelector((state) => state.allReducers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inpData.title && inpData.task && inpData.dueDate !== "") {
      if (todoId === null) {
        dispatch(addTodo(inpData));
      } else {
        dispatch(editTodo(todoId, inpData));
      }
    }
    clear();
    navigate = "/list";
  };

  const clear = () => {
    setTodoId(null);
    setInpData(null);
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInpData({
      ...inpData,
      [name]: value,
    });
  };
  return (
    <div>
      <form className="todo-add">
        <h3>{todoId ? "Edit Todo" : "Add Todo"}</h3>
        <input
          type="text"
          placeholder="title"
          className="todo-input"
          name="title"
          value={inpData.title}
          onChange={() => handleChange}
        />
        <text
          type="message"
          placeholder="Task"
          className="todo-input"
          name="task"
          value={inpData.task}
          onChange={() => handleChange}
        />
        <input
          type="date"
          placeholder="Due to"
          className="todo-input"
          name="dueDate"
          value={inpData.dueDate}
          onChange={() => handleChange}
        />
        <button className="todo-btn" onClick={() => handleSubmit}>
          {todoId ? "Edit Todo" : "Add Todo"}
        </button>
      </form>
    </div>
  );
};

export default TodoAdd;
