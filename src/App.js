import User from "./User/User";
import Admin from "./Admin/Admin";
import {  useSelector } from "react-redux";

function App() {
  const { routerData } = useSelector((state) => state.changeRouter);
  return (
    <>    
      {
        routerData === "user" ? ( <
          User / >
      ) : routerData === "user" ? ( <
          Admin / >
      ) : null
      }
    </>
  );
}

export default App;