function Input(props) {
  return (
    <form className="flex flex-col">
      <label htmlFor="" className="w-[84px] h-[24px] text-[#666666]">
        {props.title}
      </label>
      <input
        className="mt-[4px] mb-[24px] p-2 h-[56px] w-[534px] rounded-xl border-input-border border-2"
        type="text"
      />
    </form>
  );
}

export default Input;
