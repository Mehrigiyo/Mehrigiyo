
// GET Fovarite Doctors
import apiRoot from "../../../apiRoot"
export const favoritDoctors = () => apiRoot.get(`user/favorite/doctors/`)


// POST Fovarite Doctors
export const fovoritDoctorPost = (id) => apiRoot.post(`/user/favorite/doctor/add/${id}/`)


// DELETE Fovarite Doctors
export const postfavoritDoctorDel = (id) => apiRoot.delete(`user/favorite/doctor/add/${id}/`)
