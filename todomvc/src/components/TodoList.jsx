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

  return <ul>{todoListItems}</ul>;
}

export default TodoList;
