import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import TodoAdd from "./components/TodoAdd";
import Todolist from "./components/Todolist";

function App() {
  const [todoId, setTodoId] = useState(null);
  return (
    <Routes>
      <Route
        path="/"
        element={<TodoAdd todoId={todoId} setTodoId={setTodoId} />}
      />
      <Route
        path="/list"
        element={<Todolist todoId={todoId} setTodoId={setTodoId} />}
      />
    </Routes>
  );
}

export default App;
