import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" flex flex-1 mb-[24px] pt-[96px] justify-between mobile:pt-[50px] mobile:flex mobile:flex-col">
      <h1 className="h-[48px] w-[304px]  text-[#333333] font-medium text-[32px] mobile:w-full">
        Create an account
      </h1>
      <Link
        to={"/login"}
        className="underline  text-[#111111] text-[16px] mobile:underline mobile:p-1"
      >
        log in instead
      </Link>
    </div>
  );
}
export default Navbar;
