import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    let currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <p>HOME</p>
      <button onClick={logOut} className="underline">
        Log Out
      </button>
    </div>
  );
}

export default Home;
