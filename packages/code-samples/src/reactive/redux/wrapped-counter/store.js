//#region actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const NEW_MESSAGE = "NEW_MESSAGE";

export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}

export function newMessage(payload = "blank") {
  return { type: NEW_MESSAGE, payload };
}
//#endregion actions

//#region select
export const counterSelector = (state) => state.counter;
export const messageSelector = (state) => state.message;
//#endregion select

//#region store
const INITIAL_STATE = {
  counter: 0,
  message: "Hello World!",
};

function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case NEW_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
}

export const store = Redux.createStore(counter);
//#endregion store
