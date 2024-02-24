import { useState } from "react";

function TodoInput({ todos, setTodos }) {
  const [todoValue, setTodoValue] = useState("");

  const HandleInputTodo = (e) => {
    setTodoValue(e.target.value);
  };

  const handleAddTodo = () => {
    const todo = {
      id: Date.now(),
      value: todoValue,
      isCompleted: false,
    };

    setTodos((todos) => [...todos, todo]);
    setTodoValue("");

    // console.log({ todo });
  };

  // console.log(todoValue);

  return (
    <div className="flex justify-center w-full p-3 ">
      <input
        className="outline-none border-2 p-5 m-4"
        type="text"
        placeholder="What needs to be done?"
        value={todoValue}
        onChange={HandleInputTodo}
      />
      <button
        className="p-4 text-amber-900 font-medium"
        onClick={handleAddTodo}
      >
        Add Task
      </button>
    </div>
  );
}

export default TodoInput;
