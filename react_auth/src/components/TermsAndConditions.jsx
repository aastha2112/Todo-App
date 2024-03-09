import Checkbox from "./Checkbox";

function TermsAndConditions() {
  return (
    <div className="flex">
      <Checkbox />
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
