import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeroFirst from "./Components/Hero/HeroFirst/HeroFirst";
import HeroFourth from "./Components/Hero/HeroFourth/HeroFourth";
import HeroSecond from "./Components/Hero/HeroSecond/HeroSecond";
import HeroThird from "./Components/Hero/HeroThird/HeroThird";
import Cart from "./Pages/Cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
