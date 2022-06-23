import apiRoot from "../../../apiRoot"

// specialist/doctors/ GET 
export const productget = () => apiRoot.get(`specialist/doctors/`)



// specialist/doctors/  GET B
export const DoctorByID = (id)=> apiRoot.get('specialist/doctors/' + 1 + "/")