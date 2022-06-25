import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Help from "./pages/Help/Help";
import Home from "./pages/Home/Home";
import OnlineDoctor from "./pages/OnlineDoctor/OnlineDoctor";
import Product from "./pages/Product/Product";
import About from "./pages/About/About";
import AskQuestion from "./pages/Help/_components/AskQuestions/AskQuestion";
import DoctorsList from "./pages/OnlineDoctor/_components/DoctorsList/DoctorsList";
import Productlist from "./pages/Product/_components/Productlist/Productlist";
import ProductAbout from "./pages/Product/_components/ProductAbout/ProductAbout";
import LoveDoctor from "./pages/LoveDoctors/LoveDoctors";
import LoveMedice from "./pages/LoveMedice/LoveMedice";
import DoctorInfo from "./pages/OnlineDoctor/_components/DoctorInfo/DoctorInfo";
import DoctorBron from "./pages/OnlineDoctor/_components/DoctorBron/DoctorBron";
import News from "./pages/News/News";
import FullCard from "./pages/News/_components/FullCard/FullCard";
import ToHealth from "./pages/News/_components/ToHealth/ToHealth";
import ShopMenu from "./pages/ShopMenu/ShopMenu";
import ShopBox from "./pages/ShopBox/ShopBox";
import Admin from "../Admin/Admin";

function User() {
  return (
    <>
      <Layout >
          <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/user/onlinedoctor" element={<OnlineDoctor />} />{" "}
          <Route path="/user/product" element={<Product />} />{" "}
          <Route path="/user/help" element={<Help />} />{" "}
          <Route path="/user/aboute" element={<About />} />{" "}
          <Route path="/user/askquestion" element={<AskQuestion />} />{" "}
          <Route path="/user/doctorslist" element={<DoctorsList />} />{" "}
          <Route path="/user/productlist" element={<Productlist />} />{" "}
          <Route path="/user/productabout" element={<ProductAbout />} />{" "}
          <Route path="/user/news" element={<News />} />{" "}
          <Route path="/user/onlinedoctor/:id" element={<DoctorInfo />} />{" "}
          <Route path="/user/onlinedoctor/doctors/:id" element={<DoctorBron />} />{" "}
          <Route path="/user/lovedoctors" element={<LoveDoctor />} />{" "}
          <Route path="/user/lovemedice" element={<LoveMedice />} />{" "}
          <Route path="/user/tohealth" element={<ToHealth />} />{" "}
          <Route path="/user/fullcard" element={<FullCard />} />{" "}
          <Route path="/user/shopmenu" element={<ShopMenu />} />{" "}
          <Route path="/user/shopbox" element={<ShopBox />} />{" "}
        </Routes>{" "}

      </Layout>
    </>
  )
}

export default User
