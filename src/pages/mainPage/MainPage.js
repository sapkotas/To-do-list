import NavBar from "../NavBar";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import AuthCheck from "../middleware/AuthCheck";

const MainPage = () => {
  // Retrieve to-do list from local storage or initialize an empty array
  const getTodo = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

  // Render MainPage component
  return (
    <>
      <NavBar /> {/* Render navigation bar component */}
      <div className="todo_container">
        <h3>Your to-do:</h3>

        {/* Conditional rendering based on existence of to-do items */}

        {getTodo && getTodo.length > 0 ? (
          // Rendered when there are to-do items
          <>
            {getTodo.map((el, index) => (
              <>
                <div className="single_todo">
                  {el} {/* Display the to-do item */}
                  <div>
                    {/* Link to view details of the to-do item */}
                    <Link to={`/view/${index}`}>
                      <FaRegEye size={"20px"} /> {/* Eye icon */}
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </>
        ) : (
          // Rendered when there are no to-do items
          <>
            <center>
              {" "}
              Nothing on your to-do. Please <Link to="/add">Add some</Link>
            </center>
          </>
        )}

        {/* Sample to-do items (commented out) */}
        {/* <div className="single_todo">Todo 1</div>
        <div className="single_todo">Todo 2</div> */}
      </div>
    </>
  );
};

export default MainPage;
