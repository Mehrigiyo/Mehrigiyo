import { Route, Routes } from "react-router-dom";
import User from "./User/User";
import Admin from "./Admin/Admin";
import { useSelector } from "react-redux";

function App() {
  const { routerData } = useSelector((state) => state.changeRouter);
  const token =  !!localStorage.getItem('token')
  return (
    <>    
      {
        token ? <Admin /> : <User />
      }
    </>
  );
}

export default App;