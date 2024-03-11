function Checkbox(props) {
  const isChecked = props.checkboxValue;

  return (
    <button className="flex pt-[6px]" onClick={props.handleChange}>
      <svg
        className="border border-disabled rounded-sm"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill={!isChecked ? "white" : "black"}
      >
        <rect width="18" height="18" rx="2" fill={"white"} />
        <path
          d="M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z"
          fill={!isChecked ? "white" : "black"}
        />
      </svg>
    </button>
  );
}
export default Checkbox;
