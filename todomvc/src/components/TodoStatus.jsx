function TodoStatus({
  itemsLeft,
  handleChangeState,
  currentState,
  handleClearCompleted,
}) {
  const showActiveBtn = (state) => state === currentState;

  return (
    <div className="flex items-center justify-around py-7 shadow-md h-16">
      <p>{itemsLeft} items left!</p>
      <div className="flex justify-center  p-2 w-1/3">
        <button
          className={(showActiveBtn("all") ? "underline " : " ") + "flex p-2"}
          onClick={() => handleChangeState("all")}
        >
          All
        </button>
        <button
          className={
            (showActiveBtn("active") ? "underline " : " ") + "flex p-2"
          }
          onClick={() => handleChangeState("active")}
        >
          Active
        </button>
        <button
          className={
            (showActiveBtn("completed") ? "underline " : " ") + "flex p-2"
          }
          onClick={() => handleChangeState("completed")}
        >
          Completed
        </button>
      </div>
      <button onClick={() => handleClearCompleted()}>clear completed</button>
    </div>
  );
}

export default TodoStatus;
