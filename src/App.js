import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Context from "./Context/Context";
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
<<<<<<< HEAD

function App() {
    return ( <
        Context >
        <
        Layout >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/onlinedoctor"
        element = { < OnlineDoctor / > }
        /> <
        Route path = "/product"
        element = { < Product / > }
        />  <
        Route path = "/help"
        element = { < Help / > }
        />  <
        Route path = "/aboute"
        element = { < About / > }
        />  <
        Route path = "/askquestion"
        element = { < AskQuestion / > }
        /> <
        Route path = "/doctorslist"
        element = { < DoctorsList / > }
        />  <
        Route path = "/productlist"
        element = { < Productlist / > }
        />  <
        Route path = "/productabout"
        element = { < ProductAbout / > }
        />  <
        Route path = "/lovedoctors"
        element = { < LoveDoctor / > }
        />  <
        Route path = "/lovemedice"
        element = { < LoveMedice / > }
        />  <
        Route path = "/news"
        element = { < NewsComponent / > }
        /> < /
        Routes > <
        /Layout> < /
        Context >


    )
=======
import DoctorInfo from "./pages/OnlineDoctor/_components/DoctorInfo/DoctoInfo";
import DoctorBron from "./pages/OnlineDoctor/_components/DoctorBron/DoctorBron";
import News from "./pages/News/News";
function App() {
  return (
    <Context>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/onlinedoctor" element={<OnlineDoctor />} />{" "}
          <Route path="/product" element={<Product />} />{" "}
          <Route path="/help" element={<Help />} />{" "}
          <Route path="/aboute" element={<About />} />{" "}
          <Route path="/askquestion" element={<AskQuestion />} />{" "}
          <Route path="/doctorslist" element={<DoctorsList />} />{" "}
          <Route path="/productlist" element={<Productlist />} />{" "}
          <Route path="/productabout" element={<ProductAbout />} />{" "}
          <Route path="/news" element={<News />} />{" "}
          <Route path="/onlinedoctor/:id" element={<DoctorInfo />} />
          <Route path="/onlinedoctor/doctors/:id" element={<DoctorBron />} />
          <Route path = "/lovedoctors" element = { < LoveDoctor /> }/>
          <Route path = "/lovemedice" element = { < LoveMedice /> }/> 
        </Routes>{" "}
      </Layout>{" "}
    </Context>
  )
>>>>>>> 868a68d245a1ddc4973ea6942871bf7279908f34
}

export default App