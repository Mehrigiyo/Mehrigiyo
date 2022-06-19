import React, { useEffect } from "react";
import Breadcrum from "../../components/Breadcrum/Breadcrum";
import "./LoveDoctors.scss";
import tree from "../../../images/Group.png";
import Notification from "../../components/Notifacation/Notifacation";
import { Breadcrumb, BreadcrumbItem, Col } from "react-bootstrap";
import { getFavoritDoctors } from "../../../store/reducers/get/FavoritDoctorGet/action";
import { useDispatch, useSelector } from "react-redux";
import DoctorCard from "../OnlineDoctor/_components/DoctorCard/DoctorCard";

function LoveDoctors({
  title = "Saqlangan shifokorlar",
  name = "/ Saqlangan shifokorlar",
  children,
}) {
  const dispatch = useDispatch();
  const { favoriteDoc } = useSelector((state) => state.favoritDoctors);
  useEffect(() => {
    dispatch(getFavoritDoctors());
  }, []);
  const addedFav = (id) => {
    return favoriteDoc.filter((a) => a.id === id).length > 0;
  };
  return (
    <div className="love_doctor">
      <div className="love_doctors_item globalContainer">
        <Breadcrum width={1400}>
          <BreadcrumbItem href="lovedoctors">{title}</BreadcrumbItem>
          {name}
        </Breadcrum>
        <div className="love_doctors_item_title">
          <h1>{title}</h1>
        </div>
        {children}
      </div>
      <div className="love_doctor_bg"></div>
      <div className="love_doctor_bgtree">
        <img src={tree} alt="bg_tree" />
      </div>
      <Notification />

      <div className="favoriteDoc globalContainer ">
        {favoriteDoc.map((item) => (
          <DoctorCard data={item} addedFav={addedFav} />
        ))}
      </div>
    </div>
  );
}

export default LoveDoctors;
