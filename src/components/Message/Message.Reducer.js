import * as Types from "./Message.ActionType";

const initialState = {
  message: ""
};

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_MESSAGE:
      return { ...state, message: action.payload.message };
    default:
      return state;
  }
}
