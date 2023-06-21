import {REGISTER_SUCCESS} from '../types';

const initialState = {
  token :localStorage.getItem("token"),
  isAuthenticated : null,
  loading : true,
  user: null,
};

export default (state = initialState, action) => {
  const {type, payload}=action;
  switch (type) {
    case REGISTER_SUCCESS:

    return { ...state,...payload,isAuthenticated: true ,loading:false};

  default:
    return state
  }
};
