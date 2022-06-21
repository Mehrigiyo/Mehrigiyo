import apiRoot from "../../../apiRoot";



//  User Me GET
export const get = () => apiRoot.get('user/me/')


// user Me PUT
export const userMePut = (data) => apiRoot.put(`user/me/`, data)