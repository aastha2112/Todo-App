function TodoStatus({ itemsLeft, todos, active, completed, setActiveTodos }) {
  const activeTodosItems = (todos) => {
    setActiveTodos(todos.map((id) => todos.find((todo) => todo.id === id)));
  };
  console.log({ activeTodosItems });
  return (
    <div className="flex items-center justify-around w-full">
      <p>{itemsLeft} items left!</p>
      <div className="w-2/6 flex justify-around">
        <button onClick={activeTodosItems}>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <button>clear completed</button>
    </div>
  );
}

export default TodoStatus;
