import * as types from './types';

const actions = {};

actions.signUpRequest = (user) => {
  return {
    type: types.SIGNUP_REQUEST,
    payload: user,
  };
};

actions.signUpSuccess = (user) => {
  return {
    type: types.SIGNUP_SUCCESS,
    payload: user,
  };
};

actions.signInRequest = (user) => {
  return {
    type: types.SIGNIN_REQUEST,
    payload: user,
  };
};

actions.signInSuccess = (user) => {
  return {
    type: types.SIGNIN_SUCCESS,
    payload: user,
  };
};

actions.signOutRequest = (user) => {

  return {
    type: types.SIGNOUT_REQUEST,
    payload: user,
  };
};

actions.signOutSuccess = (user) => {
  return {
    type: types.SIGNOUT_SUCCESS,
    payload: user,
  };
};

export { actions };
