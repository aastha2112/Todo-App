import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Home() {
  const navigate = useNavigate();
  // console.log({ currentUser });
  // if (currentUser) {
  //   !navigate("/login");
  // }

  function logOut() {
    navigate("/login");
    localStorage.removeItem("currentUser");
  }
  useEffect(() => {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    // let currentTime = Date.now
    if (!currentUser) {
      navigate("/login");
    } else {
      if (Date.now() - currentUser.loginAt > 10000) {
        logOut();
        toast.error("Session Expired!");
      }
    }
  }, []);

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <img
        className="h-[500px] w-[450px]"
        src="https://i.pinimg.com/474x/91/bc/9a/91bc9a702aca7adfe91cd372efd8af2f.jpg"
        alt="acha"
      />
      <p className="text-2xl italic m-2">
        Hang in there for no reason or you can just
      </p>
      <button
        onClick={logOut}
        className="border-2 border-gray-700 italic px-3  mb-2  h-[40px] w-[150px] rounded-md  text-white text-3xl bg-gray-700"
      >
        Log Out
      </button>
    </div>
  );
}

export default Home;
