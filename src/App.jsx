import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeroFirst from "./Components/Hero/HeroFirst/HeroFirst";
import HeroFourth from "./Components/Hero/HeroFourth/HeroFourth";
import HeroSecond from "./Components/Hero/HeroSecond/HeroSecond";
import HeroThird from "./Components/Hero/HeroThird/HeroThird";
import ProductDetails from "./Pages/Productdetails/Productdetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ScrollToTop from "./Components/ScrollOnTop/ScrollOnTop";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Buynow from "./Pages/Buynow/Buynow";
import Productpage from "./Pages/Productpage/Productpage";
import Contactus from "./Pages/Contactus/Contactus";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Privacypolicy from "./Pages/Privacypolicy/Privacypolicy";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productdetails" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/buynow" element={<Buynow />} />
            <Route path="/productpage" element={<Productpage />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/privacypolicy" element={<Privacypolicy />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
