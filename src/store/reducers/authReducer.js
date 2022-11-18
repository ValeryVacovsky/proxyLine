const initialState = {
  authStatus: false,
};

// eslint-disable-next-line import/prefer-default-export, default-param-last
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_STATUS':
      return { authStatus: action.payload };
    default:
      return state;
  }
};
