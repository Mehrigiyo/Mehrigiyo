import apiRoot from "../../../apiRoot"
export const postfavoritDoctorDel = (id) => apiRoot.delete(`user/favorite/doctor/add/${id}/`)
