// reducers/index.js
import { INCREMENT, INCREMENT_BY_FIVE, INCREMENT_BY_VALUE, DECREMENT, CLEAR, } from '../actions';

const initialState = {value:0};
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {value: state.value + 1};
    case INCREMENT_BY_FIVE:
      return {value: state.value + 5};
    case INCREMENT_BY_VALUE:
      return {value: state.value + action.payload};
      //{value: state.value + action.value};
    case DECREMENT:
      return {value: state.value - 1};
    case CLEAR:
      return {value: 0};
    default:
      return state;
  }
};
