import Header from "../../components/Header";
import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import TermsAndConditions from "../../components/TermsAndConditions";
import CreateAccountButton from "../../components/CreateAccountButton";
// import Navigations from "../components/Navigations";
import Logo from "../../components/Logo";
import SignUpForm from "./SignUpForm";

function SignUp() {
  return (
    <>
      <Header />
      <div className="w-[1440px] h-[948px] flex  justify-end">
        <div className="flex w-1/2">
          <Logo />
        </div>
        <div className="px-[48px]">
          <Navbar />
          <SignUpForm />
        </div>
      </div>
      {/* <Navigations /> */}
    </>
  );
}

export default SignUp;
