import React, {useState} from 'react'
import AdminCircleImg from '../../../icons/admin_bg.svg'
import edit from '../../../icons/editIcon.svg'
import './Sidebar.scss';
import NavIcon1 from "../../../icons/navIcon1.svg"
import NavIcon2 from "../../../icons/navIcon2.svg"
import NavIcon3 from "../../../icons/navIcon3.svg"
import NavIcon4 from "../../../icons/navIcon4.svg"
import NavIcon5 from "../../../icons/navIcon5.svg"
import NavIcon6 from "../../../icons/navIcon6.svg"
import NavIcon7 from "../../../icons/navIcon7.svg"
import logaoutIcon from "../../../icons/logout.svg"
import { Link } from 'react-router-dom';
import { logout } from '../../../store/reducers/userme';
import Modal from '../../../User/components/Modal/Modal';
import MyAccount from '../../pages/Settings/_components/MyAccount/MyAccount';
// import {getCurrentUser} from '../../../store/reducers/userme';
// import useFetch from '../../hooks/useFetch';
function Sidebar() {
  const user = localStorage.getItem('user')
  const userObj = JSON.parse(user)
  const [open, setOpen] = useState(false)
  //  const { loading:getusermeloading, error:getusermeerror, data:getusermedata, fetchData } = useFetch('http://207.154.244.140:8000/api/user/me')
  //  if (getusermeloading) return <h1>...loading</h1>
  //  if (getusermeerror) return <h1>{getusermeerror.message}</h1>
  //  {JSON.stringify(getusermedata)}

  return (
    <>
      <div className='sidebar'>

        {user === null ?
          <div className="sidebar_header">
            <div className="sidebar_header__img">
              <img src={AdminCircleImg} alt="circle-img" />
            </div>
            <div className="sidebar_header__title">
              <h1>null</h1>
              <p>null</p>
            </div>
            <div className="sidebar_header_edit">
              <a href="#"><img src={edit} alt="" /></a>
            </div>
          </div>
          :
          <div className="sidebar_header">
            <div className="sidebar_header__img">
              <img src={userObj.image} alt="user" />
            </div>
            <div className="sidebar_header__title">
              <h1>
                {
                  userObj.first_name
                }
              </h1>
              <p>
                {
                  userObj.last_name
                }
              </p>
            </div>

            <div className="sidebar_header_edit">
              <a href="#" onClick={() => setOpen(true)}><img src={edit} alt="" /></a>
            </div>
          </div>
        }
        {
          open &&
          <Modal boolen={false} set={setOpen} >
            <MyAccount />
          </Modal>
        }

        <div className="sidebar_menu">
          <nav className='sidebar_menu_list'>
            <ul className='sidebar_menu_list_item'>
              <li className='sidebar_menu_list_item__title'>
                <Link to="/admin">
                  <img src={NavIcon7} alt="nav_icon" />  Boshqaruv paneli
                </Link>
              </li>
              <li className='sidebar_menu_list_item__title'>
                <Link to="/admin/consultation">
                  <img src={NavIcon6} alt="nav_icon" />  Consultation
                </Link>
              </li>
              <li className='sidebar_menu_list_item__title'>
                <Link to="/admin/orders">
                  <img src={NavIcon5} alt="nav_icon" />  Orders
                </Link>
              </li>
              <li className='sidebar_menu_list_item__title'>
                <Link to="/admin/deliveryaddress">
                  <img src={NavIcon2} alt="nav_icon" />  Delivery Address
                </Link>
              </li>
              <li className='sidebar_menu_list_item__title'>
                <Link to="/admin/paymentmethods">
                  <img src={NavIcon3} alt="nav_icon" />  Payment methods
                </Link>
              </li>
              <li className='sidebar_menu_list_item__title'>
                <Link to="/admin/notifications">
                  <img src={NavIcon4} alt="nav_icon" />  Notifications
                </Link>
              </li>
              <li className='sidebar_menu_list_item__title'>
                <Link to="/admin/settings">
                  <img src={NavIcon1} alt="nav_icon" />  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="sidebar_menu_logout" >
          <a href="#" onClick={() => logout()}>
            <img src={logaoutIcon} alt="" />
            Log Out
          </a>
        </div>
      </div>
    </>

  )
}

export default Sidebar