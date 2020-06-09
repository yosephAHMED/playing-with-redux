// reducers/index.js
import { INCREMENT, INCREMENT_BY_FIVE, INCREMENT_BY_VALUE, DECREMENT, CLEAR, } from '../actions';

const initialState = {
  value: 0,
  pastValues: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        value: state.value + 1,
        pastValues: [...state.pastValues, action.payload]
      };
    case INCREMENT_BY_FIVE:
      return {
        value: state.value + 5,
        pastValues: [...state.pastValues, action.payload]
      };
    case INCREMENT_BY_VALUE:
      return {
        value: state.value + action.payload,
        pastValues: [...state.pastValues, action.payload]
      };
      //{value: state.value + action.value};
    case DECREMENT:
      return {
        value: state.value - 1,
        pastValues: [...state.pastValues, action.payload]
      };
    case CLEAR:
      return {
        value: 0,
        pastValues: []
      };
    default:
      return state;
  }
};
