import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NewsComponent from "./components/NewsComponent/NewsComponent";
import Context from "./Context/Context";
import Home from "./pages/Home/Home";
import OnlineDoctor from "./pages/OnlineDoctor/OnlineDoctor"

function App() {
    return ( 
     <Context>
        <Layout >
            <Routes >
                    <Route path = "/" element = { <Home /> }/>
                    < Route path = "/onlinedoctor"element = { <OnlineDoctor /> }/> 
                    <Route path = "/news"element = { < NewsComponent /> } />
            </Routes >
        </Layout>
     </Context>
    )
}

export default App;