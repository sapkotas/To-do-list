import NavBar from "../NavBar";

const MainPage = () => {
  return (
    <>
      <NavBar />
      <div className="todo_container">
        <h3>Your to-do</h3>

        {/* dynamically list generation */}
        <div className="single_todo">Todo 1</div>

        <div className="single_todo">Todo 2</div>
      </div>
    </>
  );
};
export default MainPage;
