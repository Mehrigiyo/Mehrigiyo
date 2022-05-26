import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NewsComponent from "./components/NewsComponent/NewsComponent";
import Home from "./pages/Home/Home";
import OnlineDoctor from "./pages/OnlineDoctor/OnlineDoctor"

function App() {
    return ( <
        Layout >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /><
        Route path = "/onlinedoctor"
        element = { < OnlineDoctor / > }
        /> <
        Route path = "/news"
        element = { < NewsComponent / > }
        />  < /
        Routes >
        <
        /Layout>
    );
}

export default App;