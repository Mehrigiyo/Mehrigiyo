import React from 'react'
import AdminTitle from '../../components/AdminTitle/AdminTitle';
import AdminTab from '../../components/AdminTab/AdminTab';

function Orders() {
  return (
    <div>
      <AdminTitle>Orders</AdminTitle>
      <AdminTab children={"Ongoing"} name={"Finished "}/>
    </div>
  )
}

export default Orders