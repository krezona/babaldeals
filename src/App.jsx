// import "./App.css";
// import { useLocation } from "react-router-dom";
// import Footer from "./Components/Footer/Footer";
// import Header from "./Components/Header/Header";
// import HeroFirst from "./Components/Hero/HeroFirst/HeroFirst";
// import HeroFourth from "./Components/Hero/HeroFourth/HeroFourth";
// import HeroSecond from "./Components/Hero/HeroSecond/HeroSecond";
// import HeroThird from "./Components/Hero/HeroThird/HeroThird";
// import ProductDetails from "./Pages/Productdetails/Productdetails";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Pages/Home";
// import ScrollOnTop from "./Components/ScrollOnTop/ScrollOnTop";
// import Login from "./Pages/Login/Login";
// import SignUp from "./Pages/SignUp/SignUp";
// import Buynow from "./Pages/Buynow/Buynow";
// import Productpage from "./Pages/Productpage/Productpage";
// import Contactus from "./Pages/Contactus/Contactus";
// import Aboutus from "./Pages/Aboutus/Aboutus";
// import Privacypolicy from "./Pages/Privacypolicy/Privacypolicy";
// import Termsandconditions from "./Pages/Termsandconditions/Termsandconditions";
// import Helpcenter from "./Pages/Helpcenter/Helpcenter";
// import Cart from "./Pages/Cart/Cart";
// import Admindashboard from "./Pages/Admindashboard/Admindashboard";
// import AdminHeader from "./Components/AdminHeader/AdminHeader";
// import Adminproduct from "./Pages/Adminproduct/Adminproduct";

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Header />
//         <ScrollOnTop />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/productdetails" element={<ProductDetails />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/buynow" element={<Buynow />} />
//           <Route path="/productpage" element={<Productpage />} />
//           <Route path="/contactus" element={<Contactus />} />
//           <Route path="/aboutus" element={<Aboutus />} />
//           <Route path="/privacypolicy" element={<Privacypolicy />} />
//           <Route path="/termsandconditions" element={<Termsandconditions />} />
//           <Route path="/helpcenter" element={<Helpcenter />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/admin" element={<Admindashboard />} />
//           <Route path="/adminheader" element={<AdminHeader />} />
//           <Route path="/adminproduct" element={<Adminproduct />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { useLocation, BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeroFirst from "./Components/Hero/HeroFirst/HeroFirst";
import HeroFourth from "./Components/Hero/HeroFourth/HeroFourth";
import HeroSecond from "./Components/Hero/HeroSecond/HeroSecond";
import HeroThird from "./Components/Hero/HeroThird/HeroThird";
import ProductDetails from "./Pages/Productdetails/Productdetails";
import Home from "./Pages/Home";
import ScrollOnTop from "./Components/ScrollOnTop/ScrollOnTop";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Buynow from "./Pages/Buynow/Buynow";
import Productpage from "./Pages/Productpage/Productpage";
import Contactus from "./Pages/Contactus/Contactus";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Privacypolicy from "./Pages/Privacypolicy/Privacypolicy";
import Termsandconditions from "./Pages/Termsandconditions/Termsandconditions";
import Helpcenter from "./Pages/Helpcenter/Helpcenter";
import Cart from "./Pages/Cart/Cart";
import Admindashboard from "./Pages/Admindashboard/Admindashboard";
import AdminHeader from "./Components/AdminHeader/AdminHeader";
import Adminproduct from "./Pages/Adminproduct/Adminproduct";

function App() {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith("/admin");

  return (
    <div>
      {isAdminPath ? <AdminHeader /> : <Header />}
      <ScrollOnTop />
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
        <Route path="/termsandconditions" element={<Termsandconditions />} />
        <Route path="/helpcenter" element={<Helpcenter />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admindashboard />} />
        <Route path="/adminheader" element={<AdminHeader />} />
        <Route path="/adminproduct" element={<Adminproduct />} />
      </Routes>
      {!isAdminPath && <Footer />}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
