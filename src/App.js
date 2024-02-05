// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/App.css";
import MainPage from "./pages/mainPage/MainPage";
import Router from "./routes/Router";

const App = () => {
  return (
    <div className="name">
      <Router />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};
export default App;
