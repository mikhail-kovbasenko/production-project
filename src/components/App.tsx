import "../styles/index.scss";
import { Route, Routes, Link } from "react-router-dom";
import { AboutPageAsync } from "../pages/AboutPage/AboutPage.async";
import { MainAsyncPage } from "../pages/MainPage/MainPage.async";
import { Suspense } from "react";
import { useTheme } from "../theme/useTheme";
import { classNames } from "../helpers/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>MAIN</Link>
      <Link to={"/about"}>ABOUT</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainAsyncPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
