import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeroFirst from "./Components/Hero/HeroFirst/HeroFirst";
import HeroFourth from "./Components/Hero/HeroFourth/HeroFourth";
import HeroSecond from "./Components/Hero/HeroSecond/HeroSecond";
import HeroThird from "./Components/Hero/HeroThird/HeroThird";
import Product from "./Pages/Product/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ScrollToTop from "./Components/ScrollOnTop/ScrollOnTop";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
