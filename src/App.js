import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NewsComponent from "./components/NewsComponent/NewsComponent";
import Home from "./pages/Home/Home";
import RestAip from "./pages/RestAip/RestAip";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsComponent />} />
        <Route path="/restapi" element={<RestAip/>} />
      </Routes>
    </Layout>
  );
}

export default App;
