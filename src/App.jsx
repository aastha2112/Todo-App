import { useEffect, useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoStatus from "./components/TodoStatus";

// currentState = 'all' | 'active' | 'completed'
let hasRendered = false;

function App(props) {
  const [todos, setTodos] = useState([]);
  const [currentState, setCurrentState] = useState("all");

  // When Component mounted
  useEffect(() => {
    console.log("Component Mounted Succesfully");
    const todosString = JSON.parse(localStorage.getItem("todos"));

    setTodos(todosString);
  }, []);

  // When State updated
  useEffect(() => {
    if (!hasRendered) {
      hasRendered = true;
      return;
    }

    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleToggleCompletedTodo(todoId) {
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);

    const todosCopy = [...todos];

    todosCopy[todoIndex].isCompleted = !todosCopy[todoIndex].isCompleted;

    setTodos(todosCopy);
  }

  function handleChangeState(state) {
    setCurrentState(state);
  }

  function handleClearCompleted() {
    const clearCompletedTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(clearCompletedTodos);
  }

  let allTodos = todos;

  if (currentState === "completed") {
    allTodos = todos.filter((todo) => todo.isCompleted);
  } else if (currentState === "active") {
    allTodos = todos.filter((todo) => !todo.isCompleted);
  }

  return (
    <>
      <Heading title="todos" />

      <div className="flex justify-center">
        <div className="flex  flex-col justify-center items-center w-1/3">
          <TodoInput todo={todos} setTodos={setTodos} />
          <div className="flex flex-col justify-center w-full">
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
                handleClearCompleted={handleClearCompleted}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
