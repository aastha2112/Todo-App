import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos, handleToggleCompletedTodo }) {
  const handleDelete = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id != id));
  };

  const todoListItems = todos.map((todo) => (
    <TodoItem
      todo={todo}
      key={todo.id}
      handleDelete={handleDelete}
      handleToggleCompletedTodo={handleToggleCompletedTodo}
    />
  ));

  return (
    <div className=" p-5 flex h-4/5 w-full justify-evenly">
      <ul className="w-full">{todoListItems}</ul>
    </div>
  );
}

export default TodoList;
