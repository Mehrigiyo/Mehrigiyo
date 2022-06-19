import apiRoot from '../../../apiRoot'
export const fovoritDoctorPost = (id) => apiRoot.post(`/user/favorite/doctor/add/${id}/`)