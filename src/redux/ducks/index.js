export const actionTypes = {
  authInstance: {
    CHANGE_STATUS: 'CHANGE_STATUS',
    CHANGE_USER_ID: 'CHANGE_USER_ID',
    CHANGE_ACCESS_TOKEN: 'CHANGE_ACCESS_TOKEN',
  },
  api: {
    CHANGE_CONTENT: 'CHANGE_CONTENT'
  }
};

export const actions = {
  authInstance: {
    changeStatus: status => ({ type: actionTypes.authInstance.CHANGE_STATUS, payload: status }),
    changeAccessToken: token => ({ type: actionTypes.authInstance.CHANGE_ACCESS_TOKEN, payload: token }),
    changeUserID: id => ({ type: actionTypes.authInstance.CHANGE_USER_ID, payload: id })
  },
  api: {
    changeContent: content => ({ type: actionTypes.api.CHANGE_CONTENT, payload: content })
  }
};

const initialState = {
  authInstance: {
    isSignedIn: false,
    accessToken: '',
    userID: ''
  },
  content: ''
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_STATUS':
      state.authInstance.isSignedIn = action.payload;
      return state;
    case 'CHANGE_USER_ID':
      state.authInstance.userID = action.payload;
      return state;
    case 'CHANGE_ACCESS_TOKEN':
      state.authInstance.accessToken = action.payload;
      return state;
    case 'CHANGE_CONTENT':
      state.content = action.payload;
      return state;
    default:
      return state;
  }
};
