import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NewsComponent from "./components/NewsComponent/NewsComponent";
import Context from "./Context/Context";
import Help from "./pages/Help/Help";
import Home from "./pages/Home/Home";
import OnlineDoctor from "./pages/OnlineDoctor/OnlineDoctor"
import Product from "./pages/Product/Product";
import About from "./pages/About/About";
import AskQuestion from "./pages/Help/_components/AskQuestions/AskQuestion";
import DoctorsList from "./pages/OnlineDoctor/_components/DoctorsList/DoctorsList";
import Productlist from "./pages/Product/_components/Productlist/Productlist";
import ProductAbout from "./pages/Product/_components/ProductAbout/ProductAbout";
import LoveDoctor from "./pages/LoveDoctors/LoveDoctors";
import LoveMedice from "./pages/LoveMedice/LoveMedice";

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
}

export default App;