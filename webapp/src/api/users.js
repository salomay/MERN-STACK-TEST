import axios from 'axios';

const userInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API}/users`,
});

export const signIn = (user) =>{

  return userInstance.request({ method: 'POST', data: user, url: '/signIn' });
}
 

export const signUp = (user) =>{
  return  userInstance.request({ method: 'POST', data: user, url: '/signUp' });
}


export const signOut = (user) =>{
  return  userInstance.request({ method: 'POST', data: user, url: '/signOut' });
}


 
