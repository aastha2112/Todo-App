function Input(props) {
  // console.log(props.error, props.fieldName);
  return (
    <div className="flex flex-col">
      <label htmlFor="" className="h-[24px] text-[#666666]">
        {props.title}
      </label>
      <input
        className={
          (!props.error ? "mb-[24px]" : "") +
          " mt-[4px] p-2 h-[56px] w-[534px] rounded-xl border-input-border border-2"
        }
        type={props.type}
        value={props.value}
        onChange={(e) => {
          const value = e.target.value;
          props.handleChange(props.fieldName, value);
        }}
      />
      {props.error && <p className="text-rose-600 mb-[24px]">{props.error}</p>}
    </div>
  );
}

export default Input;

// firstName: "First name is too short. It must be at least 4 characters.",
//     lastName: "Last name is too short. It must be at least 4 characters.",
//     email: "Invalid email address. Please check your input.",
//     password: "Password must be atleast 8 characters.",
//     confirmPassword:
//       "The passwords entered do not match. Please re-enter them to ensure accuracy.",
//     TnCChecked: "Please accept the terms and conditions to continue."
