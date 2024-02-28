import { useState } from "react";

function TodoInput({ todos, setTodos }) {
  const [todoValue, setTodoValue] = useState("");

  const HandleInputTodo = (e) => {
    setTodoValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoValue.length > 0) {
      const todo = {
        id: Date.now(),
        value: todoValue,
        isCompleted: false,
      };

      setTodos((todos) => [...todos, todo]);
      setTodoValue("");
    }

    // console.log({ todo });
  };

  // console.log(todoValue);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo();
      }}
      className="w-full todoInput"
    >
      <input
        className="outline-none h-16 shadow-md p-4 text-center w-full italic text-2xl"
        type="text"
        placeholder="What needs to be done?"
        value={todoValue}
        onChange={HandleInputTodo}
      />
    </form>
  );
}

export default TodoInput;
