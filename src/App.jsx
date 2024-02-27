import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoStatus from "./components/TodoStatus";

function App(props) {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [activeTodos, setActiveTodos] = useState([]);

  function handleToggleCompletedTodos(id) {
    if (todos.find((todo) => id === todo.id)) {
    }
  }

  return (
    <>
      <div className="flex flex-col items-center h-screen justify-center">
        <Heading title="Todos" />
        <div className="flex flex-col items-start h-3/6 w-4/5 justify-around">
          <TodoInput todo={todos} setTodos={setTodos} />

          <TodoList todos={todos} setTodos={setTodos} />
          {todos.length > 0 && (
            <TodoStatus
              itemsLeft={todos.length}
              todso={todos}
              active={activeTodos}
              completed={completedTodos}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
