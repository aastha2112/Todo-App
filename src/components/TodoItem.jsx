import { useState } from "react";

export default function TodoItem({
  todo,
  handleDelete,
  handleToggleCompletedTodo,
}) {
  const [isHovered, setIsHovered] = useState(false);

  function mouseEntered() {}
  return (
    <li
      key={todo.id}
      className="flex w-full shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-1">
        <input
          className="mb-4 h-6 border-gray-300 rounded m-5"
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => {
            handleToggleCompletedTodo(todo.id);
          }}
        />
        <p className=" flex items-center text-xl italic text-gray-800c ">
          {todo.value}
        </p>
      </div>
      {isHovered && (
        <button
          className="px-4 py-1 border-transparent flex items-center  text-amber-900 font-semibold  ml-10 justify-end"
          onClick={() => {
            handleDelete(todo.id);
          }}
        >
          X
        </button>
      )}
    </li>
  );
}
