export const actionTypes = {
  authInstance: {
    CHANGE_STATUS: 'CHANGE_STATUS',
    CHANGE_USER_ID: 'CHANGE_USER_ID',
    CHANGE_ACCESS_TOKEN: 'CHANGE_ACCESS_TOKEN',
  }
};

export const actions = {
  authInstance: {
    changeStatus: status => ({ type: actionTypes.authInstance.CHANGE_STATUS, payload: status }),
    changeAccessToken: token => ({ type: actionTypes.authInstance.CHANGE_ACCESS_TOKEN, payload: token }),
    changeUserID: id => ({ type: actionTypes.authInstance.CHANGE_USER_ID, payload: id })
  }
};

const initialState = {
  authInstance: {
    isSignedIn: false,
    accessToken: '',
    userID: ''
  }
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_STATUS':
      state.authInstance.isSignedIn = action.payload;
      return state;
    case 'CHANGE_USER_ID':
      state.authInstance.userID = action.payload;
      return { ...state }
    case 'CHANGE_ACCESS_TOKEN':
      state.authInstance.accessToken = action.payload;
      return { ...state }
    default:
      return state;
  }
};
