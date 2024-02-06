import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AddToDo from "../pages/add-todo/AddToDo";
import Login from "../pages/login/Login";
import MainPage from "../pages/mainPage/MainPage";
import NotFound from "../pages/notfound/NotFound";
import ViewPage from "../pages/view page/ViewPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<MainPage />} />

        <Route path="/add" element={<AddToDo />} />

        <Route path="/login/*" element={<Login />} />

        <Route path="/view/:id" element={<ViewPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
