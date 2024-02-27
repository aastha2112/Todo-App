import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoStatus from "./components/TodoStatus";

// currentState = 'all' | 'active' | 'completed'

function App(props) {
  const [todos, setTodos] = useState([]);
  const [currentState, setCurrentState] = useState("all");

  function handleToggleCompletedTodo(todoId) {
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);

    const todosCopy = [...todos];

    todosCopy[todoIndex].isCompleted = !todosCopy[todoIndex].isCompleted;

    setTodos(todosCopy);
  }

  function handleChangeState(state) {
    setCurrentState(state);
  }

  let allTodos = todos;

  if (currentState === "completed") {
    allTodos = todos.filter((todo) => todo.isCompleted);
  } else if (currentState === "active") {
    allTodos = todos.filter((todo) => !todo.isCompleted);
  }

  return (
    <>
      <div className="flex flex-col items-center h-screen justify-center">
        <Heading title="Todos" />
        <div className="flex flex-col items-start h-3/6 w-4/5 justify-around">
          <TodoInput todo={todos} setTodos={setTodos} />

          <TodoList
            todos={allTodos}
            setTodos={setTodos}
            handleToggleCompletedTodo={handleToggleCompletedTodo}
          />
          {todos.length > 0 && (
            <TodoStatus
              itemsLeft={allTodos.length}
              handleChangeState={handleChangeState}
              currentState={currentState}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
