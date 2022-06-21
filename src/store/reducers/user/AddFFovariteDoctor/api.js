// POST Fovarite Doctors
export const fovoritDoctorPost = (id) => apiRoot.post(`/user/favorite/doctor/add/${id}/`)


// DELETE Fovarite Doctors
export const postfavoritDoctorDel = (id) => apiRoot.delete(`user/favorite/doctor/add/${id}/`)
