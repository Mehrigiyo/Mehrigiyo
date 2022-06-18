import apiRoot from "../../../apiRoot";

export const DoctorByID = (id)=> apiRoot.get('specialist/doctors/' + 1 + "/").then(res=>console.log(res?.data))