import apiRoot from "../../apiRoot";



export const post = (data) => apiRoot.post(`login/`, data).then(res=>res)