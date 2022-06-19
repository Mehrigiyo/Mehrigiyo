import apiRoot from "../../../apiRoot"
export const favoritDoctors = () => apiRoot.get(`user/favorite/doctors/`)