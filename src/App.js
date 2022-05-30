import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NewsComponent from "./components/NewsComponent/NewsComponent";
import Home from "./pages/Home/Home";
import OnlineDoctor from "./pages/OnlineDoctor/OnlineDoctor"
import About from "./pages/About/About"

function App() {
    return ( 
        < Layout >
        <Routes >
        <Route path = "/" element = { < Home/> } />
        <Route path = "/onlinedoctor"element = { < OnlineDoctor/> } />
         <Route path = "/news" element = { < NewsComponent/> }/>  
         <Route path = "/aboute"  element = { < About/> }/>
         </ Routes>
        </ Layout >
    );
}

export default App;