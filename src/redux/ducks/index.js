export const actionTypes = {
  CHANGE_STATUS: 'CHANGE_STATUS'
};

export const actions = {
  changeStatus: status => ({ type: actionTypes.CHANGE_STATUS, payload: status })
};

const initialState = {
  isSignedIn: false
};

export const rootReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'CHANGE_STATUS':
      state.isSignedIn = action.payload;
      return { ...state };
    default:
      return state;
  }
};
