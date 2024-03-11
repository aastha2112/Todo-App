import Checkbox from "./Checkbox";

function TermsAndConditions(props) {
  return (
    <div className="flex">
      <Checkbox
        checkboxValue={props.checkboxValue}
        handleChange={props.handleChange}
      />
      <p className="pl-[24px] w-[412px] h-[48px]">
        By creating an account, I agree to our{" "}
        <a className="underline" href="#">
          Terms of use
        </a>{" "}
        and{" "}
        <a className="underline" href="#">
          Privacy Policy
        </a>
      </p>
    </div>
  );
}
export default TermsAndConditions;
