import apiRoot from '../../../apiRoot'
 
export const post = (data) => apiRoot.post(`user/registration/`,data)
.then(res=> console.log(res))
.catch(err=> console.log(err))


/* 
  III =  1 + 1 + 1
  XXX =  90
  XII = 12

*/