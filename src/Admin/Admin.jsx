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
import useInput from './hooks/useInput'
import useForm from './hooks/useForm'

function Admin() {
  const lastName = useInput('akmalov', true)
  const firstName = useInput('akmal', true)

  const [value, { ...register }] = useForm({
    lastName: '',
    firstName: '',
    secondName: '',
    phone_number: '',
    password: ''
  })

  console.log(value);


  // const obj = {
  //   lastName: lastName.value,
  //   firstName: firstName.value
  // }
  // console.log(obj);
  return (
    <div>
      <AdminLayout>

        <div>


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
        </div>



        <Routes>
          <Route path="/" element={<Managementpanel />} />{" "}
          <Route path="/consultation" element={<Consultation />} />{" "}
          <Route path="/orders" element={<Orders />} />{" "}
          <Route path="/deliveryaddress" element={<DeliveryAddress />} />{" "}
          <Route path="/paymentmethods" element={<PaymentMethods />} />{" "}
          <Route path="/notifications" element={<Notifications />} />{" "}
          <Route path="/settings" element={<Settings />} />{" "}
        </Routes>
      </AdminLayout>
    </div>
  );
}

export default Admin;
