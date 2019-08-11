import * as Types from "./Message.ActionType";

export function setMessage(value) {
  return { type: Types.SET_MESSAGE, value };
}
