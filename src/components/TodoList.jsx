function TodoList({ todos, setTodos }) {
  const HandleDelete = (id) => {
    setTodos((todos) =>
      todos.filter((todo) => {
        todo.id !== id;
      })
    );
  };

  const todoListItems = todos.map((todo) => (
    <div
      key={todo.id}
      className="flex
      
      w-4/5
      justify-center
       m-2
      
      rounded-lg"
    >
      <input
        className="mb-4 w-6 h-6 border-gray-300 rounded m-5"
        type="checkbox"
      />
      <li className="imb-4 flex items-center text-xl italic text-gray-800c w-3/6">
        {todo.value}
      </li>
      <button
        className="px-4 py-1 border-transparent flex items-center border-8  bg-red-700 text-white font-semibold rounded-lg  hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 ml-10"
        onClick={() => HandleDelete(todo.id)}
      >
        X
      </button>
    </div>
  ));

  console.log({ todos });

  return (
    <div className=" p-5 flex h-4/5 w-full justify-evenly">
      <ul className="w-full">{todoListItems}</ul>
    </div>
  );
}

export default TodoList;
