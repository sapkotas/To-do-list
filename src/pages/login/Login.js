import { Link, Route } from "react-router-dom";
import NavBar from "../NavBar";

const Login = () => {
  return (
    <>
      <NavBar />
      <div className="todo_container">
        <button
          onClick={() => {
            localStorage.setItem("LoggedIN", true);
          }}
        >
          LoggedIN
        </button>
        <br />
        <Link to="/login/showInfo">Show Information!</Link>
        <br />
        <br />
        <Route path="/loginShowInfo">
          <div>This is thedummy login and doesnot have a loogin page</div>
        </Route>
      </div>
    </>
  );
};
export default Login;
