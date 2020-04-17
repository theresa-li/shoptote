export const actionTypes = {
  CHANGE_INSTANCE: 'CHANGE_INSTANCE',
  api: {
    CHANGE_CONTENT: 'CHANGE_CONTENT'
  }
};

export const actions = {
  changeInstance: instance => ({ type: actionTypes.CHANGE_INSTANCE, payload: instance }),
  api: {
    changeContent: content => ({ type: actionTypes.api.CHANGE_CONTENT, payload: content })
  }
};

const initialState = {
  authInstance: {
    isSignedIn: false,
    accessToken: null,
    userID: null
  },
  content: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_INSTANCE': 
      state.authInstance.isSignedIn = action.payload.status;
      state.authInstance.userID = action.payload.userID;
      state.authInstance.accessToken = action.payload.accessToken;
      return state;
    case 'CHANGE_CONTENT':
      state.content = action.payload;
      return state;
    default:
      return state;
  }
};
