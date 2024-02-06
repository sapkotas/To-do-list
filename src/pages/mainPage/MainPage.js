import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import { FaEye } from "react-icons/fa";

const MainPage = () => {
  const getTodo = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

  return (
    <>
      <NavBar />

      <div className="todo_container">
        <h3>Your to-do</h3>
        {getTodo.map((el, index) => (
          <div key={index} className="single_todo">
            {el}
            <Link to={`/view/${index}`}>
              <FaEye fontSize="14px" />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainPage;
