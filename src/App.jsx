import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App(props) {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <div className="flex flex-col items-center h-screen justify-center">
        <Heading title="Todos" />
        <div className="flex flex-col items-start h-3/6 w-4/5 justify-around">
          <TodoInput todo={todos} setTodos={setTodos} />
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </>
  );
}

export default App;
