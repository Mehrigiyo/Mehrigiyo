import apiRoot from '../../apiRoot'
 
export const post = (data) => apiRoot.post(`user/registration/`,data)