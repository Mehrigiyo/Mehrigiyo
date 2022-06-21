// import Button from "../../../../components/Buttons/Button";
import "./DoctorCard.scss";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { MdOutlineBookmarkAdded } from "react-icons/md";

// import imgs from "../../../../../images/Bitmap001.jpg";
// import img2 from "../../../../../icons/Vector001.svg";
import { Link } from "react-router-dom";
import { postFavoriteDoc , favoritDoctorDel , getFavoritDoctors} from "../../../../../store/reducers/user/FavoritDoctor/action";
import { useDispatch, useSelector } from "react-redux";
function DoctorCard({ data,addedFav }) {
  const Api = "http://207.154.244.140:8000";

  const dispatch = useDispatch();
  const {loading} = useSelector(state=> state.favoritDoctors)
  // console.log("loading " + loading);
  const saveDoctor = async (id) => {
    console.log(id, "bu bosilgan id");
    await dispatch(postFavoriteDoc(id));
    await dispatch(getFavoritDoctors());
  };

  const deleteDoctor = async(id) => {
   await dispatch(favoritDoctorDel(id));
   await dispatch(getFavoritDoctors());
  };

  return (
    <>
      <div className="doctorCard">
        <div className="doctorCard__imm ">
          <img
            className="doctorCard__img__first"
            src={Api + data.image}
            alt="img"
          />
          <button className="doctorCard__img__button">TOP</button>
          <span className="doctorCard__img__icon">
          
            { +loading === +data.id ? <span className="doctorCard__img__loading"></span> :
            !addedFav(data.id) ? (
              <MdOutlineBookmarkAdd onClick={() => saveDoctor(data.id)} />
            ) : (
              <MdOutlineBookmarkAdded onClick={()=> deleteDoctor(data.id)} color="green"/>
            )}
          </span>
        </div>
        <div className="doctorCard__body">
          <h5 className="mt-2">
            {data.full_name.split(" ")[0][0] +
              "." +
              data.full_name.split(" ")[1]}
          </h5>
          <span>⭐️ 4.5 (135 reviews)</span>
          <Link to={`/onlinedoctor/${data.id}`}>
            <button className="doctorCard__button">Appointment</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default DoctorCard;
