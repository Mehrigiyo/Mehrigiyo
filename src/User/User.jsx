import { Outlet, Route, Routes } from "react-router-dom";
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
import Managementpanel from "../Admin/pages/Managementpanel/Managementpanel";
import Consultation from "../Admin/pages/Consultation/Consultation";
import Orders from "../Admin/pages/Orders/Orders";
import DeliveryAddress from "../Admin/pages/DeliveryAddress/DeliveryAddress";
import PaymentMethods from "../Admin/pages/PaymentMethods/PaymentMethods";
import Notifications from "../Admin/pages/Notifications/Notifications";
import Settings from "../Admin/pages/Settings/Settings";
import AdminLayout from "../Admin/components/AdminLayout/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userGet } from "../store/reducers/user/userMe/action";

function User() {
  // console.log(<Admin />);
  const {access} = useSelector(state => state.usermeReducer)
  console.log(access);
  const dispacht = useDispatch()

  useEffect(()=>{
    dispacht(userGet())
  }, [])
  return (
    <>
      <Routes>
         <Route path='/' element={<Layout />} >
            <Route  path='/' element={<Home />} />
            <Route path="/onlinedoctor" element={<OnlineDoctor />} />

            <Route path="/news" element={<News />} />{" "}
            <Route path="/help" element={<Help />} />{" "}
            <Route path="/product" element={<Product />} />{" "}
            <Route path="/aboute" element={<About />} />{" "}        
            <Route path="/lovedoctors" element={<LoveDoctor />} />{" "}
            <Route path="/askquestion" element={<AskQuestion />} />{" "}
            <Route path="doctorslist" element={<DoctorsList />} />{" "}
            <Route path="/productlist" element={<Productlist />} />{" "}
            <Route path="/productabout" element={<ProductAbout />} />{" "}
            <Route path="/onlinedoctor/:id" element={<DoctorInfo />} />{" "}
            <Route path="/lovedoctors" element={<LoveDoctor />} />{" "}
            <Route path="/lovemedice" element={<LoveMedice />} />{" "}
            <Route path="/tohealth" element={<ToHealth />} />{" "}
            <Route path="/fullcard" element={<FullCard />} />{" "}
            <Route path="/shopmenu" element={<ShopMenu />} />{" "}
            <Route path="/shopbox" element={<ShopBox />} />{" "}
            <Route path="*" element={<h2>404 not found</h2>} />{" "}
         </Route>
         {/* <Route path="/admin" element={<AdminLayout />} >
            <Route path="/" element={<Managementpanel />} />
            <Route path="/settings" element={<Settings />} />
         </Route> */}
         {access &&
          <Route path="/admin" element={<AdminLayout />} >
            <Route index element={<Managementpanel />} />
            <Route path="consultation" element={<Consultation />} />{" "}
              <Route path="orders" element={<Orders />} />{" "}
              <Route path="deliveryaddress" element={<DeliveryAddress />} />{" "}
              <Route path="paymentmethods" element={<PaymentMethods />} />{" "}
              <Route path="notifications" element={<Notifications />} />{" "}
              <Route path="settings" element={<Settings />} />{" "}
         </Route>}
         
         <Route path="onlinedoctor/:id" element={<DoctorInfo />} />{" "}
         
           
      </Routes>
      {/* <Layout > */}
      {/* <Layout >

        <Routes >
          <Route path="/" element={<DoctorsList />} />{" "}
          
           <Route index path='/' element={<><Outlet /> <Home /> </>} >

          </Route>
          
          <Rout
          e path="/onlinedoctor" element={<OnlineDoctor />} >
             <Route path="doctorslist" element={<DoctorsList />} />{" "}
          </Route>
          <Route path="/news" element={<News />} />{" "}
          <Route path="/help" element={<Help />} />{" "}
          <Route path="/product" element={<Product />} />{" "}
          <Route path="/aboute" element={<About />} />{" "}
          <Route path="/lovedoctors" element={<LoveDoctor />} />{" "}
          <Route path="/askquestion" element={<AskQuestion />} />{" "}


          <Route path="/admin" element={<>
           <Outlet/>
           <Sidebar/>
          </>} >
             <Route index element={ <Managementpanel /> } />
             <Route path="consultation" element={<Admin > {<Consultation /> }</Admin>} />
             <Route path="orders" element={<Admin > <Orders /> </Admin>} />
             <Route path="deliveryAddress" element={<Admin > <DeliveryAddress /> </Admin>} />
             <Route path="paymentmethods" element={<Admin > <PaymentMethods /> </Admin>} />
             <Route path="notifications" element={<Admin > <Notifications /> </Admin>} />
             <Route path="settings" element={<Admin > <Settings /> </Admin>} />

          </Route>
        </Routes>
      </Layout> */}
          {/* <Routes>
          <Route index path='/' element={<><Layout /> <Outlet/></>} > */}
            {/* <Route path="/onlinedoctor" element={<OnlineDoctor />} />{" "}

          {/* </Route> */}
          { 
          // <Route path="/user/product" element={<Product />} />{" "}
          // <Route path="/user/help" element={<Help />} />{" "}
          // <Route path="/user/aboute" element={<About />} />{" "}
          // <Route path="/user/news" element={<News />} />{" "}
          // <Route path="/doctorslist" element={<DoctorsList />} />{" "}
          // <Route path="/onlinedoctor/doctors/:id" element={<DoctorBron />} />{" "}

          // <Route path="/askquestion" element={<AskQuestion />} />{" "}
          // <Route path="/productlist" element={<Productlist />} />{" "}
          // <Route path="/productabout" element={<ProductAbout />} />{" "}
          // <Route path="/onlinedoctor/:id" element={<DoctorInfo />} />{" "}
          // <Route path="/lovedoctors" element={<LoveDoctor />} />{" "}
          // <Route path="/lovemedice" element={<LoveMedice />} />{" "}
          // <Route path="/tohealth" element={<ToHealth />} />{" "}
          // <Route path="/fullcard" element={<FullCard />} />{" "}
          // <Route path="/shopmenu" element={<ShopMenu />} />{" "}
          // <Route path="/shopbox" element={<ShopBox />} />{" "}
          
          // <Route path='/admin' element={<>
          //    <Outlet />
          //    <Admin />
          // </>}>

          //   <Route path="settings" element={<Settings />} />{" "}
          
          // </Route>
          }

            {
              //  <Route path="/admin" element={<Admin/>} />{' '}
              //  <Route path="/admin" element={<Managementpanel />} />{" "}
              //  <Route path="/admin/consultation" element={<Consultation />} />{" "}
              //  <Route path="/admin/orders" element={<Orders />} />{" "}
              //  <Route path="/admin/deliveryaddress" element={<DeliveryAddress />} />{" "}
              //  <Route path="/admin/paymentmethods" element={<PaymentMethods />} />{" "}
              //  <Route path="/admin/notifications" element={<Notifications />} />{" "}
              //  <Route path="/admin/settings" element={<Settings />} />{" "}
            }
            {/* <Route path="*" element={<><h1>404 not Found</h1></>} />
        </Routes>{" "} */} 

      {/* </Layout> */}

    
    </>
  )
}

export default User
