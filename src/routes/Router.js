import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AddToDo from "../pages/add-todo/AddToDo";

const Router = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<MainPage />} />
            <Route path="/addToDo" element={<AddToDo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
export default Router;
