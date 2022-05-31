import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NewsComponent from "./components/NewsComponent/NewsComponent";
import Context from "./Context/Context";
import Help from "./pages/Help/Help";
import Home from "./pages/Home/Home";
import OnlineDoctor from "./pages/OnlineDoctor/OnlineDoctor"
import Product from "./pages/Product/Product";

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
        Route path = "/news"
        element = { < NewsComponent / > }
        /> < /
        Routes > <
        /Layout> < /
        Context >
    )
}

export default App;