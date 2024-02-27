function TodoStatus({ itemsLeft, handleChangeState, currentState }) {
  const showActiveBtn = (state) => state === currentState;

  return (
    <div className="flex items-center justify-around w-full">
      <p>{itemsLeft} items left!</p>
      <div className="w-2/6 flex justify-around">
        <button
          className={showActiveBtn("all") ? "underline" : ""}
          onClick={() => handleChangeState("all")}
        >
          All
        </button>
        <button
          className={showActiveBtn("active") ? "underline" : ""}
          onClick={() => handleChangeState("active")}
        >
          Active
        </button>
        <button
          className={showActiveBtn("completed") ? "underline" : ""}
          onClick={() => handleChangeState("completed")}
        >
          Completed
        </button>
      </div>
      <button>clear completed</button>
    </div>
  );
}

export default TodoStatus;
