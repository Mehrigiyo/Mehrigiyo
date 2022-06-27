import React, { useEffect } from "react";
// import Breadcrum from "../../components/Breadcrum/Breadcrum";
import "./LoveDoctors.scss";
// import tree from "../../../images/Group.png";
import { Breadcrumb, BreadcrumbItem, Col } from "react-bootstrap";
import { getFavoritDoctors } from "../../../store/reducers/user/FavoritDoctor/action";
import { useDispatch, useSelector } from "react-redux";
import DoctorCard from "../OnlineDoctor/_components/DoctorCard/DoctorCard";
import SaveComponents from "../../components/SaveComponents/SaveComponents";

function LoveDoctors({ title = "Saqlangan shifokorlar", name = "/ Saqlangan shifokorlar",children ,bool=true}) {
  const dispatch = useDispatch();
  const { favoriteDoc } = useSelector((state) => state.favoritDoctors);
  const {access} = useSelector(state => state.usermeReducer)

  useEffect(() => {
      if(access){
      dispatch(getFavoritDoctors());
    }
    }, []);
  const addedFav = (id) => {
    return favoriteDoc.filter((a) => a.id === id).length > 0;
  };
  return (
    <SaveComponents>
       {favoriteDoc?.length > 0 ? 
        <div className="favoriteDoc globalContainer ">
          {favoriteDoc.map((item, i) => (
            <DoctorCard key={i} data={item} addedFav={addedFav} />
          ))}
       
      </div>
      : null
      }
    </SaveComponents>
    // <div className="love_doctor">
    //   <div className="love_doctors_item globalContainer">
    //     <Breadcrum width={1400}>
    //       <BreadcrumbItem href="lovedoctors">{title}</BreadcrumbItem>
    //       {name}
    //     </Breadcrum>
    //     <div className="love_doctors_item_title">
    //       <h1>{title}</h1>
    //     </div>
    //     {children}
    //   </div>
    //   <div className="love_doctor_bg"></div>
    //   <div className="love_doctor_bgtree">
    //     <img src={tree} alt="bg_tree" />
    //   </div>

    //  <div className="favoriteDoc globalContainer ">
    //     {favoriteDoc.map((item, i) => (
    //       <DoctorCard key={i} data={item} addedFav={addedFav} />
    //     ))}
       
    //   </div>

    // </div>
  );
}

export default LoveDoctors;
