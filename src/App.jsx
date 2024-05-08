import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeroFirst from "./Components/Hero/HeroFirst/HeroFirst";
import HeroFourth from "./Components/Hero/HeroFourth/HeroFourth";
import HeroSecond from "./Components/Hero/HeroSecond/HeroSecond";
import HeroThird from "./Components/Hero/HeroThird/HeroThird";
import Cart from "./Pages/Cart/Cart";
function App() {
  return (
    <>
      <div>
        {/* <Header />
        <HeroFirst />
        <HeroSecond />
        <HeroThird />
        <HeroFourth />
        <Footer /> */}
        <Header />
        <Cart />
      </div>
    </>
  );
}

export default App;
