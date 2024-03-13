function CreateAccountButton(props) {
  return (
    <button
      onClick={props.onSubmit}
      className={
        (props.formDisabled ? "bg-disabled" : "bg-[#111111]") +
        " rounded-[40px] w-[534px] h-[64px] flex justify-center items-center mt-[24px]"
      }
      // disabled={props.formDisabled}
    >
      <div className="text-white text-[22px] font-mediumgit">{props.title}</div>
    </button>
  );
}
export default CreateAccountButton;
