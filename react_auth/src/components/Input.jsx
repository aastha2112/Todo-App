import { useState } from "react";
import HideButton from "../assets/HideButton.svg";
import ShowButton from "../assets/ShowButton.svg";

function Input(props) {
  // console.log(props.error, props.fieldName);
  const [togglePwdVisibility, setTogglePwdVisibility] = useState(false);
  function handleTogglePwdVisibility() {
    setTogglePwdVisibility(!togglePwdVisibility);
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-stretch ">
        <label htmlFor="" className="h-[24px] text-[#666666]">
          {props.title}
        </label>
        {props.showHideButton && (
          <button onClick={handleTogglePwdVisibility} className="flex">
            <img
              src={togglePwdVisibility ? HideButton : ShowButton}
              alt="hide button"
            />
            {togglePwdVisibility ? "Hide" : "Show"}
          </button>
        )}
      </div>
      <input
        className={
          (!props.error ? "mb-[24px]" : "") +
          " mt-[4px] p-2 h-[56px] w-[534px] rounded-xl border-input-border border-2"
        }
        type={togglePwdVisibility ? "text" : props.type}
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
