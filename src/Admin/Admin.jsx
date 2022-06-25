import React from "react";
import { Route, Routes } from "react-router-dom";
// import Header from "../User/components/Header/Header";
import AdminLayout from "./components/AdminLayout/AdminLayout";
import Consultation from './pages/Consultation/Consultation';
import Managementpanel from './pages/Managementpanel/Managementpanel';
import Orders from './pages/Orders/Orders';
import DeliveryAddress from './pages/DeliveryAddress/DeliveryAddress';
import PaymentMethods from './pages/PaymentMethods/PaymentMethods';
import Notifications from './pages/Notifications/Notifications';
import Settings from './pages/Settings/Settings';
import User from "../User/User";
// import useInput from './hooks/useInput'
// import useForm from './hooks/useForm'
// import useFetch from "./hooks/useFetch";
// import useTheme from "./hooks/useTheme";

function Admin() {
  // const lastName = useInput('akmalov', true)
  // const firstName = useInput('akmal', true)

  // const [value, { ...register }] = useForm({
  //   lastName: '',
  //   firstName: '',
  //   secondName: '',
  //   phone_number: '',
  //   password: ''
  // })

  // console.log(value);
  // const { loading, error, data, fetchData } = useFetch('http://jsonplaceholder.typicode.com/users')

  // const { theme, toggleTheme } = useTheme()

  // console.log(theme);

  // const obj = {
  //   lastName: lastName.value,
  //   firstName: firstName.value
  // }
  // console.log(obj);

  // if (loading) return <h1>...loading</h1>
  // if (error) return <h1>{error.message}</h1>
  return (

    // <div className={theme}></div>

    <div>
      {/* <button onClick={toggleTheme}>Change Theme C</button> */}
      <AdminLayout>

        {/* <div>
          <input
            style={{ width: '200px', backgroundColor: 'lightgray' }}
            type="text"
            {...lastName}
          />
          {lastName.error && <span style={{ color: 'red' }}>{lastName.error}</span>}

          <input
            style={{ width: '200px', backgroundColor: 'lightgray' }}
            type="text"
            {...firstName}
          />
          {firstName.error && <span style={{ color: 'red' }}>{firstName.error}</span>}

        </div>

        <br />
        <br />

        <div >
          <input
            style={{ width: '200px', margin: ' 10px', backgroundColor: 'lightgray' }}
            value={value.lastName}
            type="text" name="lastName"  {...register} />
          <input
            style={{ width: '200px', margin: ' 10px', backgroundColor: 'lightgray' }}
            value={value.firstName}
            type="text" name="firstName" {...register} />
          <input
            style={{ width: '200px', margin: ' 10px', backgroundColor: 'lightgray' }}
            value={value.secondName}
            type="text" name="secondName"  {...register} />
          <input
            style={{ width: '200px', margin: ' 10px', backgroundColor: 'lightgray' }}
            value={value.phone_number}
            type="number" name="phone_number"  {...register} />
          <input
            style={{ width: '200px', margin: ' 10px', backgroundColor: 'lightgray' }}
            value={value.password}
            type="password" name="password" {...register} />
        </div> */}


        {/* {JSON.stringify(data)} */}


        <Routes>
          <Route path="/admin" element={<Managementpanel />} />{" "}
          <Route path="/admin/consultation" element={<Consultation />} />{" "}
          <Route path="/admin/orders" element={<Orders />} />{" "}
          <Route path="/admin/deliveryaddress" element={<DeliveryAddress />} />{" "}
          <Route path="/admin/paymentmethods" element={<PaymentMethods />} />{" "}
          <Route path="/admin/notifications" element={<Notifications />} />{" "}
          <Route path="/admin/settings" element={<Settings />} />{" "}
        </Routes>
      </AdminLayout>
    </div>
  );
}

export default Admin;
