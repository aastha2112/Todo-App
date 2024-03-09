import Header from "../components/Header";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import TermsAndConditions from "../components/TermsAndConditions";
import CreateAccountButton from "../components/CreateAccountButton";
// import Navigations from "../components/Navigations";
import Logo from "../components/Logo";

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
          <Input title="First name" />
          <Input title="Last name" />
          <Input title="Email" />
          <Input title="Password" />
          <TermsAndConditions />
          <CreateAccountButton />
        </div>
      </div>
      {/* <Navigations /> */}
    </>
  );
}

export default SignUp;
