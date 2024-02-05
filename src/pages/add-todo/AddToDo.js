import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import { useRef } from "react";

const AddToDo = () => {
  const todoText = useRef();
  const navigate = useNavigate();

  const addToDo = (e) => {
    e.preventDefault();

    const todoString = todoText.current.value;

    const initialTodo = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo")) // json.parse changes the items to the array or objects
      : [];
    initialTodo.push(todoString);
    localStorage.setItem("todo", JSON.stringify(initialTodo));

    // Use navigate function to redirect
    //this took me a long time to fix
    navigate("/home");
  };

  return (
    <>
      <NavBar />
      <div className="todo_container">
        Add to-do :<br />
        <form onSubmit={addToDo}>
          <input type="text" ref={todoText} />
          {/* {NavBar.map((data) => (
            <NavBar key={data.id} data={data}></NavBar>
          ))} */}
          <button type="submit" onSubmit={addToDo}>
            Save To do
          </button>
        </form>
      </div>
    </>
  );
};

export default AddToDo;
