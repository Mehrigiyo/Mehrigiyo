import apiRoot from "../../../apiRoot";



export const userMePut = (data) => apiRoot.put(`user/me/`, data)