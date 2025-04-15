import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header";
import "./components/css/bootstrap.css";
import "./components/css/styles.css";
import Footer from "./components/footer/Footer";
import Mainpage from "./components/main/MainPage";
import { Route, Routes } from "react-router";
import Card from "./pages/Card";
import Ipad from "./pages/Ipad";
import Iphone from "./pages/Iphone";
import Mac from "./pages/Mac";
import Music from "./pages/Music";
import Search from "./pages/Search";
import Support from "./pages/Support";
import Tv from "./pages/Tv";
import Watch from "./pages/Watch";
import Fore04 from "./pages/Fore04";
import SharedPage from "./components/sharedPage/SharedPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedPage />}>
          <Route path="mainPage" element={<Mainpage />}></Route>
          <Route path="card" element={<Card />}></Route>
          <Route path="ipad" element={<Ipad />}></Route>
          <Route path="iphone" element={<Iphone />}></Route>
          <Route path="mac" element={<Mac />}></Route>
          <Route path="music" element={<Music />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="support" element={<Support />}></Route>
          <Route path="Tv" element={<Tv />}></Route>
          <Route path="watch" element={<Watch />}></Route>
          <Route path="*" element={<Fore04 />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
